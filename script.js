const input = document.getElementById('userNumbersInput');
const buttonMin = document.getElementById('buttonMin');
const buttonMax = document.getElementById('buttonMax');
const displaySortedNumbers = document.getElementById('displaySortedNumbers');

const getSplitedNumbersFromInput = () => {
    const inputValue = input.value;
    const arr = inputValue.split(",").map(Number);
    return arr;
}
const sortingArray = () => {
    const arr = getSplitedNumbersFromInput();
    let j = arr.length;
    for (j; j > 0; j--) {
        console.log('j', j);
        for (i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
            console.log('arr', arr);
            displaySortedNumbers.innerHTML = arr;
        }
    }
}

const findMaxNumber = () => {
    const arr = getSplitedNumbersFromInput();
    let maxVal = -999999999999;
    for (let i = 0; i < arr.length; i++) {
        console.log('arr[i]', arr[i]);
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
        console.log('maxVal', maxVal);
    }

    buttonMax.innerText = maxVal;
    if (displaySortedNumbers.innerHTML === '') {
        sortingArray();
    }
}
const findMinNumber = () => {
    const arr = getSplitedNumbersFromInput();
    let minVal = 9999999;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        console.log('arr[i]', arr[i]);
        if (arr[i] < minVal) {
            minVal = arr[i];
        }
        console.log('minVal', minVal);
    }
    buttonMin.innerText = minVal;
    if (displaySortedNumbers.innerHTML === '') {
        sortingArray();
    }
}

buttonMax.addEventListener('click', findMaxNumber);
buttonMin.addEventListener('click', findMinNumber);