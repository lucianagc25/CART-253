/**
 * Arrays Prototype 2
 * Luciana Garcia Cadillo
 * 
 * Falling stars 
 * inspo from- https://editor.p5js.org/pippinbarr/sketches/cU8ZR2yv5
 */

"use strict";

let starts = [];

//this is the time beween the stars falling
const minimumStarDelay = 500;
const maximumStarDelay = 2000;
let startDelay = maximumStarDelay;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(700, 400);

    setTimeout(addStar, startDelay); 

   
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('#b544b7');

   


}
