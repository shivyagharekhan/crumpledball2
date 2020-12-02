
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
  ground = new Ground(400,695,800,10)
  paper = new Paper(300,300,20,20)
	dustbin = new Dustbin()
  var render = Render.create({ element: document.body, 
    engine: engine, 
    options: { width: 1600, height: 700, 
      wireframes: false } });
       Engine.run(engine);
        Render.run(render);


  
}


function draw() {
  rectMode(CENTER);
  background("green");
  paper.display();
  ground.display();
  dustbin.display();
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW) {

Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-40});

}

}


