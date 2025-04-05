chrome.tabs.onActivated.addListener((activeInfo) => {
    const tabId = activeInfo.tabId;
    console.debug('Hangfire Extension: Send Tab Activation message', activeInfo);
    chrome.tabs.sendMessage(tabId, { action: 'tabActivated' });
});

chrome.tabs.onUpdated.addListener(tabId => {
    console.debug('Hangfire Extension: Send Tab Update message', tabId);
    chrome.tabs.sendMessage(tabId, { action: 'tabUpdated' });
});