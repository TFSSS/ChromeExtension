chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    alert(request.text); // → QiitaのSampleを送ります。
    sendResponse({ text: "QiitaのSampleを返します。" });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.status=='start'){
        chrome.storage.local.set({ 'status': request.status }, function () {});
        sendResponse({ status: "startをセットしました。" });
    }
});

// タブが切り替わった時のイベント
chrome.tabs.onActivated.addListener(function (tabId) {
    chrome.tabs.query({"active": true}, function (tab) {
        console.log(tab[0].url); // 切り替わったタブのURL
    });
});