
var winners = [[1,2,3], [4,5,6], [7,8,9], [2,4,6], [0,4,8]];

var myArray = document.querySelectorAll(".thumbnail");


var winning = function () {
for (i = 0; i < myArray.length; i++)

tile.querySelector("img").getAttribute("src");

};


var per1 = {
image: "x.jpg",
turn: true,
turns: []


};

var per2 = {
image: "o.jpg",
turn: false,
turns: []
};
// who's turn, who's next turn, and paste image


player1plays = [];
player2plays = [];

var taketurn = function(tile) {

// Check for tile taken, if taken return

var test = tile.querySelector("img").getAttribute("src");
if (test == "x.jpg" || test == "o.jpg") {
  return;
}
// How do I find the ID of the player move

if (per1.turn) {
	tile.querySelector("img").setAttribute("src", per1.image);
  player1plays.push(getElement());
	per1.turn = false;
	per2.turn = true;
} else {
  tile.querySelector("img").setAttribute("src", per2.image);
	per2.turn = false;
	per1.turn = true;
}

};



var winner = function () {

if (player1plays === winners) {
  alert ("Player1 Wins"); }
  else if (player2plays === winners) {
    alert ("Player2 Wins!");
  }
};

var selectItem = function( event ){

	taketurn(this);

};


for (i = 0; i < myArray.length; i++){
	console.log(myArray[i]);
	myArray[i].addEventListener("click", selectItem);
}

var resetButton = function() {
	for (var i = 0; i <myArray.length; i++) {
		myArray[i].querySelector("img").setAttribute("src", "blank.jpg");
	}
};

var initialize = function(){

document.querySelector("#reset").addEventListener("click",resetButton);
};

window.onload=initialize;




