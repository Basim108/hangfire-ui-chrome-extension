// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'tabActivated') {
        if(localSettings.isExtensionApplied)
            return;
        console.log('Hangfire Extension: Tab Activated');

        const currentUrl = window.location.href;

        const env = isHangfireDashboard(currentUrl);
        if (env)
            onTabActivation(env);
    }
});

const localSettings = {
    currentEnv: null,
    envs:[
        { name: 'Development', url: 'localhost:5092/CRAWL-JOBS' },
        { name: 'Testing', url: 'jobs.test.priceme.com/crawl-jobs' },
        { name: 'Production', url: 'jobs.pve.priceme.com/crawl-jobs' },
    ]
};

function onTabActivation(env) {
    console.log('Hangfire Extension: page is a hangfire dashboard', env);
    localSettings.isExtensionApplied = true;
}

function isHangfireDashboard(currentUrl) {
    return localSettings.envs.find(env => currentUrl.startsWith(env.url));
}