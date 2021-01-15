
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper, ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(200, 200, 40);
	ground=new Ground(200, 700, 1500, 50);
	
	//right=createSprite(750, 650, 10, 50);
	//left=createSprite(630, 650, 10, 50);
	//bottom=createSprite(690, 675, 130, 10);




	boxleftSprite=createSprite(750, 650, 10, 50);
	boxleftSprite.shapeColor=color(255,0,0);

	boxLeftBody = Bodies.rectangle(750, 650, 20, 50, {isStatic:true} );
	World.add(world, boxLeftBody);

	boxBase=createSprite(690, 675, 130, 10);
	boxBase.shapeColor=color(255,0,0);

	boxBottomBody = Bodies.rectangle(690, 675, 130, 10 , {isStatic:true} );
	World.add(world, boxBottomBody);

	boxleftSprite=createSprite(630, 650, 10, 50);
	boxleftSprite.shapeColor=color(255,0,0);

	boxRightBody = Bodies.rectangle(630, 650, 10, 50, {isStatic:true} );
	World.add(world, boxRightBody);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-65});
	}
	} 