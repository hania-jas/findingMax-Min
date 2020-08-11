const input = document.getElementById('userNumbersInput');
const buttonMin = document.getElementById('buttonMin');
const buttonMax = document.getElementById('buttonMax');
const displaySortedNumbers = document.getElementById('displaySortedNumbers');
const buttonPrimeNumbers = document.getElementById('buttonPrimeNumbers');
const buttonDividedInThree = document.getElementById('buttonDividedInThree');

const getSplitedNumbersFromInput = () => {
    const inputValue = input.value;
    const arr = inputValue.split(",").map(Number);
    return arr;
}
const sortingArray = () => {
    let arr = getSplitedNumbersFromInput();
    let j = arr.length;
    for (j; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    }
    displaySortedNumbers.innerHTML = arr;
    return arr;
}

const displaySortedArray = () => {
    if (displaySortedNumbers.innerHTML === '') {
        sortingArray();
    }
}

const findMaxNumber = () => {
    const arr = getSplitedNumbersFromInput();
    let maxVal = -999999999999;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    buttonMax.innerText = maxVal;
    displaySortedArray();
}

const findMinNumber = () => {
    const arr = getSplitedNumbersFromInput();
    let minVal = 9999999;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minVal) {
            minVal = arr[i];
        }
        console.log({ minVal });
    }
    buttonMin.innerText = minVal;
    displaySortedArray();
}

const findPrimeNumbers = () => {
    const sortedArr = sortingArray();
    let complexNumbers = [];
    let primeNumbers = [];
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] >= 2) {
            if (sortedArr[i] % 2 === 0 && sortedArr[i] !== 2 || sortedArr[i] % 3 === 0 && sortedArr[i] !== 3 || sortedArr[i] % 5 === 0 && sortedArr[i] !== 5 || sortedArr[i] % 7 === 0 && sortedArr[i] !== 7) {
                complexNumbers.push(sortedArr[i]);
            } else {
                primeNumbers.push(sortedArr[i]);
            }
        }
    }
    buttonPrimeNumbers.innerText = primeNumbers;
}

const findNumbersDividedInThree = () => {
    const sortedArr = sortingArray();
    let numbersDividedInThree = [];

    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] % 3 === 0 && sortedArr[i] !== 0) {
            numbersDividedInThree.push(sortedArr[i]);
        }
    }
    buttonDividedInThree.innerText = numbersDividedInThree;
}

buttonMax.addEventListener('click', findMaxNumber);
buttonMin.addEventListener('click', findMinNumber);
buttonPrimeNumbers.addEventListener('click', findPrimeNumbers);
buttonDividedInThree.addEventListener('click', findNumbersDividedInThree);