const localSettings = {
    currentEnv: null,
    envs:[
        { name: 'Development', url: 'localhost:5092/CRAWL-JOBS' },
        { name: 'Testing', url: 'jobs.test.priceme.com/crawl-jobs' },
        { name: 'Production', url: 'jobs.pve.priceme.com/crawl-jobs' },
    ],
    features: {
        filterJobs: {
            isEnabled: true,
        }
    }
};

export default localSettings;