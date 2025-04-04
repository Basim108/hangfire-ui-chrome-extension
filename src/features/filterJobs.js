import logger from "../logger";
import debounceSearchInput from "../utils/debouncedInput";
import {isRecurringJobsPage} from "../utils/hangfirePages";
import './filterJobs.css';

const jobInputId = 'hangfire-ui-ext-filter-jobs';
const htmlTemplate = `<div><input type="text" id="${jobInputId}" /></div>`
const debouncedSearch = debounceSearchInput(800, filterJobsList);

function isApplied() {
    return document.querySelector(`#${jobInputId}`);
}

function apply() {
    const filterInput = isApplied()
    if (filterInput) {
        logger.debug('filter jobs feature has been already applied.', filterInput);
        return;
    }
    const jobList = document.querySelector('div.js-jobs-list');
    if (!jobList) {
        logger.debug('there is no job list found on the page.', jobList);
        return;
    }
    if (!isRecurringJobsPage()) {
        logger.debug('job filtering is implemented only for recurring job page.');
        return;
    }
    jobList.insertAdjacentHTML('afterbegin', htmlTemplate)

    document.getElementById(jobInputId).addEventListener('input', function (e) {
        debouncedSearch(e.target.value);
    });
}

function filterJobsList(pattern) {
    logger.debug('filtering a jobs list', pattern);
    const jobsListContainer = document.querySelector('.js-jobs-list');
    if (!jobsListContainer) return;

    const table = jobsListContainer.querySelector('table');
    if (!table) return;

    const rows = table.querySelectorAll('tr.js-jobs-list-row');

    if (!pattern || pattern.trim() === '') {
        rows.forEach(row => {
            row.style.display = '';
        });
        return;
    }
    if (isRecurringJobsPage())
        filterRecurringJobs(pattern.toLowerCase(), rows);
}

function filterRecurringJobs(pattern, rows) {
    rows.forEach(row => {
        const wordBreakCells = row.querySelectorAll('td.word-break');
        let matchFound = false;
        wordBreakCells.forEach(cell => {
            if (cell.textContent.toLowerCase().includes(pattern))
                matchFound = true;
        });
        row.style.display = matchFound ? '' : 'none';
    });
}

export default {isApplied, apply};