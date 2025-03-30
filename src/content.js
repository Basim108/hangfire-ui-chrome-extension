import logger from './logger.js';
import localSettings from './localSettings.js';
import filterJobs from './features/filterJobs.js';

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(message => {
    logger.log('got a message', message);
    switch (message.action) {
        case 'tabActivated':
        case 'tabUpdated':{
            const env = isHangfireDashboard(window.location.href);
            if (env) {
                applyFeatures(env);
            }
        }
    }
});

function applyFeatures(env) {
    logger.log('page is a hangfire dashboard', env);
    if (filterJobs.isApplied()) {
        filterJobs.apply()
    }
    logger.log('Tab Activated');
}

function isHangfireDashboard(currentUrl) {
    return localSettings.envs.find(env => currentUrl.includes(env.url));
}