/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let circleX = 250;

let circleY = 250;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
     createCanvas(500,500);
     background('skyblue');
     let newVal = squareNum(2);
     let newVal_2 = squareNum(5);
     console.log(newVal);
     console.log(newVal_2);

}

function squareNum(num){
    let squaredNumValue = num*num;
    return squaredNumValue;

}

function squareNum(num){
    let squareNumValue = num*num;

}

function calculateDistance(objX,obkY){
    let d = dist(mouseX,mouseY, objX, objY);

    let mappedVal = map(d,0,250,0,255)

    return mappedVal;

}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('skyblue');

    //complexCircles()
    //complexCircles_2()
    //complexCircles_3()

    let newStroke = calculateDistance(circleX,circleY);
    
    console.log(newStroke);

    complexCircles_P(width/2,height/2,newStroke);
    complexCircles_P(width/2-100,height/2,100,100);
    let value = random(5,50);
    

}

function complexCircles_P(x,y,w,h, newStroke){
    push();
    fill(255,191,0);
    
    ellipse(x,y,w,h);
    fill(255,2,0)

    ellipse(x,y,w-20,w-20);
    fill(255,191,0)

    ellipse(x,y,w-40,h-40);
    pop();
}

function complexCircles(){
    push();
    fill(255,191,0);

    ellipse(width/2,height/2,80,80);
    fill(255,2,0)

    ellipse(width/2,height/2,60,60);
    fill(255,191,0)

    ellipse(width/2,height/2,40,40);
    pop();
}

function complexCircles_2(){
    push();
    fill(255,191,0);
    
    ellipse(width/2-100,height/2,80,80);
    fill(255,2,0);

    ellipse(width/2-100,height/2,60,60);
    fill(255,191,0);

    ellipse(width/2-100,height/2,40,40);
    pop();
}

function complexCircles_3(){
    push();
    fill(255,191,0);
    
    ellipse(width/2-100,height/2-100,80,80);
    fill(255,2,0);

    ellipse(width/2-100,height/2-100,60,60);
    fill(255,191,0);

    ellipse(width/2-100,height/2-100,40,40);
    pop();
}

