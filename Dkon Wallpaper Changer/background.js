const API_URL = "https://api.dkon.app/api/v3/method/group.getWall";
const params = {
  clientId: "1302",
  accountId: "4417",
  accessToken: "0ecfd4519b0cf0b06a1306ffbea36ebf",
};

async function fetchWallpapers(groupId) {
  try {
    const formData = new URLSearchParams({
      ...params,
      groupId: groupId,
    });

    const response = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });

    // Проверка на успешный ответ
    if (!response.ok) {
      console.error("HTTP error:", response.status, response.statusText);
      return [];
    }

    const data = await response.json();

    // Проверка на наличие ошибки в ответе API
    if (data.error) {
      console.error("Error fetching wallpapers:", data);
      return [];
    }

    return data.items.map(item => item.imgUrl);
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}

// Обработчик сообщений
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.groupId) {
    fetchWallpapers(request.groupId).then(wallpapers => {
      sendResponse(wallpapers);
    });
    return true; // Указывает, что ответ будет отправлен асинхронно
  }
});
