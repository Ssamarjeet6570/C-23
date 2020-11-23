const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object1,ground;
var ball;
var box1,box2;


function setup() {
  createCanvas(1000,400);
  //createSprite(400, 200, 50, 50);
engine = Engine.create();
world = engine.world;

//object1 = Bodies.rectangle(200,200,50,50);
//World.add(world,object1);

//var ground_options = {
 // isStatic:true
//}

//ground = Bodies.rectangle(200,380,400,10,ground_options);
//World.add(world,ground);

ground = new Ground(500,380,1000,10);

var ball_options = {
  restitution:1
}

ball = Bodies.circle(350,200,20,ball_options);
World.add(world,ball);


box1 = new Box(200,300,50,50);
box2 = new Box(245,200,50,70);

}




function draw() {
  background(255,255,255);

Engine.update(engine);

//rect(object1.position.x,object1.position.y,50,50);
//rect(ground.position.x,ground.position.y,400,10);
circle(ball.position.x,ball.position.y,20);

box1.display();
box2.display();
ground.display();
  drawSprites();
}