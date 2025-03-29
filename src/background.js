chrome.tabs.onActivated.addListener((activeInfo) => {
    const tabId = activeInfo.tabId;
    chrome.tabs.sendMessage(tabId, { action: 'tabActivated', activeInfo: activeInfo });
});
