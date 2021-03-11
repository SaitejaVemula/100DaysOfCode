const input = document.querySelector('#input');
const output = document.querySelector('#output');

const bin2dec = (number) => {
    number = String(number);
    let result = 0;
    let power = 0;
    for (let index = number.length - 1; index >= 0; index--, power++) {
        result += Number(number[index]) * Math.pow(2, power);
    }
    return result;
}

input.addEventListener('input', () => {
    if (input.value === "") {
        output.textContent = "Enter a binary number below";
    } else if (/[^01]/.test(input.value)) {
        output.textContent = "Invalid";
    } else {
        output.textContent = bin2dec(input.value);
    }
})