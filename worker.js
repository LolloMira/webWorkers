addEventListener('message',);

function messageReceived(event) {
    let numberToReach = event.data;
    let primeToNumber = calculatePrimeNumbersTo(numberToReach);
    postMessage(primeToNumber);
}


function calculatePrimeNumbersTo(number) {
    let array = Array.from({length: number -1}, (v, i) => i + 2);
    return array.reduce((p, c) => p.some(e => c % e === 0) ? p : [...p, c])
}


function subNumbersTo(number) {
    let result = 0;
    for (let i = 0; i <= number; i++) {
       result += i;
    }
    return result;
}
