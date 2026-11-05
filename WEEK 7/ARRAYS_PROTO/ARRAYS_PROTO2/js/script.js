/**
 * Arrays Prototype 2
 * Luciana Garcia Cadillo
 * 
 * Falling stars 
 * inspo from- https://editor.p5js.org/pippinbarr/sketches/cU8ZR2yv5
 */

"use strict";

let stars = [];

//this is the time beween the stars falling
const minimumStarDelay = 300;
const maximumStarDelay = 1000;
let starDelay = maximumStarDelay;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(700, 400);

    setTimeout(addStar, starDelay); 

   
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('#0b033a');

    for (let star of stars) {
        moveStar(star);
        drawStar(star);
    }

}

function addStar() {
    const star = createStar();
    stars.push(star);//add the star to the array
    //choose a random time between the minimum and maximum delay for the next star
    starDelay = random(minimumStarDelay, maximumStarDelay);
    setTimeout(addStar, starDelay);//schedule the next star

}

//Pipins code makes the delay dradually shorter, mine chooses a random time between the minimum and maximum delay for each star.

function createStar() {
    const star = {
        x: random(0, width),
        y: -100,
        velocity: {
            x: 0,
            y: random(1, 5)
        },
        size: random(10, 50),
       //fill: "#82e3f0"

        };

        return star;

    }

function moveStar(star) {
    star.x += star.velocity.x;
    star.y += star.velocity.y;
}

function drawStar(star) {
    push();
    textSize(star.size);
    text("⭐", star.x, star.y)
    pop();
}

    