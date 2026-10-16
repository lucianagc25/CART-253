/**
 * Events Prototype 1
 * Luciana Garcia Cadillo 
 * 
 * Practicing and getting comfortable with different events
 * 
 */

"use strict";

let lineHue = 0;


/**
 * Clasic canvas for the user to able to draw by dragging the mouse 
*/
function setup() {
    createCanvas (600,800);

    background("rgba(3, 4, 89, 0.96)");

    strokeWeight(12);

    //can be HBS(hue, saturation, and brightness) OR RGB
    colorMode(HSB);


}


function draw() {


    //calculates the color using the mouse's horizontal and vertical positions   
    lineHue = mouseX - mouseY;

    stroke(lineHue, 90, 90);

    if (mouseIsPressed) {

        //this draws a line from the previous (p) mouse position to the current position

        line(pmouseX, pmouseY, mouseX, mouseY)

    }


}
