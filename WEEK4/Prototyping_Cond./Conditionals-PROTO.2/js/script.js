/**
 * Conditionals- Prototype #2
 * Luciana Garcia Cadillo 
 * 
 * Leaning and practicing conditionals
 */

"use strict";

//My sun and stars objects

const sol = {
  x: 200,
  y: 200,
  size: 50,
  fill: "#e6c224"
};

const star1 = {
    x: 180,
    y: 300,
    size: 30,
    fill: "#ffffff"
}

const star2 = {
    x: 250,
    y: 250,
    size: 30,
    fill: "#ffffff"
}

const star3 = {
    x: 290,
    y: 60,
    size: 30,
    fill: "#ffffff"
}

const star4 = {
    x: 100,
    y: 150,
    size: 30,
    fill: "#ffffff"
}

const star5 = {
    x: 65,
    y: 50,
    size: 30,
    fill: "#ffffff"
}

const star6 = {
    x: 300,
    y: 350,
    size: 30,
    fill: "#ffffff"
}




//When the sun is close to the stars, they will change color and move away from the sun.
 function moveSol() {
   sol.x = mouseX;
   sol.y = mouseY;
 }

function setup() {
    createCanvas(400, 400);

}


function draw() {
    background("#f3f16d");
//move tiene que ir antes de draw
    moveSol();

    moveStar1();
    moveStar2();
    moveStar3();
    moveStar4();
    moveStar5();
    moveStar6();

    drawSol();
    drawStar1();
    drawStar2();
    drawStar3();
    drawStar4();
    drawStar5();
    drawStar6();
    

}

function moveSol() {
    sol.x = mouseX;
    sol.y = mouseY;
}

function moveStar1() {
    let mousepackdis = dist(star1.x, star1.y, sol.x, sol.y);

    let overlap = mousepackdis < 80

    if (overlap === true) {
        if (sol.y < star1.y) {
            star1.y = star1.y + 1;
        }
        else {
            star1.y = star1.y - 1;
        }

        if (sol.x < star1.x) {
            star1.x = star1.x + 1;
        }
        else {
            star1.x = star1.x - 1;
        }

        //change the color of the star 
        if (star1.fill === "#ffffff") {
            star1.fill = "#221182";
        }
    }
}


function moveStar2() {
    let mousepackdis = dist(star2.x, star2.y, sol.x, sol.y);

    let overlap = mousepackdis < 80

    if (overlap === true) {
        if (sol.y < star2.y) {
            star2.y = star2.y + 1;
        }
        else {
            star2.y = star2.y - 1;
        }

        if (sol.x < star2.x) {
            star2.x = star2.x + 1;
        }
        else {
            star2.x = star2.x - 1;
        }

         if (star2.fill === "#ffffff") {
            star2.fill = "#82116f";
        }
    }
}


function moveStar3() {
    let mousepackdis = dist(star3.x, star3.y, sol.x, sol.y);

    let overlap = mousepackdis < 80

    if (overlap === true) {
        if (sol.y < star3.y) {
            star3.y = star3.y + 1;
        }
        else {
            star3.y = star3.y - 1;
        }

        if (sol.x < star3.x) {
            star3.x = star3.x + 1;
        }
        else {
            star3.x = star3.x - 1;
        }

         if (star3.fill === "#ffffff") {
            star3.fill = "#9bca19";
        }
    }
}


function moveStar4() {
    let mousepackdis = dist(star4.x, star4.y, sol.x, sol.y);

    let overlap = mousepackdis < 80

    if (overlap === true) {
        if (sol.y < star4.y) {
            star4.y = star4.y + 1;
        }
        else {
            star4.y = star4.y - 1;
        }

        if (sol.x < star4.x) {
            star4.x = star4.x + 1;
        }
        else {
            star4.x = star4.x - 1;
        }
         if (star4.fill === "#ffffff") {
            star4.fill = "#9b0000";
        }
    }
}


function moveStar5() {
    let mousepackdis = dist(star5.x, star5.y, sol.x, sol.y);

    let overlap = mousepackdis < 80

    if (overlap === true) {
        if (sol.y < star5.y) {
            star5.y = star5.y + 1;
        }
        else {
            star5.y = star5.y - 1;
        }

        if (sol.x < star5.x) {
            star5.x = star5.x + 1;
        }
        else {
            star5.x = star5.x - 1;
        }
         if (star5.fill === "#ffffff") {
            star5.fill = "#17a0c6";
        }
    }
}


function moveStar6() {
    let mousepackdis = dist(star6.x, star6.y, sol.x, sol.y);

    let overlap = mousepackdis < 80

    if (overlap === true) {
        if (sol.y < star6.y) {
            star6.y = star6.y + 1;
        }
        else {
            star6.y = star6.y - 1;
        }

        if (sol.x < star6.x) {
            star6.x = star6.x + 1;
        }
        else {
            star6.x = star6.x - 1;
        }
         if (star6.fill === "#ffffff") {
            star6.fill = "#fa7d3e";
        }
    }
}


function drawSol() {
  push();
  noStroke();
  fill(sol.fill);
  ellipse(sol.x, sol.y, sol.size);
  pop();
}


function drawStar1() {
  push();
  noStroke();
  fill(star1.fill);
  ellipse(star1.x, star1.y, star1.size);
  pop();
}

function drawStar2() {
  push();
  noStroke();
  fill(star2.fill);
  ellipse(star2.x, star2.y, star2.size);
  pop();
}

function drawStar3() {
  push();
  noStroke();
  fill(star3.fill);
  ellipse(star3.x, star3.y, star3.size);
  pop();
}

function drawStar4() {
  push();
  noStroke();
  fill(star4.fill);
  ellipse(star4.x, star4.y, star4.size);
  pop();
}

function drawStar5() {
  push();
  noStroke();
  fill(star5.fill);
  ellipse(star5.x, star5.y, star5.size);
  pop();
}

function drawStar6() {
  push();
  noStroke();
  fill(star6.fill);
  ellipse(star6.x, star6.y, star6.size);
  pop();
}