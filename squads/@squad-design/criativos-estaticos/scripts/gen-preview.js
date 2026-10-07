const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', 'outputs', 'Social Media', 'Junho_2026');

function toPngDataURL(p) {
  const b64 = fs.readFileSync(p).toString('base64');
  return 'data:image/png;base64,' + b64;
}

const artes = [
  { num: '01', tema: 'SNGPC', titulo: 'R$6.000 de multa por falha no SNGPC', layout: 'Split Vertical (E)', artigo: 'sngpc-farmacia-como-evitar-multa-2026' },
  { num: '02', tema: 'PDV / Fila', titulo: 'Fila no caixa está derrubando seu faturamento', layout: 'Fullbleed Overlay (H)', artigo: 'pdv-rapido-fila-caixa-faturamento-farmacia' },
  { num: '03', tema: 'Estoque', titulo: '38% das quebras causadas por vencimento', layout: 'Número Centralizado (F)', artigo: 'controle-estoque-farmacia-evitar-perdas-vencimento' },
  { num: '04', tema: 'Precificação', titulo: 'Você sabe qual é a margem real de cada produto?', layout: 'Split Imagem Topo (B)', artigo: 'precificacao-farmacia-markup-margem-lucratividade' },
  { num: '05', tema: 'PBM / Convênios', titulo: '+40% de ticket médio com PBM', layout: 'Tipográfico Destaque Numérico (F)', artigo: 'pbm-farmacia-como-aumentar-ticket-medio-convenios' },
  { num: '06', tema: 'KPIs', titulo: '10 indicadores que separam farmácias lucrativas', layout: 'Fullbleed Atmosférico (A)', artigo: 'kpis-indicadores-gestao-farmacia' },
];

const cards = artes.map(function(a) {
  const pngPath = path.join(outDir, 'arte-' + a.num + '.png');
  const dataUrl = toPngDataURL(pngPath);
  return [
    '<div class="card">',
    '  <div class="card-img-wrap">',
    '    <div class="arte-num">Arte ' + a.num + '</div>',
    '    <img src="' + dataUrl + '" alt="Arte ' + a.num + ' - ' + a.tema + '">',
    '    <div class="card-overlay">',
    '      <a href="arte-' + a.num + '.html" target="_blank" class="btn-preview">&#128269; Ver HTML</a>',
    '      <a href="arte-' + a.num + '.png" download="arte-' + a.num + '-prosystem.png" class="btn-download">&#8595; Baixar PNG</a>',
    '    </div>',
    '  </div>',
    '  <div class="card-info">',
    '    <div class="card-badge">' + a.tema + '</div>',
    '    <div class="card-title">' + a.titulo + '</div>',
    '    <div class="card-meta">',
    '      <span class="tag-layout">' + a.layout + '</span>',
    '      <span class="tag-artigo">&#128196; ' + a.artigo.replace(/-/g, ' ') + '</span>',
    '    </div>',
    '  </div>',
    '</div>'
  ].join('\n');
}).join('\n');

const html = '<!DOCTYPE html>\n' +
'<html lang="pt-BR">\n' +
'<head>\n' +
'  <meta charset="UTF-8">\n' +
'  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
'  <title>Criativos Junho_2026 - ProSystem Sistemas</title>\n' +
'  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@700;800&display=swap" rel="stylesheet">\n' +
'  <style>\n' +
'    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }\n' +
'    :root {\n' +
'      --blue: #4A7AB8; --blue-dark: #2E5A8F; --blue-deeper: #1D3A5F;\n' +
'      --blue-tint: #EEF4FB; --dark: #111827; --text: #374151;\n' +
'      --muted: #6B7280; --border: #E5E7EB; --bg: #F0F4FA; --white: #ffffff;\n' +
'    }\n' +
'    body { font-family: "Inter", sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; }\n' +
'    .header {\n' +
'      background: linear-gradient(135deg, var(--blue-deeper) 0%, var(--blue-dark) 100%);\n' +
'      padding: 40px 48px 36px; position: relative; overflow: hidden;\n' +
'    }\n' +
'    .header::before {\n' +
'      content: ""; position: absolute; inset: 0;\n' +
'      background: radial-gradient(ellipse at 80% 50%, rgba(74,122,184,0.3) 0%, transparent 70%);\n' +
'    }\n' +
'    .header-inner {\n' +
'      max-width: 1400px; margin: 0 auto; position: relative; z-index: 1;\n' +
'      display: flex; align-items: flex-start; justify-content: space-between;\n' +
'      gap: 24px; flex-wrap: wrap;\n' +
'    }\n' +
'    .header-tag {\n' +
'      display: inline-block; background: rgba(255,255,255,0.12);\n' +
'      border: 1px solid rgba(255,255,255,0.2); color: rgba(255,255,255,0.75);\n' +
'      font-size: 11px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;\n' +
'      padding: 6px 16px; border-radius: 4px; margin-bottom: 16px;\n' +
'    }\n' +
'    .header-title {\n' +
'      font-family: "Montserrat", sans-serif; font-size: 36px; font-weight: 800;\n' +
'      color: #FFFFFF; margin-bottom: 10px; line-height: 1.15;\n' +
'    }\n' +
'    .header-subtitle { font-size: 16px; color: rgba(255,255,255,0.70); line-height: 1.5; }\n' +
'    .header-stats { display: flex; gap: 16px; flex-wrap: wrap; align-items: flex-start; padding-top: 8px; }\n' +
'    .stat-chip {\n' +
'      background: rgba(255,255,255,0.10); border: 1px solid rgba(255,255,255,0.18);\n' +
'      border-radius: 10px; padding: 12px 20px; text-align: center; min-width: 100px;\n' +
'    }\n' +
'    .stat-num { font-family: "Montserrat", sans-serif; font-size: 28px; font-weight: 800; color: #fff; }\n' +
'    .stat-label { font-size: 11px; color: rgba(255,255,255,0.60); font-weight: 600; letter-spacing: 1px; text-transform: uppercase; margin-top: 2px; }\n' +
'    .toolbar { background: var(--white); border-bottom: 1px solid var(--border); padding: 16px 48px; }\n' +
'    .toolbar-inner { max-width: 1400px; margin: 0 auto; font-size: 13px; color: var(--muted); }\n' +
'    .toolbar-inner strong { color: var(--dark); }\n' +
'    .main { padding: 40px 48px 80px; max-width: 1400px; margin: 0 auto; }\n' +
'    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 28px; }\n' +
'    .card {\n' +
'      background: var(--white); border-radius: 16px;\n' +
'      box-shadow: 0 2px 12px rgba(0,0,0,0.07); overflow: hidden;\n' +
'      transition: transform 0.2s ease, box-shadow 0.2s ease;\n' +
'    }\n' +
'    .card:hover { transform: translateY(-4px); box-shadow: 0 8px 32px rgba(29,58,95,0.15); }\n' +
'    .card-img-wrap {\n' +
'      position: relative; overflow: hidden; aspect-ratio: 4/5;\n' +
'      background: var(--blue-deeper);\n' +
'    }\n' +
'    .card-img-wrap img {\n' +
'      width: 100%; height: 100%; object-fit: cover; display: block;\n' +
'      transition: transform 0.3s ease;\n' +
'    }\n' +
'    .card:hover .card-img-wrap img { transform: scale(1.02); }\n' +
'    .card-overlay {\n' +
'      position: absolute; inset: 0; background: rgba(17,24,39,0.65);\n' +
'      display: flex; flex-direction: column; align-items: center; justify-content: center;\n' +
'      gap: 14px; opacity: 0; transition: opacity 0.2s ease;\n' +
'    }\n' +
'    .card:hover .card-overlay { opacity: 1; }\n' +
'    .btn-preview, .btn-download {\n' +
'      display: inline-flex; align-items: center; gap: 8px;\n' +
'      padding: 13px 28px; border-radius: 10px; font-size: 14px; font-weight: 700;\n' +
'      text-decoration: none; cursor: pointer; border: none; font-family: "Inter", sans-serif;\n' +
'      transition: all 0.15s ease;\n' +
'    }\n' +
'    .btn-preview { background: #FFFFFF; color: var(--blue-deeper); }\n' +
'    .btn-preview:hover { background: var(--blue-tint); }\n' +
'    .btn-download { background: var(--blue); color: #fff; }\n' +
'    .btn-download:hover { background: var(--blue-dark); }\n' +
'    .arte-num {\n' +
'      position: absolute; top: 14px; left: 14px; z-index: 2;\n' +
'      background: rgba(255,255,255,0.15); backdrop-filter: blur(4px);\n' +
'      border: 1px solid rgba(255,255,255,0.25); color: #fff;\n' +
'      font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;\n' +
'      padding: 5px 12px; border-radius: 6px;\n' +
'    }\n' +
'    .card-info { padding: 20px 22px 22px; }\n' +
'    .card-badge {\n' +
'      display: inline-block; background: var(--blue-tint); color: var(--blue-dark);\n' +
'      font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;\n' +
'      padding: 4px 10px; border-radius: 4px; margin-bottom: 10px;\n' +
'    }\n' +
'    .card-title {\n' +
'      font-family: "Montserrat", sans-serif; font-size: 15px; font-weight: 700;\n' +
'      color: var(--dark); line-height: 1.4; margin-bottom: 12px;\n' +
'    }\n' +
'    .card-meta { display: flex; flex-direction: column; gap: 5px; }\n' +
'    .tag-layout { font-size: 11px; color: var(--muted); font-weight: 600; }\n' +
'    .tag-artigo { font-size: 11px; color: var(--muted); font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n' +
'    .footer { text-align: center; padding: 32px; font-size: 12px; color: var(--muted); border-top: 1px solid var(--border); background: var(--white); }\n' +
'    .footer strong { color: var(--blue); }\n' +
'  </style>\n' +
'</head>\n' +
'<body>\n' +
'  <div class="header">\n' +
'    <div class="header-inner">\n' +
'      <div>\n' +
'        <div class="header-tag">ExpxAgents · Squad Criativos Estaticos</div>\n' +
'        <div class="header-title">Criativos Blog ProSystem</div>\n' +
'        <div class="header-subtitle">Lote Junho_2026 · Feed Instagram 1080x1350px · 6 artes aprovadas</div>\n' +
'      </div>\n' +
'      <div class="header-stats">\n' +
'        <div class="stat-chip"><div class="stat-num">6</div><div class="stat-label">Artes</div></div>\n' +
'        <div class="stat-chip"><div class="stat-num">5</div><div class="stat-label">Layouts</div></div>\n' +
'        <div class="stat-chip"><div class="stat-num">2x</div><div class="stat-label">Resolucao</div></div>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'  <div class="toolbar">\n' +
'    <div class="toolbar-inner"><strong>ProSystem Sistemas</strong> · Junho 2026 · Passe o mouse sobre cada criativo para ver opcoes</div>\n' +
'  </div>\n' +
'  <div class="main">\n' +
'    <div class="grid">\n' +
cards + '\n' +
'    </div>\n' +
'  </div>\n' +
'  <div class="footer">Gerado por <strong>ExpxAgents · Squad Criativos Estaticos</strong> · Alfandega 6/6 aprovados · Junho 2026</div>\n' +
'</body>\n' +
'</html>';

const outFile = path.join(outDir, 'preview.html');
fs.writeFileSync(outFile, html, 'utf-8');
const stat = fs.statSync(outFile);
console.log('preview.html salvo: ' + Math.round(stat.size / 1024) + ' KB em ' + outFile);
