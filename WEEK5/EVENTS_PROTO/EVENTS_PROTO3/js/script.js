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
    createCanvas(windowWidth, windowHeight);

    

}


/**
 * Playfull interactive circle press 
*/
function draw() {
    background("#ee3");

    //changes the background when the key is pressed 
    if(keyIsPressed) {
        background("rgb(7, 7, 7)");
    }

    else{
        background("#ee3")
    }



    //Circle1
    //this changes the fill color whe an key is pressed
    if (keyIsPressed === true){
        fill("rgba(185, 255, 45, 0.97)");
    }
    
    else{
        fill(255,0,255);
    }

    //changes the circle size based on the mouse's X position
    if (mouseIsPressed){
        circleSize = mouseX;
        circle(circleX,circleY, circleSize)
    }
    else{
        circleSize = mouseX;
        circle(circleX, circleY, circleSize);
    }


    //moves circle one pixel to the right annd down 
    circleY = circleY + 1;
    circleX = circleX + 1;



    //Circle2
     if (keyIsPressed === true){
        fill("rgba(107, 238, 255, 0.97)");
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

    circle2Y = circle2Y + 2;
    circle2X = circle2X + 2;



    //Circle3
     if (keyIsPressed === true){
        fill("rgb(175, 39, 248)");
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

    circle3Y = circle3Y + 3;
    circle3X = circle3X + 3;


    
    
    //restarts when it reaches the edge 
    // || means OR- the circle restarts when it reaches the right edge or botton edge 
    if (circleX > width || circleY > height) {
        circleX = 0;
        circleY = 0;
    }

    if (circle2X > width || circle2Y > height) {
        circle2X = 300;
        circle2Y = 10;
    }

    if (circle3X > width || circle3Y > height) {
        circle3X = 900;
        circle3Y = 50;
    }





}