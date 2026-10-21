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

let circle2Size = 20;
let circle2X = 200;
let circle2Y = 100;

let circle3Size = 20;
let circle3X = 400;
let circle3Y = 9;

/**
 * Base lime green canvas 
*/
function setup() {
    createCanvas(windowWidth, windowHeight)

}


/**
 * Playfull circles that change color 
*/
function draw() {
    background("#ee3");

    //Circle1
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



    //Circle2
     if (keyIsPressed === true){
        fill("rgba(255, 157, 9, 0.97)");
    }
    
    else{
        fill(255,0,255);
    }

    if (mouseIsPressed){
        circle2Size = mouseX;
        circle(circle2X,circle2Y, circle2Size)
    }
    else{
        circle2Size = mouseX;
        circle(circle2X, circle2Y, circle2Size);
    }

    circle2Y = circle2Y + 1;
    circle2X = circle2X + 1;

    //Circle3
     if (keyIsPressed === true){
        fill("rgba(111, 228, 98, 0.97)");
    }
    
    else{
        fill(255,0,255);
    }

    if (mouseIsPressed){
        circle3Size = mouseX;
        circle(circle3X,circle3Y, circle3Size)
    }
    else{
        circle3Size = mouseX;
        circle(circle3X, circle3Y, circle3Size);
    }

    circle3Y = circle3Y + 1;
    circle3X = circle3X + 1;


    
    
    
    
    
    
    //restarts when it reaches the edge 
    if (circleX > width || circleY > height) {
        circleX = 30;
        circleY = 8;
    }

    if (circle2X > width || circle2Y > height) {
        circle2X = 70;
        circle2Y = 100;
    }

    if (circle3X > width || circle3Y > height) {
        circle3X = 400;
        circle3Y = 9;
    }






   

}