// var polygon, polygon_image;
var gameState= "sling";
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var score=0;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1= new Ground(715,330, 300,10);
	box1= new Box(660, 300, 50,50);
	box2= new Box(710, 300, 50,50);
	box3= new Box(760, 300, 50,50);
	box4= new Box(690, 250, 50,50);
	box5= new Box(740, 250, 50,50);
	box6= new Box(710, 200, 50,50);
	polygon=new Polygon(150, 300, 50);
	string=new String(polygon.Body, {x:150,y:300});
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground1.display();
  text("score " + score, 750,40 );

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  polygon.display();
  string.display();
  drawSprites();
 
}




function mouseDragged(){
    if(gameState!=="launched")
    Matter.Body.setPosition(polygon.Body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
	string.fly();
    gameState="launched"
	// Matter.Body.setStatic(mango1, false);
}

function keyPressed(){
    if(keyCode === 32){
        string.attach(polygon.Body);
		gameState="sling";
    }
}

