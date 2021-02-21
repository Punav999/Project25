
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var db,dbi;
function preload()
{
dbi = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(400,690,800,10);
	box1= new Box(600,640,20,100);
	box2= new Box(800,640,20,100);
	box3= new Box(700,685,200,10);
	paper= new Paper(150,600,20);
	db= Bodies.rectangle(700,640,200,120,{isStatic:true});
	World.add(world,db);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  imageMode(CENTER);
  background(255);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  image(dbi,db.position.x,db.position.y,200,120);
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
	 Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-50})
	}
}

