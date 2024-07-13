document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('show-icon');

  // Load the current state
  browser.storage.local.get('showIcon').then(({ showIcon }) => {
    checkbox.checked = showIcon;
  });

  // Listen for changes
  checkbox.addEventListener('change', (event) => {
    const showIcon = event.target.checked;
    browser.storage.local.set({ showIcon }).then(() => {
      alert('Download icon visibility updated. Reload the page to see the effect.');
    });
  });
});