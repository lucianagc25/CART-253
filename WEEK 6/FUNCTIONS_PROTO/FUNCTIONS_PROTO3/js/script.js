/**
 * Prototype #3- Mood Popping
 * Luciana Garcia Cadillo
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let mood= "UNBOTHERED"
let moodColor = "#1a0574"


function setup() {
    createCanvas(800,600)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(moodColor);

    fill(30);
    textAlign(CENTER, CENTER);
    textSize(90);
    text(mood, width /2, height / 2);

}

function chooseMood() {
    random(["SLEEPY", "ANGRY", "HAPPY", "STRESSED", "ANXIOUS", "SILLY"])
}