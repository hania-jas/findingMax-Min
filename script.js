const input = document.getElementById('userNumbersInput');
const buttonMin = document.getElementById('buttonMin');
const buttonMax = document.getElementById('buttonMax');


const getSplitedNumbersFromInput = () => {
    const inputValue = input.value;
    const arr = inputValue.split(",").map(Number);
    console.log(arr)
    let minVal = 9999999;
    let maxVal = -99999999999;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        console.log('arr[i]', arr[i]);
        if (arr[i] < minVal) {
            minVal = arr[i];
        }
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
        console.log('minVal', minVal);
        console.log('maxVal', maxVal);
    }
    return [minVal, maxVal];
}

const findMaxNumber = () => {
    const maxVal = getSplitedNumbersFromInput();
    buttonMax.innerText = maxVal[1];
}
const findMinNumber = () => {
    const minVal = getSplitedNumbersFromInput();
    buttonMin.innerText = minVal[0];
}

buttonMax.addEventListener('click', findMaxNumber);
buttonMin.addEventListener('click', findMinNumber);