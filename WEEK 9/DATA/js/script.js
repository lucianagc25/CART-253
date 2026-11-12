/**
 * Week 9 - Data
 * Luciana Garcia Cadillo
 * 
 * 
 */

"use strict";


let flowerOne = {
    x : 100,
    width : 20,
    height : 150,
    y : 500 - 150,
    petal_width : 75,
    fillStem: 'DarkMagenta',
    strokePetal : 'DarkTurquoise',
    fillPetal: 'HotPink'

}

let flowerTwo = {
    x : 200,
    width : 20,
    height : 80,
    y : 500 - 80,
    petal_width : 75,
    fillStem: 'DarkMagenta',
    strokePetal : 'DarkTurquoise',
    fillPetal: 'HotPink'

}

let flowerThree = {
    x : 350,
    width : 20,
    height : 120,
    y : 500 - 120,
    petal_width : 75,
    fillStem: 'DarkMagenta',
    strokePetal : 'DarkTurquoise',
    fillPetal: 'HotPink'

}




function setup() {
    createCanvas(500, 500);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('Dodgerblue')
    
//stem
push();
noStroke();
fill(flowerOne, fillStem);
rect(flowerOne.x, flowerOne.y, flowerOne.width, flowerOne.height);
pop();
//petal
push();
stroke(flowerOne.strokePetal);
fill('DeepPink');
ellipse(flowerOne.x + flowerOne.widht/2, 
    flowerOne.y- ,
    f1_petal_width)
pop();

//stem
push();
noStroke();
fill('DarkMagenta');
rect(x_f2, y_f2, f2_width, f2_height);
pop();
//petal
push();
stroke('DarkTurquoise');
fill('DeepPink');
ellipse(x_f2+f2_width/2, 
    y_f2-f2_petal_width/2,
    f2_petal_width)
pop();

}



