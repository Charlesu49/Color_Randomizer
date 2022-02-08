const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
var max = colors.length 

const change_button = document.getElementById("change_button");
const color = document.querySelector(".color");



change_button.addEventListener("click", function () {
	//get random number between 0 - 3
	//const randomNumber = 1;
  const randomNumber = randomNum()
  
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
	});
// 

function randomNum() {
  return Math.floor(Math.random() * max);
}