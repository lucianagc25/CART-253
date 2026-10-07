/**
 * Conditionals- Prototype #2
 * Luciana Garcia Cadillo 
 * 
 * Leaning and practicing conditionals
 */

//inspiration from https://openprocessing.org/@WMcElroy/2971864

"use strict";
//Cubitos running to the left if click they will run to the right

let turnRight = false;


const cubito = {
    X: 300,
    Y: 200,
    Size: 100,
    fill: "#a9cd1a"
};


const cubito1 = {
    X: 400,
    Y: 550,
    Size: 100,
    fill: "#a96bf0"
};

const cubito2 = {
    X: 500,
    Y: 120,
    Size: 100,
    fill: "#f6c226"
};

const cubito3 = {
    X:390,
    Y: 400,
    Size: 100,
    fill: "#cf33a5"
};


const cubito4 = {
    X: 700,
    Y: 100,
    Size: 100,
    fill: "#47d5d0"
};


const cubito5 = {
    X: 40,
    Y: 300,
    Size: 100,
    fill: "#e74424"
};

 



function setup() {
    createCanvas(windowWidth, windowHeight);

}

/**
 * Squeres moving to the left and right
*/
function draw() {
    background("#610e4c");

    
//Cubito
    fill(cubito.fill);
    rect(cubito.X, cubito.Y, cubito.Size, cubito.Size)
    
    if (turnRight == false) {
    cubito.X = cubito.X - 2

    }

    else {
    cubito.X = cubito.X + 2
    }

    if (cubito.X < 0){
        cubito.X = windowWidth
    }

    //Cubito1

    fill(cubito1.fill);
    rect(cubito1.X, cubito1.Y, cubito1.Size, cubito1.Size)
   
    if (turnRight === false) {
    cubito1.X = cubito1.X - 2

    }

    else {
    cubito1.X = cubito1.X + 2
    }

    if (cubito1.X < 0){
        cubito1.X = windowWidth
    }

    fill(cubito2.fill);
    rect(cubito2.X, cubito2.Y, cubito2.Size, cubito2.Size)

    if (turnRight === false) {
    cubito2.X = cubito2.X - 2

    }

    else {
    cubito2.X = cubito2.X + 2
    }

    if (cubito2.X < 0){
        cubito2.X = windowWidth
    }

    //Cubito3

    fill(cubito3.fill);
    rect(cubito3.X, cubito3.Y, cubito3.Size, cubito3.Size)

    if (turnRight === false) {
    cubito3.X = cubito3.X - 2

    }

    else {
    cubito3.X = cubito3.X + 2
    }

    if (cubito3.X < 0){
        cubito3.X = windowWidth
    }

    //Cubito4
    fill(cubito4.fill);
    rect(cubito4.X, cubito4.Y, cubito4.Size, cubito4.Size)

    if (turnRight === false) {
    cubito4.X = cubito4.X - 2

    }

    else {
    cubito4.X = cubito4.X + 2
    }

    if (cubito4.X < 0){
        cubito4.X = windowWidth
    }
 
    //Cubito5
    fill(cubito5.fill);
    rect(cubito5.X, cubito5.Y, cubito5.Size, cubito5.Size)

    if (turnRight === false) {
    cubito5.X = cubito5.X - 2

    }

    else {
    cubito5.X = cubito5.X + 2
    }

    if (cubito5.X < 0){
        cubito5.X = windowWidth
    }
}

function mousePressed() {
    if (turnRight === false) {
        turnRight = true;
    }
    else {
        turnRight = false;
    }
}