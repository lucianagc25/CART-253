/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

function setup() {
 createCanvas(600, 600);
    background(19, 29, 212);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    cone1()

    cone2()

    cone3()

    elipse1()

    elipse2()

    elipse3()

    lines()


}

function cone1() {
    triangle(300, 100, 200, 400, 400, 400);
    fill(180, 212, 19);

    triangle(300, 100, 200, 400, 600, 600);
}

function cone2() {
    triangle(300, 200, 250, 400, 350, 400);
    fill(193, 19, 212);

    triangle(300, 200, 250, 400, 600, 600);
}

function cone3() {
    triangle(300, 300, 275, 400, 325, 400);
    fill(19, 212, 29);

    triangle(300, 300, 275, 400, 600, 600);
}

function elipse1() {
    fill(237, 237, 133);
    ellipse(600, 100, 500, 500);
    
}

function elipse2() {
    fill(1237, 133, 227);
    ellipse(600, 100, 400, 400);
   
}

function elipse3() {
    fill(56, 139, 245);
    ellipse(600, 100, 300, 300);
}

function lines() {
    stroke(10);
    line(0, 0, 300, 700);
    line(0, 0, 400, 800);
    line(0, 0, 500, 900);
    line(0, 0, 600, 1000);
    line(0, 0, 700, 1100);
    line(0, 0, 800, 1200);
    
    
    stroke(255, 0, 0); 
    //for some reason this affects the stoke of all the shapes 
}


