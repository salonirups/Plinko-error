var particles=[];
var division=[];
var plinko=[];

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var engine,world;
var divisionheight=300

var division1,division2,division3,division4,division5,division6,division7;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  ground=new Ground(240,795,480,10);

  division1=new Division(5,400,10,350);
  division2=new Division(72,400,10,350);
  division3=new Division(139,400,10,350);
  division4=new Division(206,400,10,350);
  division5=new Division(273,400,10,350);
  division6=new Division(340,400,10,350);
  division7=new Division(407,400,10,350)

}

function draw() {
  background(255,255,255);  
  drawSprites();
  Engine.update(engine)
  ground.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
}

for(var j=40; j<=width; j=j+50){
  plinkos.push(new Plinko(j,75))
}

for(var j = 15; j <=width-10; j = j + 50){
  plinkos.push(new Plinko(j,175))
}

for (var j=40; j<=width-10; j=j+50){
  plinkos.push(new Plinko(j,275))
}

for (var j=15; j<=width-10; j=j+50){
  plinkos.push(new Plinko(j,375))
}


for(var k=0; k < particles.length, k++;){
  particles[j].display();
}