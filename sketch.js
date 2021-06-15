const Engine = Matter.Engine;

const World = Matter.World; 

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var myWorld, myEngine;
var ground;
var ball;
var bird;
var box1,box2, box3, box4,box5, pig1, pig2, log1,log2, log3, log4, log5;
var bg;
var platform;
var sling;

function preload() {
bg = loadImage("sprites/bg.png");
}

function setup() {
  createCanvas(1200,400);

  //This creates the electronic engine of a car
  myEngine = Engine.create();

  //This is the world of the engine, it has to be dry and hot
  myWorld = myEngine.world;

  ground = new Ground(600,height,1200,20);
  platform = new Ground(150,305,300,170);

  

  bird = new Bird(200,50);

  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  box5 = new Box(810,160,70,70);


  log1 = new Log(810,260,300,PI/2);
  log2 = new Log(810,180,300,PI/2);
  log3 = new Log(760,120,150,PI/7);
  log4 = new Log(870,120,150,-PI/7);
  //log5 = new Log(200,100,150,PI/2);

  pig1 = new Pig(810,350,50,50);
  pig2 = new Pig(810,220,50,50);

  sling = new Slingshot(bird.body,{x:200,y:100});
  

 
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  ground.display();
  platform.display();
  bird.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  //log5.display();
  sling.display();
  
 // console.log(box2.body.angle)
}
function mouseDragged() {
  Matter.Body.setPosition(bird.body, {x:mouseX,y:mouseY});
}
function mouseReleased() {
  sling.fly()
}
function keyPressed() {
  if (keyCode === 32) {
    sling.attach(bird.body)
  } 
}