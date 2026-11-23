

"use strict";

//arrays to store the images 
let heads = [];
let chest = [];
let legs = [];

//variables for the falling images
let chestY = 0;
let legsY = 0;
let headX = [];
let headY = [];



//load all images before the sketch starts 
function preload() {

    //load the 6 head and chest images - loop+array
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

    for (let i = 0; i < heads.length; i++) {
        headX.push(random(0, width - 120));
        headY.push(random(-height, 0))
    }

}




function draw() {
    background('Dodgerblue')

    for(let i = 0; i < heads.length; i++) {

    //se the head w nd calculate it proportional height
    let headWidth = 120;
    let headHeight = headWidth * heads[i].height / heads[i].width;

    //display without stretching it 
    image(heads[i], headX[i], headY[i], headWidth, headHeight);

    //keep the head falling until it passes the bottom 
    if (headY[i] < height) {
        
        headY[i] = headY[i] + 2;
    }

    else {

        //this resets the head above the canvas 
        headY[i] = -headHeight;

        //here is the randomness: choose a new horizontal position
        headX[i] = random(0, width - headWidth);

    }
    

}

}

