/**
 * Prototype #3 - Arrays 
 * Luciana Garcia Cadillo
 * 
 * Inspire by the Snnake game
 * Ill create a snake that eats randomly appearing food 
 */

"use strict";

const snake = {
    diameter: 20,
    maxSnakeTrailLength: 100,
    snakeTrail: [],
}

let food = [];


function setup() {
    createCanvas(400, 400);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("black");

}


function addFood() {
    const foodItem = createFood();
    food.push(foodItem);
}

function createFood() {
    let foodItem = {
        x: random(0, width),
        y: random(0, height),
        fill: color(random(255), random(255), random(255)),
        size: 20,
    } ;
    return foodItem; 
}

function drawFood() {
    for (let foodItem of food){
        push();
        fill(foodItem.fill);
        ellipse(foodItem.x, foodItem.y, foodItem.size);
        pop();
    }
}
