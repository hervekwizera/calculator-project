let display = document.getElementById('screen');

const wipe = () => {
    display.value ='';
}
const show = (n) => {
    display.value += n;
}
const sqrt = () => {
    display.value = Math.sqrt(parseFloat(display.value));
}

const calc = () => {
    display.value = eval(display.value)
}
