/*document.getElementById('changeWallpaper').addEventListener('click', async () => {
    const groupId = document.getElementById('groupSelect').value;
    chrome.runtime.sendMessage({ groupId }, (wallpapers) => {
        if (wallpapers.length > 0) {
            const randomWallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)];
            chrome.tabs.update({ url: randomWallpaper });
        } else {
            console.error("No wallpapers found.");
        }
    });
});
*/
/*document.getElementById('changeWallpaper').addEventListener('click', async () => {
    const groupId = document.getElementById('groupSelect').value;
    chrome.runtime.sendMessage({ groupId }, (wallpapers) => {
        if (wallpapers.length > 0) {
            const randomWallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)];
            // Сохраняем изображение в локальном хранилище
            chrome.storage.local.set({ backgroundImage: randomWallpaper }, function() {
                // Открываем новую вкладку с фоном
                chrome.tabs.create({ url: chrome.runtime.getURL('background.html') });
            });
        } else {
            console.error("No wallpapers found.");
        }
    });
});
*/
document.getElementById('changeWallpaper').addEventListener('click', async () => {
    const groupId = document.getElementById('groupSelect').value;
    chrome.runtime.sendMessage({ groupId }, (wallpapers) => {
        if (wallpapers.length > 0) {
            const randomWallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)];
            // Сохраняем изображение в локальном хранилище
            chrome.storage.local.set({ backgroundImage: randomWallpaper }, function() {
                // Открываем новую вкладку с фоном
                chrome.tabs.create({ url: chrome.runtime.getURL('background.html') });
            });
        } else {
            console.error("No wallpapers found.");
        }
    });
});

