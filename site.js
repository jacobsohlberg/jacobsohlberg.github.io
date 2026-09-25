'use strict';
const search = document.querySelector('#publication-search');
if (search) {
  document.querySelector('.filter-bar').hidden = false;
  const articles = [...document.querySelectorAll('#journal-list .publication')];
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/ø/g, 'o').replace(/æ/g, 'ae').replace(/þ/g, 'th').replace(/ð/g, 'd');
  search.addEventListener('input', () => {
    const terms = normalize(search.value).trim().split(/\s+/).filter(Boolean);
    let count = 0;
    articles.forEach(article => {
      const matches = terms.every(term => normalize(article.textContent).includes(term));
      article.hidden = !matches;
      if (matches) count++;
    });
    document.querySelector('#result-count').textContent = `${count} ${count === 1 ? 'article' : 'articles'}`;
    document.querySelector('#no-results').hidden = count !== 0;
  });
}
const printButton = document.querySelector('.print-button');
if (printButton) {
  printButton.hidden = false;
  printButton.addEventListener('click', () => window.print());
}
