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

    stars.push(createStar(100, 100, "#2706e0"));
    stars.push(createStar(300, 100, "#c712a9"));
    stars.push(createStar(100, 300, "#b4dc45"));
    stars.push(createStar(300, 300, "#751dc7"));
    stars.push(createStar(200, 100, "#39bee3"));
    stars.push(createStar(200, 300, "#d34d0a"));
//every time I create a star, I push it into the stars array. The stars array will remember all the properties of the stars objects and will be able to use them in the draw function.
}


function createStar(x, y, awayFill) {

    const newStar = {
        x: x,
        y: y,
        size: 30,
        fill: "#ffffff",
        awayFill: awayFill
    };

    return newStar;
     //it remembers the properties of the newStar object and returns it to the stars array
}


function draw() {
    background("#cee7a3");
//move tiene que ir antes de draw
    moveSol();
    drawSol();

    for (let star of stars){
        moveStar(star);
        drawStar(star);
    }
}

function moveSol() {
    sol.x = mouseX;
    sol.y = mouseY;
}


function moveStar(star) {

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

function drawStar(star) {
    push();
    noStroke();
    fill(star.fill);
    ellipse(star.x, star.y, star.size);
    pop();
}


