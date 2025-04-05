function debounceSearchInput(duration, search) {
    let timer;

    return function (pattern) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            search(pattern);
        }, duration);
    };
}

export default debounceSearchInput;