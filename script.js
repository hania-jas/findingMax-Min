let input = document.getElementById('input');
const buttonMin = document.getElementById('buttonMin');
let buttonMax = document.getElementById('buttonMax');

const createNumbers = (e) => {
    let clickedValue = e.key;
    let inputValue = input.value + clickedValue;
    console.log(inputValue);
    let array = inputValue.split(",");
    console.log(array.sort(minToMax));

    if (buttonMax.onclick) {
        findMax(array);
    }

    // if (isFinite(clickedValue)) {
    // const array = string.split(" ,");

    //} else {
    //     // alert('Only numbers accepted!')

    // }

}
const minToMax = (a, b) => {
    return a - b;


}

const findMax = (arr) => {
    let max = arr[arr.length - 1];
    buttonMax.innerText = max;
    console.log('max', max);
}
const findMin = (arr) => {
    let min = arr[0];
    buttonMin.innerText = min;
}
document.addEventListener('keydown', createNumbers);