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
// console.log(lowAndHighNumber([-3, -2, -19, 2, 6, 90, 34, 'array', 'number', true]))


function checkString(str) {
    let string = {}
    for (let i = 0; i < str.length; i++) {
        let element = str[i].toLowerCase()
        if (string[element]) {
            string[element]++;
        } else {
            string[element] = 1;
        }
    }
    return string;
}

// console.log(checkString('Lorem ipsum dolor sit amet consectetur adipisicing elit Itaque harum'));


function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return;
    }
    for (let i = 0; i < arr1.length; i++) {
        let indexCheck = arr2.indexOf(arr1[i] ** 2)
        if (indexCheck === -1) {
            return;
        } else {
            arr2.splice(indexCheck, 1)
        }
    }
    return true;
}

// console.log(same([2, 3, 4, 5], [4, 9, 16, 25]));


