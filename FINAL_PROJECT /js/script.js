

"use strict";

//arrays to store the images 
let heads = [];
let chest = [];
let legs = [];

let headX = [];
let headY = [];

let chestX = [];
let chestY = [];

let legsX = [];
let legsY = [];

let assemblyCard;
let cardWidth = 350;
let cardHeight;
let cardX;
let cardY;

//stores the image that the user catches 
let selectedImage= null;
// this will help identify and manipulate the coordinates in the arrays
let selectedIndex= null; 
//identifies which categorythe caught image belongs to 
let selectedCategory= null;

//this is to store the distance between the mouse and the images corner
let offsetX = 0;
let offsetY = 0;

//stores the body parts that has been succesfully placed inside the card 
let assembledHead= null;
let assembledChest= null;
let assembledLegs= null;




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

    //calculate the proportinal height of the tarot card 
    cardHeight = cardWidth * assemblyCard.height / assemblyCard.width;

    //position to center the tarot card
    cardX = (width -  cardWidth) / 2;
    cardY = (height - cardHeight) / 2;
    //display the card
    image(assemblyCard, cardX, cardY, cardWidth, cardHeight);

    // display the assembled head only after a successfull drop 
    if (assembledHead !== null) {
        
        //set the width and calculate the proportinal height 
        let assembledWidth = 120;
        let assembledHeight = assembledWidth * assembledHead.height / assembledHead.width;

        //center the head horizontally inside the tarot card
        let assembledX = cardX + (cardWidth - assembledWidth)/ 2;

        //position the head in the upper section of the card 
        let assembledY = cardY + cardHeight * 0.20; // this positions the head 20% of the way down the tarot card no matter its dimensions 


        image(assembledHead, assembledX, assembledY, assembledWidth, assembledHeight)
    }


     //function calls
    fallingImages(heads, headX, headY);
    fallingImages(chest, chestX, chestY);
    fallingImages(legs, legsX, legsY);



    
}

//"fallingImages()"- one reusable function. displays and moves the images (using parameneters)
function fallingImages(images, positionX, positionY) {

    for(let i = 0; i < images.length; i++) {

    //skip the assembled image complitely
    if (images[i] === assembledHead) {
        continue;
    }

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

        if (heads[i] === assembledHead){
            continue;
        }

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

         //calculate where inside the image the user is clicking
         offsetX = mouseX - headX[i];
         offsetY = mouseY - headY[i];

         console.log("offset X:", offsetX)
         console.log("offset Y:", offsetY)

         //stop the loop after catching one image
         break;

        
        }

  }

}

  function mouseDragged() {

    //this checks if the user has caught a head 
    if (selectedHeadIndex !== null) {

        //update the position of the selected head 
        // the original distance between the mouse and the image 
        headX[selectedHeadIndex] = mouseX - offsetX;
        headY[selectedHeadIndex] = mouseY - offsetY;
    }
}

function mouseReleased() {

    //check if the user was holding the head 
    if (selectedHeadIndex !== null){

        //collision detection between the mouse and the card 
        if (
            mouseX > cardX &&
            mouseX < cardX + cardWidth &&
            mouseY > cardY &&
            mouseY < cardY + cardHeight
        ){

            console.log("successful drop");

            //store the selected head as pard of the assembled character
            assembledHead = selectedHead;

        }

        else {

            console.log ("unsuccessful drop")
        }

        //clear the selection so the image can fall again
        selectedHead = null;
        selectedHeadIndex = null;
    }
}

function catchImage(images, positionX, positionY, assembledImage, category) {

    
}