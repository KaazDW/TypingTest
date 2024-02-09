"use strict";
let startTime;
let timerId;
let pressedKeys = [];
function keysListener() {
    document.addEventListener("keydown", event => {
        const key = event.key;
        console.log(key);
    });
}
keysListener();
function startTimerAndRecordKeys() {
    pressedKeys = [];
    startTime = Date.now();
    timerId = setInterval(() => {
        const elapsedTime = (Date.now() - startTime) / 1000;
        if (elapsedTime >= 20) {
            clearInterval(timerId);
            console.log("Chronomètre terminé!");
            console.log("Touches appuyées:", pressedKeys);
        }
    }, 1000);
}
const startButton = document.getElementById("startButton");
if (startButton) {
    startButton.addEventListener("click", startTimerAndRecordKeys);
}
