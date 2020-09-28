
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() 
{
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(146,362,15);
	
	dustbin1 = new Dustbin(740,260,300,PI/2);
	dustbin2 = new Dustbin(590,180,300,PI/2);
    dustbin3 = new Dustbin(650,30,200,90);
	ground = new Ground(600,height,1200,20);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);

  keyPressed();

  paper.display();
  dustbin1.display()
  dustbin2.display();
  dustbin3.display();
  ground.display();
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}



