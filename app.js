//initialising a variable name data

let like = 0, dislike = 0;

//get the current value of like and dislike counter
document.getElementById("up").innerText = like;
document.getElementById("down").innerText = dislike;


//increment function for the like button
function increment() {
	like = like + 1;
	document.getElementById("up").innerText = like;
}

//decrement function for the dislike button
function decrement() {
	dislike = dislike - 1;
	document.getElementById("down").innerText = dislike;
}


// reset function to reset all the values of likes and dislikes to zero
function resetCount(){
	// # reset like counter to zero
	like = 0;
	document.getElementById("up").innerText = like;

	// reset dislike counter to zero
	dislike = 0;
	document.getElementById("down").innerText = dislike;
}