const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgImg;
var ball1;
var ground;
var snow = [];
var engine, world;

function preload(){
  bgImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400)
  engine = Engine.create();
  world = engine.world;

  ball1 = new Ball(300,200,50);
  ground = new Ground(400,429,800,10);
}

function draw() {
  background(bgImg);
  Engine.update(engine);

  if(frameCount % 30 === 0){
    snow.push(new Snow(random(100,700),-50,25));
  }
  
  ground.display();
  for(var i = 0; i < snow.length; i++){
    snow[i].display();
  }
  ball1.display();
}