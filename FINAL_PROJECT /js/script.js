

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
//stores the image that the user catches 
let selectedHead = null;
// this will help identify and manipulate the coordinates in the arrays
let selectedHeadIndex= null; 



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
        headX.push(randomSideX());
        headY.push(random(-height, 0));
    }

    for (let i = 0; i < chest.length; i++) {
        chestX.push(randomSideX());
        chestY.push(random(-height, 0));
    }

    for (let i = 0; i < legs.length; i++) {
        legsX.push(randomSideX());
        legsY.push(random(-height, 0));
    }

    

}


function draw() {
    background('Dodgerblue');

   

    let cardWidth = 350;
    let cardHeight = cardWidth * assemblyCard.height / assemblyCard.width; 

    let cardX = (width -  cardWidth) / 2;
    let cardY = (height - cardHeight) / 2;

    image(assemblyCard, cardX, cardY, cardWidth, cardHeight);

     //function calls
    fallingImages(heads, headX, headY);
    fallingImages(chest, chestX, chestY);
    fallingImages(legs, legsX, legsY);

    
}

//"fallingImages()"- one reusable function. displays and moves the images (using parameneters)
function fallingImages(images, positionX, positionY) {

    for(let i = 0; i < images.length; i++) {

    //set the head w nd calculate it proportional height
    let imageWidth = 120;
    let imageHeight = imageWidth * images[i].height / images[i].width;

    //display without stretching it 
    image(images[i], positionX[i], positionY[i], imageWidth, imageHeight);

    //if the image is held, skip its falling movement
    if (images[i] === selectedHead) {
        continue;
    }

    //keep the head falling until it passes the bottom 
    if (positionY[i] < height) {
        
        positionY[i] = positionY[i] + 2;
    }

    else {

        //this resets the head above the canvas 
        positionY[i] = -imageHeight;

        //here is the randomness: choose a new horizontal position
        positionX[i] = randomSideX();

    }
  }

}


//place the images on the sides/ outside the canvas
function randomSideX() {

    let cardWidth = 350;
    let cardX = (width - cardWidth) / 2;

    let imageWidth = 120;

    if (random(0, 1)< 0.5) {

        //left side 
        return random(0, cardX - imageWidth);

    }

    else{

        //right side 
        return random(cardX + cardWidth, width - imageWidth)
    }
}


function mousePressed() {

    for (let i = 0; i < heads. length; i++) {

        //calculate the dimensions of each falling head
        let imageWidth = 120;
        let imageHeight = imageWidth * heads[i]. height / heads[i].width;

        //collision detection between the mouse and the image 
        if (
            mouseX > headX[i] &&
            mouseX < headX[i] + imageWidth &&
            mouseY > headY[i] &&
            mouseY < headY[i] + imageHeight
        ) {

         console.log ("selected head", i);
         
         selectedHead = heads[i];
         selectedHeadIndex = i;

         //stop the loop after catching one image
         break;

        
        }

   


  }

}