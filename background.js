browser.runtime.onInstalled.addListener(() => {
  browser.storage.local.set({ showIcon: true });
});

function toggleTableIcons() {
  browser.storage.local.get("showIcon").then(({ showIcon }) => {
    showIcon = !showIcon;
    browser.storage.local.set({ showIcon }).then(() => {
      location.reload();
    });
  });
}