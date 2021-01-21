const Up = document.querySelector('.sizeUp');
const Down = document.querySelector('.sizeDown');
const color = document.querySelector('.color');
const p = document.querySelector('p');

let $fontSize= 36;
const sizeUp = () => {
    $fontSize += 5;
    p.style.fontSize = $fontSize + 'px';
};
const sizeDown = () => {
    $fontSize -= 5;
    p.style.fontSize = $fontSize + 'px';
};

const  colorChange = () => {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    p.style.color = `rgb(${r},${g},${b})`
};

Up.addEventListener('click', sizeUp);
Down.addEventListener('click', sizeDown);
color.addEventListener('click', colorChange);
