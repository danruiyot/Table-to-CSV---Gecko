browser.storage.local.get("showIcon").then(({ showIcon }) => {
  if (showIcon) {
    addDownloadIcons();
  }
});

function addDownloadIcons() {
  const tables = document.querySelectorAll('table');
  tables.forEach((table, index) => {
    const downloadIcon = document.createElement('button');
    downloadIcon.innerHTML = '⬇️';
    downloadIcon.style.cursor = 'pointer';
    downloadIcon.style.marginLeft = '10px';
    downloadIcon.addEventListener('click', () => downloadTableAsCSV(table, index));
    table.parentElement.insertBefore(downloadIcon, table);
  });
}

function downloadTableAsCSV(table, index) {
  const rows = table.querySelectorAll('tr');
  let csvContent = '';
  rows.forEach(row => {
    const cols = row.querySelectorAll('td, th');
    const rowData = Array.from(cols).map(col => col.textContent.trim()).join(',');
    csvContent += rowData + '\n';
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const currentDate = new Date();
  const filename = `${document.title}-${currentDate.getHours()}${currentDate.getMinutes()}${currentDate.getSeconds()}${currentDate.getMilliseconds()}.csv`;
  link.setAttribute('href', URL.createObjectURL(blob));
  link.setAttribute('download', filename);
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}