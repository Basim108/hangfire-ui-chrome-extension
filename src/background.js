chrome.tabs.onActivated.addListener((activeInfo) => {
    const tabId = activeInfo.tabId;
    console.log('Hangfire Extension: Send Tab Activation message');
    chrome.tabs.sendMessage(tabId, { action: 'tabActivated' });
});

chrome.tabs.onUpdated.addListener((activeInfo) => {
    const tabId = activeInfo.tabId;
    console.log('Hangfire Extension: Send Tab Update message');
    chrome.tabs.sendMessage(tabId, { action: 'tabUpdated' });
});