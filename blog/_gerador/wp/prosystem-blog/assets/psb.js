// Blog ProSystem — recursos de leitura dos artigos (barra de progresso, sumário ativo,
// copiar link, contagens regressivas e teste interativo). Sem dependências.
(function () {
  // Barra de progresso de leitura
  var barra = document.querySelector('.progresso');
  var texto = document.querySelector('.texto');
  if (barra && texto) {
    var tick = false;
    var atualiza = function () {
      var r = texto.getBoundingClientRect();
      var total = r.height - window.innerHeight;
      var feito = Math.min(1, Math.max(0, -r.top / (total > 0 ? total : 1)));
      barra.style.transform = 'scaleX(' + feito + ')';
      tick = false;
    };
    window.addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(atualiza); } }, { passive: true });
    atualiza();
  }

  // Sumário: destaca a seção em leitura
  var links = document.querySelectorAll('.sumario a');
  if (links.length && 'IntersectionObserver' in window) {
    var mapa = {};
    links.forEach(function (l) { mapa[l.getAttribute('href').slice(1)] = l; });
    var io = new IntersectionObserver(function (itens) {
      itens.forEach(function (i) {
        if (!i.isIntersecting) return;
        links.forEach(function (l) { l.classList.remove('ativo'); });
        if (mapa[i.target.id]) mapa[i.target.id].classList.add('ativo');
      });
    }, { rootMargin: '-15% 0px -75% 0px' });
    Object.keys(mapa).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }

  // Copiar link do artigo
  var copiar = document.querySelector('[data-copiar]');
  if (copiar) {
    copiar.addEventListener('click', function () {
      var can = document.querySelector('link[rel=canonical]'); var url = can ? can.href : location.href;
      var ok = function () { copiar.setAttribute('aria-label', 'Link copiado'); copiar.title = 'Link copiado'; };
      if (navigator.clipboard) navigator.clipboard.writeText(url).then(ok, function () { window.prompt('Copie o link:', url); });
    });
  }

  // Contagens regressivas: <span data-prazo="2026-10-15T23:59:59-03:00"></span>
  document.querySelectorAll('[data-prazo]').forEach(function (el) {
    var falta = new Date(el.getAttribute('data-prazo')).getTime() - Date.now();
    if (falta <= 0) { el.textContent = 'Prazo encerrado'; return; }
    var dias = Math.ceil(falta / 86400000);
    el.textContent = dias === 1 ? 'Último dia' : 'Faltam ' + dias + ' dias';
  });

  // Teste interativo: <div class="teste" data-teste> com inputs name="q1".."qN" (valor 1 = sim)
  // e uma função global window.resultadoTeste(respostas) que devolve {titulo, texto}.
  document.querySelectorAll('[data-teste]').forEach(function (caixa) {
    var saida = caixa.querySelector('.resposta');
    var nomes = Array.from(new Set(Array.from(caixa.querySelectorAll('input[type=radio]')).map(function (i) { return i.name; })));
    caixa.addEventListener('change', function () {
      var r = nomes.map(function (n) { var m = caixa.querySelector('input[name="' + n + '"]:checked'); return m ? Number(m.value) : null; });
      if (r.indexOf(null) !== -1 || typeof window.resultadoTeste !== 'function') return;
      var res = window.resultadoTeste(r);
      saida.querySelector('b').textContent = res.titulo;
      saida.querySelector('p').textContent = res.texto;
      var cta = saida.querySelector('.botao');
      if (cta) cta.hidden = false;
    });
  });
})();

// Listas de checagem: <div class="checagem" data-checklist> com .checagem__conta
(function () {
  document.querySelectorAll('[data-checklist]').forEach(function (lista) {
    var caixas = lista.querySelectorAll('input[type=checkbox]');
    var conta = lista.querySelector('.checagem__conta');
    var atualiza = function () {
      var n = Array.prototype.filter.call(caixas, function (c) { return c.checked; }).length;
      if (conta) conta.textContent = n + ' de ' + caixas.length + ' em dia';
    };
    lista.addEventListener('change', atualiza);
    atualiza();
  });
})();

// Formatação de moeda e número para as calculadoras dos artigos
window.brl = function (v) { return isFinite(v) ? v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : '—'; };
window.num = function (v, casas) { return isFinite(v) ? v.toLocaleString('pt-BR', { minimumFractionDigits: casas || 0, maximumFractionDigits: casas || 0 }) : '—'; };
