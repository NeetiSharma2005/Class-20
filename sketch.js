
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
 
 

stage  = Bodies.rectangle(200,200,200,20,ground_options);
 World.add(world,stage);
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ball1 = Bodies.circle(250,10,20,ball_options);
  World.add(world,ball1);
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball1.position.x,ball1.position.y,20);
  push ()

  rectMode(CENTER);

  rect(ground.position.x,ground.position.y,400,20);
  pop ()

  rect(stage.position.x,stage.position.y,200,20);
}

