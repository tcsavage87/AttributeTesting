const headline = document.querySelector('h1.grow');

const p = document.querySelector('p[data-value="text"]');
const blueLi = document.querySelector('li:nth-of-type(1n)')
const redLi = document.querySelector('li[name=red]');
const greenLi = document.querySelector('li:nth-child(3)');
const unmerge = document.querySelector('[colspan]');
const expander = document.querySelector('tr#expander');


headline.addEventListener('click', function() {
	if (this.classList.contains('shrink')) {
		this.classList.remove('shrink');
	} else {
		this.classList.add('shrink');
	}
});

p.addEventListener('click', () => {
	p.style.transform = 'rotate(180deg)';
	p.style.transition = '1s';
});

blueLi.addEventListener('click', () => blueLi.style.color = 'blue');
redLi.addEventListener('click', () => redLi.style.color = 'red');
greenLi.addEventListener('click', () => greenLi.style.color = 'green');

unmerge.addEventListener('click', function() {
	let td = document.createElement('td');
	td.textContent = 'New Cell';
	this.colSpan = 1;
	expander.appendChild(td);
});