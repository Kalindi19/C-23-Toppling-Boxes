const World= Matter.World;
const Engine= Matter.Engine;
const Bodies= Matter.Bodies;

var engine, world;
var box1,box2,box3;
var ground;

function setup() {
  createCanvas(800,400);

  engine= Engine.create();
  world= engine.world;

  box1=new Box(200,0,50,50);
  box1.color="yellow";

  box2=new Box(225,50,50,50);
  box2.color="blue";

  box3=new Box(250,100,50,50);
  box3.color="red";

  ground=new Ground(400,390,800,10);

}

function draw() {
  background("black");  

  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  ground.display();

}