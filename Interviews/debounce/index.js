// Throttle function
function throttle(callback, delay) {
    let lastTime = 0;
    return function () {
        const currentTime = new Date().getTime();
        if (currentTime - lastTime >= delay) {
            console.log(currentTime - lastTime)
            callback.apply(this, arguments);
            lastTime = currentTime;
            console.log(currentTime - lastTime, lastTime)
        }
    };
}

// Debounce function
function debounce(callback, delay) {
    let timerId;
    return function () {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            callback.apply(this, arguments);
        }, delay);
    };
}

// Throttle input event handler
const throttleInput = document.getElementById('throttleInput');
const throttleResult = document.getElementById('throttleResult');
throttleInput.addEventListener('input', throttle(function () {
    throttleResult.textContent = `Throttle: ${throttleInput.value}`;
}, 1000)); // Throttle time interval: 1000ms (1 second)

// Debounce input event handler
const debounceInput = document.getElementById('debounceInput');
const debounceResult = document.getElementById('debounceResult');
debounceInput.addEventListener('input', debounce(function () {
    debounceResult.textContent = `Debounce: ${debounceInput.value}`;
}, 1000)); // Debounce time interval: 1000ms (1 second)