/**
 Variables Prototype #1 
 * Luciana Garcia Cadillo
 * 
 * Learning how to use variables. 
 
/**
*/

//bolita 
let bolita = {
    x:200,
    y:200,
    size: 30,

    fill: {
    r:255,
    g:105,
    b:189,

    }
}

let bolita2 = {
    x: 200,
    y: 125,
    size: 30,

    fill: {
    r:255,
    g:200,
    b:105,
    }

}

let bolita3 = {
    x: 200,
    y: 250,
    size: 30,

    fill: {
    r:166,
    g:243,
    b:255,   
    }
}

let bolita4 = {
    x: 200,
    y: 200,
    size: 30,

    fill: {
    r:211,
    g:166,
    b:255,   
    }
}

let bolita5 = {
    x: 200,
    y: 200,
    size: 60,

    fill: {
    r:255,
    g:255,
    b:255,   
    }
}

let shake = 0;


let backgroundColor = {r: 15, g: 61, b: 21};

function setup() {
     createCanvas(400, 400);
      background(backgroundColor.r, backgroundColor.g, backgroundColor.b);
}


/**
Bolitas cohesively moving
*/
function draw() {

 background(backgroundColor.r, backgroundColor.g, backgroundColor.b);
  backgroundColor.r = backgroundColor.r -0.2
  backgroundColor.g = backgroundColor.g -0.2
  backgroundColor.b = backgroundColor.b -0.2



push();
  noStroke();
  fill(bolita.fill.r, bolita.fill.g, bolita.fill.b);
  ellipse(bolita.x, bolita.y, bolita.size);
  pop();

   bolita.x = bolita.x - 1;
   //bolita.x = constrain(bolita.x, 0, width-100);

   //bolita.x = constrain(bolita.x,0,800);
   //bolita.y = constrain(bolita.y,0,100);

push();
  noStroke();
  fill(bolita2.fill.r, bolita2.fill.g, bolita2.fill.b);
  ellipse(bolita2.x, bolita2.y, bolita2.size);
  pop();

   bolita2.y = bolita2.y - 1;
   //bolita2.y = constrain(bolita2.y, 0, width-100);

push();
  noStroke();
  fill(bolita3.fill.r, bolita3.fill.g, bolita3.fill.b);
  ellipse(bolita3.x, bolita3.y, bolita3.size);
  pop();

  bolita3.y = bolita3.y + 1;
  bolita3.y = constrain(bolita3.y, 0, width +100);

push();
  noStroke();
  fill(bolita4.fill.r, bolita4.fill.g, bolita4.fill.b);
  ellipse(bolita4.x, bolita4.y, bolita4.size);
  pop();

   bolita4.x = bolita4.x +1;
   bolita4.x = constrain(bolita4.x, 0, width +100);


push();
  noStroke();
  fill(bolita5.fill.r, bolita5.fill.g, bolita5.fill.b);
  ellipse(bolita5.x, bolita5.y, bolita5.size);
  pop();


  bolita5.x = bolita5.x + random(-shake, shake);
  bolita5.y = bolita5.y + random(-shake, shake);

  shake= shake +0.01;
  shake= constrain(shake,0,10);

  bolita5.x = constrain(bolita5.x,210,200);
  bolita5.y = constrain(bolita5.y,200,210);

  


  

}
