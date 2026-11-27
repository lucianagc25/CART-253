

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
    fallingImages(heads, headX, headY, assembledHead);
    fallingImages(chest, chestX, chestY, assembledChest);
    fallingImages(legs, legsX, legsY, assembledLegs);



    
}

//"fallingImages()"- one reusable function. displays and moves the images (using parameneters)
function fallingImages(images, positionX, positionY, assembledImage) {

    for(let i = 0; i < images.length; i++) {

    //skip the assembled image complitely
    if (images[i] === assembledImage) {
        continue;
    }

    //set the head w nd calculate it proportional height
    let imageWidth = 120;
    let imageHeight = imageWidth * images[i].height / images[i].width;

    //display without stretching it 
    image(images[i], positionX[i], positionY[i], imageWidth, imageHeight);

    //if the image is held, skip its falling movement
    if (images[i] === selectedImage) {
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

    if (catchImage(legs, legsX, legsY, assembledLegs, "legs")){
        return;
    }

    if(catchImage(chest, chestX, chestY, assembledChest, "chest")){
        return;
    }

    if(catchImage(heads, headX, headY, assembledHead, "head")){
        return;
    }

    
     

}


  function mouseDragged() {

    //this checks if the user has caught a head 
    if (selectedIndex !== null) {
    
    
        if (selectedCategory === "head"){
        //update the position of the selected head 
        // the original distance between the mouse and the image 
        headX[selectedIndex] = mouseX - offsetX;
        headY[selectedIndex] = mouseY - offsetY;
        }

        else if (selectedCategory === "chest"){
        //update the position of the selected head 
        // the original distance between the mouse and the image 
        chestX[selectedIndex] = mouseX - offsetX;
        chestY[selectedIndex] = mouseY - offsetY;
        }

        else if (selectedCategory === "legs"){
        //update the position of the selected head 
        // the original distance between the mouse and the image 
        legsX[selectedIndex] = mouseX - offsetX;
        legsY[selectedIndex] = mouseY - offsetY;
        }

        
    }

        
}

function mouseReleased() {

    //check if the user was holding the head 
    if (selectedIndex !== null){

        //collision detection between the mouse and the card 
        if (
            selectedCategory === "head"&&
            mouseX > cardX &&
            mouseX < cardX + cardWidth &&
            mouseY > cardY &&
            mouseY < cardY + cardHeight
        ){

            //store the selected head as pard of the assembled character
            assembledHead = selectedImage;

        }

        //clear the selection so the image can fall again
        selectedImage = null;
        selectedIndex = null;
        selectedCategory = null;
    }
}

function catchImage(images, positionX, positionY, assembledImage, category) {

    for (let i = 0; i < images. length; i++) {

        if (images[i] === assembledImage){
            continue;
        }

        //calculate the dimensions of each falling head
        let imageWidth = 120;
        let imageHeight = imageWidth * images[i]. height / images[i].width;

        //collision detection between the mouse and the image 
        if (
            mouseX > positionX[i] &&
            mouseX < positionX[i] + imageWidth &&
            mouseY > positionY[i] &&
            mouseY < positionY[i] + imageHeight
        ) {
         
         selectedImage = images[i];
         selectedIndex = i;
         selectedCategory = category;

         //calculate where inside the image the user is clicking
         offsetX = mouseX - positionX[i];
         offsetY = mouseY - positionY[i];

         console.log("selected Category:", selectedCategory)
         console.log("selected Index", selectedIndex)

         //indicate that an image was successfully caught 
         return true;

        
        }

  }

  return false; 

}

    
