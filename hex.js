const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

var max = hex.length;

const change_button = document.getElementById('change_button');
const color = document.querySelector('.color');

change_button.addEventListener('click', function(){
	let hexColor = '#'
	for(let i = 0;i<6;i++){
		hexColor += hex[RandomNum()]
	}
	color.textContent = hexColor
	document.body.style.backgroundColor = hexColor;
});

function RandomNum(){
	return Math.floor(Math.random() * max);
}