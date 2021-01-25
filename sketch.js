const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var rope1,rope2,rope3,rope4,rope5;
var bob1,bob2,bob3,bob4,bob5,

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(350,100,300,30);
	World.add(world,roof);

	bob1=new Bob(250,300);
	bob2=new Bob(300,300);
	bob3=new Bob(350,300);
	bob4=new Bob(400,300);
	bob5=new Bob(450,300);

	rope1=new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	World.add(rope1,world);

	rope2=new Rope(bob2.body,roof.body,-bobDiameter*2,0);
	World.add(rope2,world);

	rope3=new Rope(bob3.body,roof.body,-bobDiameter*2,0);
	World.add(rope3,world);

	rope4=new Rope(bob4.body,roof.body,-bobDiameter*2,0);
	World.add(rope4,world);

	rope5=new Rope(bob5.body,roof.body,-bobDiameter*2,0);
	World.add(rope5,world);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


  
  drawSprites();
 
}



