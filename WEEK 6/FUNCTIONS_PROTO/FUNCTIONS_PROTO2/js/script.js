/**
 * Prototype #2-Lil Bugs 
 * Luciana Garcia Cadillo
 * Inspired by my previous lil bugs sketch.
 * 
 * This prototype explores functions with return values 
 */

"use strict";

let bug1;
//let bug2;
//let bug3;


function setup() {

    createCanvas (600, 600);

    //Creates the bugs
    bug1 = createBug();
    //bug2 = createBug();
    //bug3 = createBug();


}

function createBug(){
    const newBug = {
        x:300,
        y:300,
        size: 30,
        fill: "rgb(119, 230, 228)",
        //movement 
        velocity: {
        x: random (-5, 5),
        y: random (-5, 5)
        }
    };
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    background("rgba(234, 173, 19, 0.48)")


}