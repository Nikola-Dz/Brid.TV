bridPlayerInfo.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: bridInjectScript,
  });
});

clearBridLocalStorage.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: bridClear,
  });

});

function bridInjectScript() {
  var s = document.createElement("script");
  s.src = chrome.runtime.getURL("info.js");
  s.onload = function () {
    this.remove();
  };
  (document.head || document.documentElement).appendChild(s);
}

function bridClear() {
  localStorage.clear();
}