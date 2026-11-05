/**
 * Prototype #3 - Arrays 
 * Luciana Garcia Cadillo
 * 
 * Inspire by the Snnake game
 * Ill create a snake that eats randomly appearing food 
 */

"use strict";

const snake = {
    x: 200,
    y: 200,
    diameter: 20,
    maxSnakeTrailLength: 100,
    snakeTrail: [],
}

let food = [];


function setup() {
    createCanvas(400, 400);

    addFood();

}



function draw() {
    background("black");

    snake.x = mouseX;
    snake.y = mouseY;
    snake.snakeTrail.push({x: snake.x, y: snake.y});

    drawFood();


}


function addFood() {
    const foodItem = createFood();
    food.push(foodItem);

    setTimeout(addFood, 1000);

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


