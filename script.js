const input = document.getElementById('userNumbersInput');
const buttonMin = document.getElementById('buttonMin');
const buttonMax = document.getElementById('buttonMax');


const getSplitedNumbersFromInput = () => {
    const inputValue = input.value;
    const arr = inputValue.split(",");
    return arr.sort(minToMax);

}
const minToMax = (a, b) => {
    return a - b;
}

const findMaxNumber = () => {
    const arr = getSplitedNumbersFromInput();
    const max = arr[arr.length - 1];
    buttonMax.innerText = max;

}
const findMinNumber = () => {
    const arr = getSplitedNumbersFromInput();
    const min = arr[0];
    buttonMin.innerText = min;
}

buttonMax.addEventListener('click', findMaxNumber);
buttonMin.addEventListener('click', findMinNumber);