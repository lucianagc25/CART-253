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

    for (let x = 0; x < width; x++) {
        let greyValue = map(x, 0, width, 0, 255);

        stroke(greyValue);
        line(x, 0, x, height);
    }



    

 

    let y=0;
    let greyValue=0; 

    while (y <= height) {
        stroke(greyValue);
        line(0, y, width, y);
        y += 50; //this tells java y by 50 everytime the loop runs
        greyValue += 25; //this tells java to increase the grey value by 25 everytime the loop runs
    }

    let x=0;
    greyValue=0; 

       while (x <= width) {
        stroke(greyValue);
        line(x, 0, x, height);
        x += 50; //this tells java x by 50 everytime the loop runs
        greyValue += 25; //this tells java to increase the grey value by 25 everytime the loop runs
    }

     
    
}
