/**
 * Variables
 * Luciana Garcia Cadillo
 * 
 * Learning Variables 
 */

"use strict";


//let ellipse_Size = 550;
//let rect_Size = 10;



let sun = {
    sunX: 20,
    sunY: 50,
    sunsize: 40,
    r: 255,
    g: 255,
    b: 0
};

let bird = {
    X: 200,
    Y: 50,
    birdsize: 20,
    r: 0,
    g: 0,
    b: 255
};

let backgroundColor = {r: 0, g: 0, b: 0};

function setup() {
     createCanvas(400, 400);


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    background(backgroundColor.r, backgroundColor.g, backgroundColor.b);
    fill(255, 0, 0);
    fill(sun.r, sun.g, sun.b);
    ellipse(sun.sunX, sun.sunY, sun.sunsize, sun.sunsize);
    
    fill(bird.r, bird.g, bird.b);
    ellipse(bird.X, bird.Y, bird.birdsize, bird.birdsize);

    bird.X = bird.X - 1;
    bird.X = constrain(bird.X, 0, width-100);
    backgroundColor.r = backgroundColor.r + 1;

    console.log("Bird X: " + bird.X);

   

// los primeros dos numeros son para posicionar, los dos ultimos son para el tamaño del circulo x,y
//mouse X y mouseY son variables que hacen que el circulo siga al mouse

    
//donde pones o cambias las variables cambia el lugar donde se dibuja el rectangulo


     //ellipse_Size = ellipse_Size -1;
     //rect_Size = rect_Size +0.25;
//esta linea de codigo hace que el circulo se haga mas pequeño cada vez que se dibuja, si quieres que se haga mas grande cambia el -1 por un +1

//console.log es una funcion que te permite ver en la consola de tu navegador el valor de las variables, esta en inspect


}