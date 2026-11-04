/**
 * WEEK 8 - Learning Loops
 * Luciana Garcia Cadillo
 * 

 */

"use strict";

let clownImage = undefined;
let xPos = 0;


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(500, 500);
    clownImage = await loadImage('assets/images/clown.png');

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('skyblue');

    let x = 20;
    let y = 
    //xPos++; 
    image(clownImage, xPos, 200, clownImage.width / 4, 50);

}