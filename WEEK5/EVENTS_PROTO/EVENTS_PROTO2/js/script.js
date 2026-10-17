/**
 * Events Prototype 2
 * Luciana Garcia Cadillo
 *
 * Practicing and getting comfortable with different events
 *
 */

"use strict";

let score = 0;

let Ball = {
    x: 30,
    y: 100,
    size: 50,
    fill: "#63b8f5"
}

let Ball2 = {
    x: 30,
    y: 300,
    size: 50,
    fill: "#c52fe7"
}

let Ball3 = {
    x: 30,
    y: 200,
    size: 50,
    fill: "#e7bc2f"
}

let Ball4 = {
    x: 30,
    y: 70,
    size: 50,
    fill: "#882fe7"
}

let Ball5 = {
    x: 30,
    y: 350,
    size: 50,
    fill: "#c95757"
}

let Ball6 = {
    x: 30,
    y: 195,
    size: 50,
    fill: "#84f38a"
}

//no ball selected
let selectBall = 0;


let Barsket = {
    x: 500,
    y: 0,
    width: 10,
    height: 900,
    fill: "#e7bc2f"
}





/**
 * Game sort of set up
*/
function setup() {
    createCanvas(600,400);



}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background ("rgb(162, 162, 16)")



    drawBall()
    drawBall2()
    drawBall3()
    drawBall4()
    drawBall5()
    drawBall6()
    drawBarsket()


    if (!gameOver) {
    // Score increases relatively slowly
    score += 0.05;
  }
  displayUI();

}


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
 * Displays the obstable
 */
function drawBall() {
  push();
  noStroke();
  fill(Ball.fill);
  ellipse(Ball.x, Ball.y, Ball.size);
  pop();
}

function drawBall2() {
  push();
  noStroke();
  fill(Ball2.fill);
  ellipse(Ball2.x, Ball2.y, Ball2.size);
  pop();
}

function drawBall3() {
  push();
  noStroke();
  fill(Ball3.fill);
  ellipse(Ball3.x, Ball3.y, Ball3.size);
  pop();
}

function drawBall4() {
  push();
  noStroke();
  fill(Ball4.fill);
  ellipse(Ball4.x, Ball4.y, Ball4.size);
  pop();
}

function drawBall5() {
  push();
  noStroke();
  fill(Ball5.fill);
  ellipse(Ball5.x, Ball5.y, Ball5.size);
  pop();
}

function drawBall6() {
  push();
  noStroke();
  fill(Ball6.fill);
  ellipse(Ball6.x, Ball6.y, Ball6.size);
  pop();
}



function drawBarsket() {
  push();
  noStroke();
  fill(Barsket.fill);
  rect(Barsket.x, Barsket.y, Barsket.width, Barsket.height);
  pop();
}

function mousePressed() {

   if (dist(mouseX,mouseY, Ball.x, Ball.y)< Ball.size/2 ){
        selectBall = 1;
   }


    if (dist(mouseX,mouseY, Ball2.x, Ball2.y)< Ball2.size/2 ){
        selectBall = 2;
    }


    if (dist(mouseX,mouseY, Ball3.x, Ball3.y)< Ball3.size/2 ){
        selectBall = 3;
    }


    if (dist(mouseX,mouseY, Ball4.x, Ball4.y)< Ball4.size/2 ){
        selectBall = 4;
    }


    if (dist(mouseX,mouseY, Ball5.x, Ball5.y)< Ball5.size/2 ){
        selectBall = 5;
    }


    if (dist(mouseX,mouseY, Ball6.x, Ball6.y)< Ball6.size/2 ){
        selectBall = 6;
    }


}

function mouseDragged()  {

    if (selectBall === 1) {
        Ball.x = mouseX;
        Ball.y = mouseY;
    }


    if (selectBall === 2) {
        Ball2.x = mouseX;
        Ball2.y = mouseY;
    }

    if (selectBall === 3) {
        Ball3.x = mouseX;
        Ball3.y = mouseY;
    }

    if (selectBall === 4) {
        Ball4.x = mouseX;
        Ball4.y = mouseY;
    }

    if (selectBall === 5) {
        Ball5.x = mouseX;
        Ball5.y = mouseY;
    }

    if (selectBall === 6) {
        Ball6.x = mouseX;
        Ball6.y = mouseY;
    }

   
}

