/**
 * WEEK 4
 * Luciana Garcia Cadillo
 * 
 * Leearning Events 
 */

"use strict";


let mouseTriggerBall =  {
    x: 0,
    y: 200,
    size: 50
};

function setup() {
    createCanvas(500, 500);
    background(0);

}


/**
Mouse Pressed Event-Function
*/
function draw() {
    if (mouseIsPressed) {
        fill(random(255), random(255), random(255));
        ellipse(mouseX, mouseY, mouseTriggerBall.size);
    }
}

function mousePressed() {
    console.log(mouseX, mouseY);
}