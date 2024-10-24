// Получаем изображение из локального хранилища
chrome.storage.local.get(['backgroundImage'], function(result) {
    if (result.backgroundImage) {
        document.body.style.backgroundImage = `url(${result.backgroundImage})`;
    } else {
        document.body.style.backgroundColor = '#000'; // Черный фон, если изображение не найдено
    }
});
