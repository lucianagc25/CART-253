/**
 * Prototyping Functions 
 * Luciana Garcia Cadillo
 * 
 * Reference-https://editor.p5js.org/pippinbarr/sketches/7KfK3pK9i
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let line = {
    x : 100,
    y: 10,
    width: 380,
    height: 20,
}

let line2 = {
    x : 10,
    y: 50,
    width: 400,
    height: 30,
}

let line3 = {
    x : 10,
    y: 90,
    width: 400,
    height: 20,
}

let line4 = {
    x : 10,
    y: 130,
    width: 400,
    height: 30,
}

//bottom lines

let line5 = {
    x : 10,
    y: 200,
    width: 30,
    height: 300,
}

let line6 = {
    x : 50,
    y: 210,
    width: 20,
    height: 300,
}

let line7 = {
    x : 90,
    y: 190,
    width: 40,
    height: 300,
}

let line8 = {
    x : 150,
    y: 300,
    width: 10,
    height: 300,
}

let line9 = {
    x : 10,
    y: 200,
    width: 30,
    height: 300,
}

let line10 = {
    x : 50,
    y: 210,
    width: 20,
    height: 300,
}

let line11 = {
    x : 90,
    y: 190,
    width: 40,
    height: 300,
}

let line12 = {
    x : 150,
    y: 300,
    width: 10,
    height: 300,
}




function setup() {
    createCanvas(400, 400)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("rgba(97, 132, 228, 0.93)");

    drawLine(line)
    drawLine(line2)
    drawLine(line3)
    drawLine(line4)
    drawLine(line5)
    drawLine(line6)
    drawLine(line7)
    drawLine(line8)


}

function drawLine(line) {
    push();
    noStroke();
    fill("rgba(236, 113, 240, 0.8)");
    rect(line.x, line.y, line.width, line.height);
    pop();

}