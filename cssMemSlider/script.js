const slidesContainer = document.querySelector('.slider')
const items = document.querySelectorAll('.item')
const button_one = document.querySelector('.button-one')
const button_two = document.querySelector('.button-two')
const button_three = document.querySelector('.button-three')
const button_four = document.querySelector('.button-four')

let currentPosition=1;
button_one.onclick = myFunctionOne;
button_two.onclick = myFunctionTwo;
button_three.onclick = myFunctionThree;
button_four.onclick = myFunctionFour;

function myFunctionOne() {
    items.forEach((item) => item.style.right = "0%");
}

function myFunctionTwo() {
    items.forEach((item) => item.style.right = "100%");
}


function myFunctionThree() {
    items.forEach((item) => item.style.right = "200%");
}

function myFunctionFour() {
    items.forEach((item) => item.style.right = "300%")
}