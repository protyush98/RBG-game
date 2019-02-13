
// var colors = ["rgb(255, 0, 0)",
// 			"rgb(255, 255, 0)",
// 			"rgb(0, 255, 0)",
// 			"rgb(0, 255, 255)",
// 			"rgb(0, 0, 255)",
// 			"rgb(255, 0, 255)"];
var colors=generateRandomColor(6);
var colorPicked=pickColor();
var numSquare=6;
var square=document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorDisplay");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easy");
var hardBtn=document.querySelector("#hard");


console.log(reset);
console.log(message);
console.log(square);
console.log(colorDisplay);
console.log(h1);
console.log(easyBtn);
console.log(hardBtn);

easyBtn.addEventListener("click",function(){
	console.log("easyBtn click");
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquare=3;
	colors=generateRandomColor(numSquare);
	colorPicked=pickColor();
	colorDisplay.textContent=colorPicked;
	message.textContent="";

	for(var i=0;i<6;i++){

		if(colors[i]){

		square[i].style.backgroundColor=colors[i];
		}
		else
			square[i].style.display="none";	
	}
	resetButton.textContent="new colors";

});
hardBtn.addEventListener("click",function(){
	console.log("hardBtn click");
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquare=6;
	colors=generateRandomColor(numSquare);
	colorPicked=pickColor();
	colorDisplay.textContent=colorPicked;
	message.textContent="";

	for(var i=0;i<6;i++){

		square[i].style.backgroundColor=colors[i];
		square[i].style.display="block";	
	}
	resetButton.textContent="new colors";

});

resetButton.addEventListener("click",function(){
	console.log("reset cliked");
	colors=generateRandomColor(numSquare);
	colorPicked=pickColor();
	colorDisplay.textContent=colorPicked;
	message.textContent="";
	for(var i=0;i<colors.length;i++){
		square[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
	resetButton.textContent="new colors";

});

colorDisplay.textContent=colorPicked;

for(var i=0;i<square.length;i++){

	square[i].style.backgroundColor=colors[i];
	 //more comaptible with all browser

	 square[i].addEventListener("click",function(){
	 	console.log("Listened");
	 	var color=this.style.backgroundColor;
	 	if (color === colorPicked) {
	 		console.log("correct");
	 		message.textContent="correct";
	 		changeColor(color);
	 		h1.style.backgroundColor=colorPicked;
	 		resetButton.textContent="Play Again?";
	 	}
	 	else{
	 		console.log("wrong");
	 		this.style.backgroundColor= "#232323";
	 		message.textContent="Try again";
	 	}


	 });
}
function changeColor(color){
	for(var i=0;i<square.length;i++){
		square[i].style.backgroundColor=color;
	}

}
function pickColor(){
	var ran=Math.floor(Math.random()*colors.length);
	return colors[ran];

}
function generateRandomColor(num){
	var arrColor=[];
	for(var i=0;i<num;i++){
		arrColor.push(randomColor());

	}
	return arrColor;
}
function randomColor(){
		var red=Math.floor(Math.random()*256);
		var green=Math.floor(Math.random()*256);
		var blue=Math.floor(Math.random()*256);

		return "rgb("+red+", "+green+", "+blue+")";
}