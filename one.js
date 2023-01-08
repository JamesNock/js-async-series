export default function one(theCallback) {
    let n = 3;
    let interval = setInterval(() => {
        console.log('one...')
        --n;
        if (n === 0) {
            clearInterval(interval);
            theCallback();
        }
    }, 300)
}
