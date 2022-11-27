// low and highest number of an array 

function lowAndHighNumber(array) {
    let low = 0
    let high = 0
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        if (typeof element !== 'number') continue;
        if (low > element) {
            low = element;
        }
        if (high < element) {
            high = element;
        }
    }
    return [low, high]
}
console.log(lowAndHighNumber([-3, -2, -19, 2, 6, 90, 34, 'array', 'number', true]))

