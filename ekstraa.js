// module aliases
const Engine = Matter.Engine
    // Render = Matter.Render,
const World = Matter.World
const Bodies = Matter.Bodies

const engine



const canvasW = 600
const canvasH = 400

const gravity = new p5.Vector(0, 0.25)

let ballPos = new p5.Vector(100,100)
let ballVel = new p5.Vector(5,4)
const ballSize = 30
const ballRadius = ballSize/2

function drawBall() {
  fill(255)
  noStroke()
  ellipse(ballPos.x, ballPos.y, ballSize)
  ballPos.add(ballVel)
  ballVel.add(gravity)
}

function canvasCollisions() {
  // left
  if(ballPos.x < 0 + ballRadius + 1) {
    ballVel.x = ballVel.x * -0.8
  }
  // bottom
  if(ballPos.y > canvasH - ballRadius + 1) {
    ballVel.y = ballVel.y * -0.8
  }
  // right
  if(ballPos.x > canvasW - ballRadius - 1) {
    ballVel.x = ballVel.x * -0.8
  }
}

function setup () {
  createCanvas(canvasW,canvasH)
  engine = Engine.create()
}

function draw () {
  background('#215314')
  drawBall()
  canvasCollisions()
  // print(ballVel)
}