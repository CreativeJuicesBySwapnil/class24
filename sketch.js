//step1: create a class
//step2: defined properties and functions inside the class
//step3: create new objects
//step4: save it in computer memory
//step5: change the properties if you want to
//step6: call the function 


const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies;
const Body = Matter.Body

var myworld,myengine;
var box1,box2,box3,box4,box5;
var ground; 
var pig1,pig2;
var bird;
var log1,log2,log3,log4;

function setup() {
  createCanvas(1200,400);

  myengine=Engine.create(); //.world
  myworld=myengine.world;
  
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  box5 = new Box(810,160,70,70);
  
  pig1 = new Pig(810,320);
  pig2 = new Pig(810,240)

  bird = new Bird(300,320);
  
  log1 = new Log(810,260,300,PI/2)
  log2 = new Log(810,180,300,PI/2);
  log3 = new Log(760,120,150,PI/7);
  log4 = new Log(870,120,150,-PI/7);

  ground = new Ground(600,380,1200,40);
}

function draw() {
  background("cyan");  
  

  Engine.update(myengine);
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  pig1.display();
  pig2.display();
  
  bird.display();
  
  log1.display();
  log2.display();
  log3.display();
  log4.display();

  ground.present();
  
}










