var Engine = Matter.Engine,
      World = Matter.World,
      Bodies = Matter.Bodies;

var engine;
var world;
var pallot = [];
var liuskat = [];

function setup() {
  createCanvas(400, 600);
  background(100);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  liuskat.push(new Liuska(150, 150, 300, 10, 0.1, '#fff')); //sovellus
  liuskat.push(new Liuska(250, 250, 300, 10, -0.1, '#fff'));  //kuljetus
  liuskat.push(new Liuska(150, 350, 300, 10, 0.1, '#fff')); //verkko
  liuskat.push(new Liuska(250, 450, 300, 10, -0.1, '#fff'));  //linkki

  liuskat.push(new Liuska(-5, 300, 10, 600, 0, 0)); //left
  liuskat.push(new Liuska(405, 250, 10, 600, 0, 0)); //right
  liuskat.push(new Liuska(200, 605, 400, 10, 0, 0)); //bottom

  rectMode(CENTER);

  setInterval(dropBall, 1500);
}

function dropBall() {
  pallot.push(new Pallo(10, 10, random(10, 20)));
}

function draw() {
  background('#90a98a');
  textSize(24)

  Engine.update(engine);
  
  for(var i = 0; i < pallot.length; i++) {
    pallot[i].show();
  }
  
  for(var i = 0; i < liuskat.length; i++) {
    liuskat[i].show();
  }

  text('1. fyysinen kerros', 200, 670, 250, 250)
  push();
  rotate(radians(5))
  text('5. sovelluskerros', 200, 220, 250, 250)
  text('3. verkkokerros', 200, 420, 250, 250)
  pop();
  push();
  rotate(radians(-5))
  text('4. kuljetuskerros', 300, 360, 250, 250)
  text('2. linkkikerros', 300, 560, 250, 250)
  pop();

}