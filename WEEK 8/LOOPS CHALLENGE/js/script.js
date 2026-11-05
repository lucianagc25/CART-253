/**
 * Lines
 * Luciana Garcia Cadillo 
 * 
 * A series of lines across the canvas
 */

"use strict";

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

    for (let i = 0; i < width; i += 50) {
        stroke(i + 1);
        line(i, 0, i, height);
    }

    let y=0;
    let greyValue=0; 

    while (y <= height) {
        stroke(greyValue);
        line(0, y, width, y);
        y += 50; //this tells java y by 50 everytime the loop runs
        greyValue += 25; //this tells java to increase the grey value by 25 everytime the loop runs
    }
    
}