/**
 * Prototyping Functions 
 * Luciana Garcia Cadillo
 * 
 * Reference-https://editor.p5js.org/pippinbarr/sketches/7KfK3pK9i
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const rings = 15;


function setup() {
    createCanvas(400, 400)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("rgba(97, 132, 228, 0.93)");

    //this is used to position the rings relative to the mouse 
    const dx = mouseX - width/2;
    const dy = mouseY - height/2;

     // A for loop that counts *down* from the total number of rings
     // to 1. This helps us with the size of the rings because we want to draw the biggest first so it helps if i starts bigger and gets smaller
     // So we start i at the number of rings and count down to 1
     for (let i = rings; i >= 1; i--) {

     // The position is a bit complex here because we want to offset
     // each subsequent ring toward the mouse on x and y, making them each equidistance from eachother
     // It's math.    
     const x = width/2 + ((rings - i) * dx/rings);
     const y = height/2 +((rings-i) * dy/rings);

     const shade = map(i, rings, 1, 50, 200);

     // The diameter of this ring based on i, with each subsequent
     // ring being evenly divided into the overall width of the shape
     const diameter = (width/ rings) * i;

     push();
     noStoke();
     fill("rgba(212, 235, 120, 0.93)");
     ellipse(x + 2, y + 2, diameter);
     pop();


     //Draws the rings 
     push();
     noStoke();
     fill("rgba(226, 96, 213, 0.93)");
     ellipse(x, y, diameter);
     pop();

     }

}