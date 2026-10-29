/**
 * Prototype #3- Mood Popping
 * Luciana Garcia Cadillo
 * 
 */
 //You can press a key to generate a random mood and its matching background colour./

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
    

    fill("#fff");
    textAlign(CENTER, CENTER);
    textFont("Courier New")
    textSize(90);
    text(mood, width /2, height / 2);

}

function chooseMood() {
    return random(["SLEEPY", "ANGRY", "HAPPY", "STRESSED", "ANXIOUS", "SILLY"])
}

function chooseMoodColor(selectedMood){

    if (selectedMood === "SLEEPY") {
        return "rgb(7, 19, 155)"
    }
     else if (selectedMood === "ANGRY"){
        return "#ff2929"
    }
     else if (selectedMood === "HAPPY") {
        return "rgb(243, 218, 75)"
    }
     else if (selectedMood === "STRESSED"){
        return "#7909b5"
    }
     else if (selectedMood === "ANXIOUS"){
        return "#b50987"
    }
     else if (selectedMood === "SILLY"){
        return "#ff9a2d"
    }
    else {
        return "#000000"
    }

}
function keyPressed() {
    mood= chooseMood();
    moodColor = chooseMoodColor(mood)
}