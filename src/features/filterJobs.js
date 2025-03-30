import logger from "../logger";

const jobInputId = 'hangfire-ui-ext-filter-jobs';
function isApplied(){
    const isApplied = document.querySelector(`#${jobInputId}`) != null;
    if(!isApplied)
        logger.log('filter jobs feature is disabled');
    return isApplied;
}

function apply(){
    if(isApplied())
        return;
    const jobList = document.querySelector('div.js-jobs-list');
    if(!jobList)
        return;
    jobList.insertAdjacentHTML('beforeend', `<input type="text" id="${jobInputId}" />`)
}

export default { isApplied, apply };