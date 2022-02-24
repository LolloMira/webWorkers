

const primeWorker = new Worker("./worker.js");
primeWorker.addEventListener('message', messageReceived)

let message = {operation: "prime", numberToReach: 1000000}
primeWorker.postMessage(100000);


function messageReceived(event) {
    let primeToNumber = event.data;
    let par = document.getElementById('prime-numbers');

    for (const prime of primeToNumber) {
        const node = document.
    }

}