let startTime: number | undefined;
let timerId: NodeJS.Timeout | undefined;
let pressedKeys: string[] = [];


function keysListener(): void {
    document.addEventListener("keydown", event => {
        const key = event.key;
        console.log(key);
    });
}
keysListener();

function startTimerAndRecordKeys(): void {
    pressedKeys = [];
    startTime = Date.now();

    timerId = setInterval(() => {
        const elapsedTime = (Date.now() - startTime!) / 1000; 
        if (elapsedTime >= 20) {
            clearInterval(timerId!);
            console.log("Chronomètre terminé!");
            console.log("Touches appuyées:", pressedKeys);
        }
    }, 1000);

}

const startButton: HTMLButtonElement | null = document.getElementById("startButton") as HTMLButtonElement;
if (startButton) {
    startButton.addEventListener("click", startTimerAndRecordKeys);
}
