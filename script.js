const input = document.getElementById('userNumbersInput');
const buttonMin = document.getElementById('buttonMin');
const buttonMax = document.getElementById('buttonMax');


const getSplitedNumbersFromInput = () => {
    let inputValue = input.value;
    let arr = inputValue.split(",");
    return arr.sort(minToMax);

}
const minToMax = (a, b) => {
    return a - b;
}

const findMaxNumber = () => {
    arr = getSplitedNumbersFromInput();
    let max = arr[arr.length - 1];
    buttonMax.innerText = max;

}
const findMinNumber = () => {
    arr = getSplitedNumbersFromInput();
    let min = arr[0];
    buttonMin.innerText = min;
}

buttonMax.addEventListener('click', findMaxNumber);
buttonMin.addEventListener('click', findMinNumber);