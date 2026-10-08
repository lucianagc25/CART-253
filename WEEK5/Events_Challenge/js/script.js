/**
 * Events Challenge 
 * Luciana Garcia Cadillo
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;



/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);

  window.addEventListener("offline", (lose) => {
    console.log("You are offline!");
   })

   document.addEventListener("visibilitychange", 
    lose)
}


/**
 * Update the score and display the UI
 */
function draw() {
  background("#87ceeb");
  
  // Only increase the score if the game is not over
  if (!gameOver) {
    // Score increases relatively slowly
    score += 0.05;
  }
  displayUI();
}

/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
  if (gameOver) {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("You lose!", width/2, height/3);
    pop();
  }
  displayScore();
}

/**
 * Display the score
 */
function displayScore() {
  push();
  textSize(48);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(floor(score), width/2, height/2);
  pop();
}

function keyPressed() {
   

   if(gameOver === false) {
    
    lose()

   }

   else if(gameOver === true){
    gameOver = false
   }

}

function lose() {
    gameOver = true;

 
}


function mousePressed() {
    if(gameOver === false) {
        lose()
    }

}

   