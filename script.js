const headline = document.querySelector('h1.grow');
const p = document.querySelector('p[data-value="text"]');

const blueLi = document.querySelector('li:nth-of-type(1n)')
const redLi = document.querySelector('li[name=red]');
const greenLi = document.querySelector('li:nth-child(3)');
const subList = document.querySelector('[style]');
const liArray = Array.from(subList.querySelectorAll('li'));

const colorsArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

const table = document.querySelector('table');

const unmerge = document.querySelector('[colspan]');
const expander = document.querySelector('tr#expander');
let newRowButton;
let flag = true;

function shrink() {
	if (this.classList.contains('shrink')) {
		this.classList.remove('shrink');
	} else {
		this.classList.add('shrink');
	}
}

function rotate() {
	if (this.classList.contains('rotate')) {
		this.classList.remove('rotate');
		setTimeout(() => {
			p.classList.add('rotate');
		}, 100);
	} else {
		this.classList.add('rotate');
	}
}

function randomizeColor() {
	for (let i = 0; i < liArray.length; i++) {
		let randomNumber = Math.floor(Math.random() * colorsArray.length);
		liArray[i].style.color = colorsArray[randomNumber];
	}
}

function splitCellMerge() {
	if (!flag) return;
	let td = document.createElement('td');
	td.classList.add('newRowButton');
	td.textContent = 'Add New Row +';
	this.colSpan = 1;
	expander.appendChild(td);
	flag = false;	
	newRowButton = document.querySelector('.newRowButton');
	newRowButton.addEventListener('click', addNewRow);
}

let newCellCount = 0;

function addNewRow() {
	if (newCellCount === 3) return;
	let tr = document.createElement('tr');
	tr.classList.add('row');
	let td = document.createElement('td');
	td.textContent = 'New Cell';
	table.appendChild(tr);
	let newRow = document.querySelector('[class=row]');
	newRow.appendChild(td);
	this.textContent = 'Add New Cell +';
	newCellCount++;
}

headline.addEventListener('click', shrink);

p.addEventListener('click', rotate);

blueLi.addEventListener('click', () => blueLi.style.color = 'blue');
redLi.addEventListener('click', () => redLi.style.color = 'red');
greenLi.addEventListener('click', () => greenLi.style.color = 'green');

liArray.forEach(item => item.addEventListener('click', randomizeColor));

unmerge.addEventListener('click', splitCellMerge);

