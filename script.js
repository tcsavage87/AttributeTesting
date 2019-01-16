
const blueLi = document.querySelector('li:nth-of-type(1n)')
const redLi = document.querySelector('li[name=red]');
const greenLi = document.querySelector('li:nth-child(3)');


blueLi.addEventListener('click', () => blueLi.style.color = 'blue');
redLi.addEventListener('click', () => redLi.style.color = 'red');
greenLi.addEventListener('click', () => greenLi.style.color = 'green');