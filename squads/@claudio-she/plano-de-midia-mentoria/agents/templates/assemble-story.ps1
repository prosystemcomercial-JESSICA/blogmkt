# assemble-story.ps1 — Monta o HTML final do plano de mídia a partir de um JSON de dados
# Uso: .\assemble-story.ps1 -DataFile "C:\caminho\_story-data.json"
# Retorna: "OK|<caminho_html>|<total_slides>" em caso de sucesso

param(
    [Parameter(Mandatory)][string]$DataFile
)

$ErrorActionPreference = "Stop"
$scriptDir  = Split-Path -Parent $MyInvocation.MyCommand.Path
$squadRoot  = Split-Path -Parent (Split-Path -Parent $scriptDir)
$template   = Join-Path $scriptDir "story.html"

# ── 1. Ler inputs ──────────────────────────────────────────────────────────────
$data = Get-Content $DataFile -Raw -Encoding UTF8 | ConvertFrom-Json
$html = Get-Content $template  -Raw -Encoding UTF8

# ── 2. Contar slides e gerar barra de progresso ────────────────────────────────
$nBOFU  = if ($data.anis_bofu) { $data.anis_bofu.Count } else { 0 }
$nTOFU  = if ($data.anis_tofu) { $data.anis_tofu.Count } else { 0 }
# 8 fixos (capa/raio-x/icp/funil/seg/budget/passos/encerramento) + 2 headers (BOFU+TOFU) + ANIs
$total  = 8 + 2 + $nBOFU + $nTOFU

$segs = ('<div class="prog-seg"></div>' * $total)
$html = $html.Replace('<!-- PROG_SEGS_PLACEHOLDER -->', $segs)

# ── 3. Substituir tokens fixos ─────────────────────────────────────────────────
$data.tokens.PSObject.Properties | ForEach-Object {
    $html = $html.Replace("{{$($_.Name)}}", [string]$_.Value)
}
# Substituir TOTAL_SLIDES calculado
$html = $html.Replace('{{TOTAL_SLIDES}}', "$total")

# ── 4. Função para gerar HTML de um slide ANI ──────────────────────────────────
function Build-AniSlide {
    param([psobject]$ani, [int]$idx, [string]$campLabel)

    $fmtTag = switch ($ani.tipo) {
        'CARROSSEL' { 'CARROSSEL' }
        'REELS'     { 'REELS' }
        default     { 'EST&#193;TICO' }
    }

    if ($ani.tipo -eq 'CARROSSEL') {
        $cards = ($ani.cards | ForEach-Object { "            <li>$_</li>" }) -join "`n"
        $bodyHtml = "          <ul class=""cards-list"">
$cards
          </ul>"
    } else {
        $bodyHtml = "          <div class=""ani-body-text"">$($ani.body)</div>"
    }

    return @"
  <div class="slide" id="slide-$idx">
    <div class="slide-inner">
      <div class="ani-slide">
        <div class="ani-slide-hdr">
          <div class="ani-id-label">$($ani.id)</div>
          <div class="ani-tags"><span class="ani-tag fmt">$fmtTag</span><span class="ani-tag ang">$($ani.angulo)</span></div>
        </div>
        <div class="ani-zones">
          <div class="ani-zone">
            <div class="ani-zlbl">Texto Principal</div>
            <div class="ani-hook">$($ani.hook)</div>
$bodyHtml
          </div>
          <div class="ani-row-grid">
            <div class="ani-zone"><div class="ani-zlbl">T&#237;tulo</div><div class="ani-titulo">$($ani.titulo)</div></div>
            <div class="ani-zone"><div class="ani-zlbl">Descri&#231;&#227;o</div><div class="ani-descr">$($ani.descricao)</div></div>
          </div>
        </div>
        <div class="ani-foot">
          <div><div class="ani-fk">CTA</div><div class="ani-fv">$($ani.cta)</div></div>
          <div><div class="ani-fk">N&#237;vel</div><div class="ani-fv">Consci&#234;ncia $($ani.nivel)</div></div>
          <div><div class="ani-fk">Campanha</div><div class="ani-fv">$campLabel</div></div>
        </div>
      </div>
    </div>
  </div>
"@
}

# ── 5. Gerar slides BOFU ───────────────────────────────────────────────────────
$aniHtml   = ""
$slideIdx  = 7   # ANIs BOFU começam em slide-7

if ($data.anis_bofu) {
    foreach ($ani in $data.anis_bofu) {
        $aniHtml += Build-AniSlide -ani $ani -idx $slideIdx -campLabel 'BOFU &middot; Andromeda'
        $slideIdx++
    }
}

# ── 6. Gerar slides TOFU (se houver ANIs próprios) ────────────────────────────
$tofuHeaderIdx = $slideIdx      # slide-N (TOFU header — já está no template)
$slideIdx++

if ($data.anis_tofu) {
    foreach ($ani in $data.anis_tofu) {
        $aniHtml += Build-AniSlide -ani $ani -idx $slideIdx -campLabel 'TOFU &middot; Alcance'
        $slideIdx++
    }
}

$passosIdx       = $slideIdx      # slide-N1
$encerramentoIdx = $slideIdx + 1  # slide-N2

# ── 7. Substituir seção ANI no template ──────────────────────────────────────
# Regex captura tudo entre ANI_SECTION_START e ANI_SECTION_END (inclusive)
$aniSectionRegex = '(?s)  <!-- ANI_SECTION_START -->.*?<!-- ANI_SECTION_END -->'
$replacement     = "  <!-- ANI_SECTION_START -->`n$($aniHtml.TrimEnd())`n  <!-- ANI_SECTION_END -->"
$html = [regex]::Replace($html, $aniSectionRegex, $replacement)

# ── 8. Corrigir IDs variáveis ────────────────────────────────────────────────
$html = $html.Replace('id="slide-N"',  "id=""slide-$tofuHeaderIdx""")
$html = $html.Replace('id="slide-N1"', "id=""slide-$passosIdx""")
$html = $html.Replace('id="slide-N2"', "id=""slide-$encerramentoIdx""")

# ── 9. Salvar HTML ────────────────────────────────────────────────────────────
$outPath = $data.output_path
if (-not [System.IO.Path]::IsPathRooted($outPath)) {
    $outPath = Join-Path $squadRoot $outPath
}
$outDir = Split-Path -Parent $outPath
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Force -Path $outDir | Out-Null }

[System.IO.File]::WriteAllText($outPath, $html, [System.Text.Encoding]::UTF8)

Write-Output "OK|$outPath|$total"
