const logPrefix = 'Hangfire Extension:';

function log(msg, ...args) {
    console.log(`${logPrefix}: ${msg}`, ...args)
}

function debug(msg, ...args) {
    console.debug(`${logPrefix}: ${msg}`, ...args)
}

function info(msg, ...args) {
    console.info(`${logPrefix}: ${msg}`, ...args)
}

function error(msg, ...args) {
    console.error(`${logPrefix}: ${msg}`, ...args)
}

export default { log, debug, info, error }