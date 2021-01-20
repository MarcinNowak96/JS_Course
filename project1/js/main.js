const btn1 = document.querySelector('.one');
const btn2 = document.querySelector('.two');
const span1 = document.querySelector('.original');
const span2 = document.querySelector('.new');

let $score;

const add = (a,b) => {
    $score = a + b;
    span1.innerHTML = $score;
};
const multiply = () => {
    const newscore = $score * 2;
    span2.innerHTML = newscore;
};
const divide = () => {
    const newscore = $score / 2;
    span2.innerHTML = newscore;
};

btn1.addEventListener('click', multiply);
btn2.addEventListener('click', divide);

add(8,13);