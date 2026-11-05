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

    if (snake.snakeTrail.length>=snake.maxSnakeTrailLength){
        snake.snakeTrail.shift();
    }

    drawFood();
    drawSnake();
    handleFoodCollision();




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

function drawSnake() {
    for (let element of snake.snakeTrail){
    push();
    noStroke();
    fill("white");
    ellipse(element.x, element.y, snake.diameter);
    pop();
    
};
}

function checkCollision(foodItem){
    let distance = dist(snake.x, snake.y, foodItem.x, foodItem.y);

    if (distance <= 20){
        return true;
};

return false;

}

function handleFoodCollision() {
    for(let foodItem of food){
        if (checkCollision(foodItem)) {
            food.splice(food.indexOf(foodItem), 1);
        }
    }
}
