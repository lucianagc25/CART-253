/**
 * Conditionals- Prototype #2
 * Luciana Garcia Cadillo 
 * 
 * Leaning and practicing conditionals
 */

//inspiration from https://openprocessing.org/@WMcElroy/2971864

"use strict";

const cubito = {
    X: 300,
    Y: 40,
    Size: 100,
    fill: "#a9cd1a"
};


const cubito1 = {
    X: 400,
    Y: 300,
    Size: 100,
    fill: "#f8e254"
};

const cubito2 = {
    X: 500,
    Y: 300,
    Size: 100,
    fill: "#a9cd1a"
};

const cubito3 = {
    X: 600,
    Y: 300,
    Size: 100,
    fill: "#f8e254"
};


const cubito4 = {
    X: 700,
    Y: 300,
    Size: 100,
    fill: "#a9cd1a"
};


const cubito5 = {
    X: 800,
    Y: 100,
    Size: 100,
    fill: "#a9cd1a"
};







function setup() {
    createCanvas(windowWidth, windowHeight);

}

/**
 * Squeres moving to the left and right
*/
function draw() {
    background("#610e4c");

    fill(cubito.fill);
    rect(cubito.X, cubito.Y, cubito.Size, cubito.Size)
    
    cubito.X = cubito.X - 2
    //moves the cube to the left

    if (cubito.X < 0){
        cubito.X = windowWidth
    }


    fill(cubito1.fill);
    rect(cubito1.X, cubito1.Y, cubito1.Size, cubito1.Size)
   
    cubito1.X = cubito1.X - 2
    //moves the cube to the left

    if (cubito1.X < 0){
        cubito1.X = windowWidth
    }

    fill(cubito2.fill);
    rect(cubito2.X, cubito2.Y, cubito2.Size, cubito2.Size)

    cubito2.X = cubito2.X - 2
    //moves the cube to the left

    if (cubito2.X < 0){
        cubito2.X = windowWidth
    }

    fill(cubito3.fill);
    rect(cubito3.X, cubito3.Y, cubito3.Size, cubito3.Size)

    cubito3.X = cubito3.X - 2
    //moves the cube to the left

    if (cubito3.X < 0){
        cubito3.X = windowWidth
    }

    fill(cubito4.fill);
    rect(cubito4.X, cubito4.Y, cubito4.Size, cubito4.Size)

    cubito4.X = cubito4.X - 2
    //moves the cube to the left

    if (cubito4.X < 0){
        cubito4.X = windowWidth
    }

    fill(cubito5.fill);
    rect(cubito5.X, cubito5.Y, cubito5.Size, cubito5.Size)

    cubito5.X = cubito5.X - 2
    //moves the cube to the left

    if (cubito5.X < 0){
        cubito5.X = windowWidth
    }

}