chrome.runtime.onInstalled.addListener(() => {
  chrome.identity.getAuthToken({ interactive: true }, (token) => {
    console.log('Token obtained:', token);
  });
});
