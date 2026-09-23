/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
 createCanvas(600, 600);
    background(127,195,235);
}


function draw() {
   
  rectangle1();

  rectangle2();

  rectangle3();

  elipse1();

  elipse2();

  ellipse3();

}



function rectangle1() {
    fill(111,120, 13);
    rect(0, 400, 600, 200);


}

function rectangle2() {
    fill(0, 0, 0);
    rect(200, 300, 10, 100);

    rect(0, 440, 600, 80);
    fill(0, 0, 0);

     fill(245, 215, 64);
    rect(0, 475, 600, 10);
}

function rectangle3() {
    fill(0, 0, 0);
    rect(400, 300, 10, 100);
}

function elipse1() {
    fill(255, 255, 255);
    ellipse(200, 305, 40, 40);

}

function elipse2() {

    fill(255, 255, 255);
    ellipse(400, 305, 40, 40);
}

function ellipse3() {
    fill(255, 210, 0);
    ellipse(300, 200, 100, 100);
}



