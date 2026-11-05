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
const minimumStarDelay = 500;
const maximumStarDelay = 2000;
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
    background('#b544b7');

   


}

function addStar() {
    const star = createStar();
    stars.push(star);//add the star to the array
    //choose a random time between the minimum and maximum delay for the next star
    starDelay = random(minimumStarDelay, maximumStarDelay);
    setTimeout(addStar, starDelay);//schedule the next star

}
