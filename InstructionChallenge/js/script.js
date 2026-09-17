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
    background(0,20,50);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    background(0,20,50);
   

  cone1();

  cone2();

  cone3();






  


}


function cone1() {
    
    fill(255, 229, 204);
    triangle(400, 200, 450, 200, 425, 250);

    fill(51,153, 255);
    ellipse(430,170, 70, 60);
   
    
    
//pink circle
    fill(255,204,209);
    ellipse(450,187,60, 50);
    
//green circle
    fill(204,255,153);
    ellipse(400,180,60, 50);
    

    fill(255, 229, 204);
    triangle(150, 200, 200, 200, 175, 250);
}


function cone2() {

    fill(255, 229, 204);
    triangle(150, 200, 200, 200, 175, 250);

    
    fill(255,255, 204);
    ellipse(200,200, 50, 50);
   
    
    
//pink circle
    fill(255,204,209);
    ellipse(180,165,60, 50);
    
//green circle
    fill(204,255,153);
    ellipse(155,180,60, 50);
}

function cone3() {

    rect(225, 300, 20, 80)

    rect(350, 300, 20, 80)

    ellipse(300, 450, 400, 50);





}

