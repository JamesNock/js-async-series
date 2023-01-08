export default function two(theCallback) {
    let n = 3;
    let interval = setInterval(() => {
        console.log('two...')
        --n;
        if (n === 0) {
            clearInterval(interval);
            theCallback();
        }
    }, 300)
}
