

"use strict";

//arrays to store the images 
let heads = [];
let chest = [];
let legs = [];

//arrays for the falling images
let headX = [];
let headY = [];

let chestX = [];
let chestY = [];

let legsX = [];
let legsY = [];

let assemblyCard;



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

    assemblyCard = loadImage("assets/images/canvas/canvas.png");
}





function setup() {
    createCanvas(windowWidth, windowHeight);

    //loop + array- random starting position 
    for (let i = 0; i < heads.length; i++) {
        headX.push(random(0, width - 120));
        headY.push(random(-height, 0))
    }

    for (let i = 0; i < chest.length; i++) {
        chestX.push(random(0, width - 120));
        chestY.push(random(-height, 0))
    }

    for (let i = 0; i < legs.length; i++) {
        legsX.push(random(0, width - 120));
        legsY.push(random(-height, 0))
    }

    

}




function draw() {
    background('Dodgerblue')

    //function calls
    fallingImages(heads, headX, headY);
    fallingImages(chest, chestX, chestY)
    fallingImages(legs, legsX, legsY)

    let cardWidth = 350;
    let cardHeight = cardWidth * assemblyCard.height / assemblyCard.width; 

    let cardX = (width -  cardWidth) / 2;
    let cardY = (height - cardHeight) / 2;

    image(assemblyCard, cardX, cardY, cardWidth, cardHeight);

    
}

//"fallingImages()"- one reusable function. displays and moves the images (using parameneters)
function fallingImages(images, positionX, positionY) {

    for(let i = 0; i < images.length; i++) {

    //se the head w nd calculate it proportional height
    let imageWidth = 120;
    let imageHeight = imageWidth * images[i].height / images[i].width;

    //display without stretching it 
    image(images[i], positionX[i], positionY[i], imageWidth, imageHeight);

    //keep the head falling until it passes the bottom 
    if (positionY[i] < height) {
        
        positionY[i] = positionY[i] + 2;
    }

    else {

        //this resets the head above the canvas 
        positionY[i] = -imageHeight;

        //here is the randomness: choose a new horizontal position
        positionX[i] = random(0, width - imageWidth);

    }
  }

}