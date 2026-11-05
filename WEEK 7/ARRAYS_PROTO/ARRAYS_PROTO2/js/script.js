/**
 * Arrays Prototype 2
 * Luciana Garcia Cadillo
 * 
 * Bubles bubles bubles
 */

"use strict";

let bubble = {
    x: 100,
    y: 100,
    size: 50,
    fill: '#f5f5f5',
    

}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(700, 400);

   
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('#b544b7');

     moveBubble();
     drawBubble();



}


function drawBubble(bubble) {
    push();
    noStroke();
    fill(bubble.fill);
    ellipse(bubble.x, bubble.y, bubble.size);
    pop();
}

function moveBubble(bubble) {
    bubble.x += bubble.velocity.x;
    bubble.y += bubble.velocity.y;
}