'use strict';
const translated = [...document.querySelectorAll('[data-en]')];
translated.forEach(el => { el.dataset.es = el.innerHTML; });
const altText = [...document.querySelectorAll('[data-alt-en]')];
altText.forEach(el => { el.dataset.altEs = el.alt; });
function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'es') lang = 'es';
  document.documentElement.lang = lang;
  translated.forEach(el => { el.innerHTML = el.dataset[lang]; });
  altText.forEach(el => { el.alt = lang === 'en' ? el.dataset.altEn : el.dataset.altEs; });
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
  document.title = lang === 'en' ? 'LogCut PRO — Cutting guides for your sawmill' : 'LogCut PRO — Guías de corte para tu aserradero';
  try { localStorage.setItem('logcutpro-lang', lang); } catch { /* Storage is optional. */ }
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
try { setLanguage(localStorage.getItem('logcutpro-lang') || 'es'); } catch { setLanguage('es'); }
document.getElementById('year').textContent = String(new Date().getFullYear());
