const logPrefix = 'Hangfire Extension:';

function log(msg, ...args) {
    console.log(`${logPrefix}: ${msg}`, ...args)
}

export default { log }