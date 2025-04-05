function isRecurringJobsPage() {
    const pageTitle = document.getElementById('page-title');
    if (!pageTitle)
        return false;
    return pageTitle.textContent.toLowerCase().includes('recurring jobs');
}

export {isRecurringJobsPage};