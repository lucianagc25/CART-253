/**
 * WEEK 4
 * Luciana Garcia Cadillo
 * 
 * Leearning Events 
 */

"use strict";


let mouseTriggerBall =  {
    x: 0,
    y: 200,
    size: 50,
    speed: 0,
    fillColor: {
        r: 100,
        g: 0,
        b: 255
    }
};

function setup() {
    createCanvas(500, 500);
    background(0);

}


/**
Mouse Pressed Event-Function
*/
function draw() {
    background(0);
    //if (mouseIsPressed) {
      //  fill(random(255), random(255), random(255));
        //ellipse(mouseX, mouseY, mouseTriggerBall.size);
    //}

    fill(mouseTriggerBall.fillColor.r, mouseTriggerBall.fillColor.g, mouseTriggerBall.fillColor.b);
    ellipse(mouseTriggerBall.x, mouseTriggerBall.y, mouseTriggerBall.size);

    moveBall();

}

function moveBall() {
    mouseTriggerBall.x =
    mouseTriggerBall.x + mouseTriggerBall.speed;
}

//function mousePressed() {
    //console.log(mouseX, mouseY);//helps me to know whats happening with the variables
   //fill(random(0, 255), random(0, 255), random(0, 255));
   // ellipse(mouseX, mouseY, mouseTriggerBall.size);
//}

function mousePressed() {
    mouseTriggerBall.speed = 2;
}

function mouseReleased() {
    mouseTriggerBall.speed = 0;//esto hace que pare
}

function mouseWheel() {
    mouseTriggerBall.size = mouseTriggerBall.size + 5;
    mouseTriggerBall.size = mouseTriggerBall.size - 5;
}