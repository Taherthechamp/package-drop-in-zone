var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var zone1,zone2,zone3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	zone1Sprite=createSprite(400,655,200,20);
	zone1Sprite.shapeColor=color(255,0,0);
	zone2Sprite=createSprite(300,610,20,100);
	zone2Sprite.shapeColor=color(255,0,0);
	zone3Sprite=createSprite(500,610,20,100);
	zone3Sprite.shapeColor=color(255,0,0);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Zone
	zone1 = Bodies.rectangle(400, 655, 200, 20 , {isStatic:true} );
 	World.add(world, zone1);

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
    packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
  }
}



