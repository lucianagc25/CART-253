/**
 * Lines
 * Luciana Garcia Cadillo 
 * 
 * A series of lines across the canvas
 */

"use strict";


let x=0;
let greyValue=0; // this is how dark the line will be
/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");

    while (x <= width) {
        stroke(greyValue);
        line(x, 0, x, height);
        x += 50; //this tells java x by 50 everytime the loop runs
        greyValue += 25; //this tells java to increase the grey value by 25 everytime the loop runs
    }
    
    stroke(0);
    line(0, 0, 0, height);
    
    stroke(25);
    line(50, 0, 50, height);
    
    stroke(50);
    line(100, 0, 100, height);
    
    stroke(75);
    line(150, 0, 150, height);
    
    stroke(100);
    line(200, 0, 200, height);
    
    stroke(125);
    line(250, 0, 250, height);
    
    stroke(150);
    line(300, 0, 300, height);
    
    stroke(175);
    line(350, 0, 350, height);
    
    stroke(200);
    line(400, 0, 400, height);
    
    stroke(225);
    line(450, 0, 450, height);
    
    stroke(250);
    line(500, 0, 500, height);
}