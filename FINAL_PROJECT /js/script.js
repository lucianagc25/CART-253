

"use strict";

let heads = [];
let chest = [];
let legs = [];

//variables for the falling images
let headY = 0;
let chestY = 0;
let legsY = 0;

//load all images before the sketch starts 
function preload() {

    //load the 6 head and chest images 
    for (let i = 1; i<=6; i++){
        heads.push(loadImage("assets/images/head/head" + i + ".png"));
        chest.push(loadImage("assets/images/chest/torso" + i + ".png"
        ));
    }

    //load the 7 legs images 
    for (let i = 1; i <= 7; i++){
        legs.push (loadImage("assets/images/legs/leg" + i + ".png"));
    }
}



function setup() {
    createCanvas(windowWidth, windowHeight);

}


function draw() {
    background('Dodgerblue')

    image(heads[0], 100, 100);
    

}



