/**
 * Arrays Prototype #1
 * Using my Conditionals- Prototype #2
 * Luciana Garcia Cadillo 
 * 
 * Leaning and practicing arrays
 */

"use strict";

let stars = [];

//My sun and stars objects

const sol = {
  x: 200,
  y: 200,
  size: 50,
  fill: "#e6c224"
};



//When the sun is close to the stars, they will change color and move away from the sun.
 function moveSol() {
   sol.x = mouseX;
   sol.y = mouseY;
 }

function setup() {
    createCanvas(400, 400);

    stars.push(createStar(100, 100, "#221182"));
    stars.push(createStar(300, 100, "#82116f"));
    stars.push(createStar(100, 300, "#9bca19"));
    stars.push(createStar(300, 300, "#9b0000"));
    stars.push(createStar(200, 100, "#17a0c6"));
    stars.push(createStar(200, 300, "#fa7d3e"));
//every time I create a star, I push it into the stars array. The stars array will remember all the properties of the stars objects and will be able to use them in the draw function.
}


function draw() {
    background("#f3f16d");
//move tiene que ir antes de draw
    moveSol();

    for (let star of stars){
        moveStar1(star);
    }

    moveStar1();
    moveStar2();
    moveStar3();
    moveStar4();
    moveStar5();
    moveStar6();

    drawSol();
    
}

function moveSol() {
    sol.x = mouseX;
    sol.y = mouseY;
}

function moveStar() {
    let mousepackdis = dist(star.x, star.y, sol.x, sol.y);

    let overlap = mousepackdis < 80

    if (overlap === true) {
        if (sol.y < star.y) {
            star.y = star.y + 1;
        }
        else {
            star.y = star.y - 1;
        }

        if (sol.x < star.x) {
            star.x = star.x + 1;
        }
        else {
            star.x = star.x - 1;
        }

        //change the color of the star 
        if (star.fill === "#ffffff") {
            star.fill = star.awayFill;
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


function createStar(x, y, awayFill) {

    const newStar = {
        x: x,
        y: y,
        size: 20,
        fill: "#ffffff",
        awayFill: awayFill
    };

    return newStar; //it remembers the properties of the newStar object and returns it to the stars array
}