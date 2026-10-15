// Переключение верхних вкладок с содержимым
const topTabs = document.querySelectorAll('.tabs:first-of-type .tab, .tab[data-tab]');
const tabContents = document.querySelectorAll('.tab-content');

topTabs.forEach(tab => {
  tab.addEventListener('click', function() {
    const tabId = this.getAttribute('data-tab');
    const parent = this.parentElement;
    parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');

    tabContents.forEach(content => {
      content.classList.remove('active');
      if (content.id === 'tab-' + tabId) {
        content.classList.add('active');
      }
    });
  });
});

// Переключение нижних вкладок
document.querySelectorAll('.tab[data-btab]').forEach(tab => {
  tab.addEventListener('click', function() {
    const parent = this.parentElement;
    parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
  });
});

// Выделение строк в таблицах
document.querySelectorAll('#ordersTable tbody tr, #itemsTable tbody tr').forEach(row => {
  row.addEventListener('click', function(e) {
    if (e.target.type === 'checkbox') return;
    const table = this.closest('table');
    table.querySelectorAll('tbody tr').forEach(r => r.classList.remove('selected'));
    this.classList.add('selected');
  });
});

// Сортировка по заголовкам (визуальная)
document.querySelectorAll('table th').forEach(th => {
  th.addEventListener('click', function() {
    const arrow = this.querySelector('.sort-arrow');
    if (arrow) {
      arrow.textContent = arrow.textContent === '▼' ? '▲' : '▼';
    }
  });
});