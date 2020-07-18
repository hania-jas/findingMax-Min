let input = document.getElementById('input');
const buttonMin = document.getElementById('buttonMin');
const buttonMax = document.getElementById('buttonMax');

const createNumbers = (e) => {
    let clickedValue = e.key;
    const inputValue = input.value + clickedValue;
    console.log(inputValue);
    const array = inputValue.split(",");
    console.log(array);

    // if (isFinite(clickedValue)) {
    // const array = string.split(" ,");

    //} else {
    //     // clean();
    //     // alert('Only numbers accepted!')

    // }
}

const clean = () => {
        inputNumbers = [];
        input.value = '';
    }
    // console.log(inputNumbers);
document.addEventListener('keydown', createNumbers)