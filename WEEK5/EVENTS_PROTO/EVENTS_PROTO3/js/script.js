/**
 * Events Prototype 3
 * Luciana Garcia Cadillo
 *
 * Practicing and getting comfortable with different events
 *
 */

"use strict";

let circleSize = 20;
let circleX = 0;
let circleY = 0;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(windowWidth, windowHeight)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#ee3");


    //this changes the fill color whe an key is pressed
    if (keyIsPressed === true){
        fill("rgba(92, 227, 254, 0.97)");
    }
    
    else{
        fill(255,0,255);
    }

    if (mouseIsPressed){
        circleSize = mouseX;
        circle(circleX,circleY, circleSize)
    }
    else{
        circleSize = mouseX;
        circle(circleX, circleY, circleSize);
    }

    circleY = circleY + 1;
    circleX = circleX + 1;


   

}