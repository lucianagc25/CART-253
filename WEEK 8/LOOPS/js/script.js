/**
 * WEEK 8 - Learning Loops
 * Luciana Garcia Cadillo
 * 

 */

"use strict";

let startColor = undefined;
let endColor = undefined;
let gradientIndex = undefined;
let y = undefined;



/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(500, 500);
   // clownImage = await loadImage('assets/images/clown.png');
    imageMode (CENTER);

let startColor = color (255, 0, 255);
let endColor = color (0, 255, 0);
let gradientIndex = 0;
let y = 0;

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('skyblue');

    gradientIndex = 0;
    y=0;
    while (gradientIndex < 1) {
    let rectColor = lerpColor(startColor, endColor, .5);
    noStroke();
    fill(rectColor);
    rect(0, y, width, 5);
    gradientIndex += 0.01;
    //change y accordingly to the height of the rectangle 
    y+= 5;

  
}
}