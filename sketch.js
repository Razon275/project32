
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var stand1,stand2,Polygon,polygonImage,slingshot;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var box17,box18,box19,box20,box21,box22,box23,box24,box25;
var score=0;
function preload()
{
	polygonImage=loadImage("polygon.png")
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options={
		isStatic:false,
		restitution:0,
		friction:1,
		density:1.2
	}
	 Polygon=Bodies.circle(100,300,20,options)
	 World.add(world,Polygon)
	 stand2=new Ground(1000,400,300,10)
     stand1=new Ground(600,600,400,20)
	 box1=new Box(510,570,30,40)
	 box2=new Box(540,570,30,40)
	 box3=new Box(570,570,30,40)
	 box4=new Box(600,570,30,40)
	 box5=new Box(630,570,30,40)
	 box6=new Box(660,570,30,40)
	 box7=new Box(690,570,30,40)
	 box8=new Box(540,530,30,40)
	 box9=new Box(570,530,30,40)
	 box10=new Box(600,530,30,40)
	 box11=new Box(630,530,30,40)
	 box12=new Box(660,530,30,40)
	 box13=new Box(570,490,30,40)
	 box14=new Box(600,490,30,40)
	 box15=new Box(630,490,30,40)
	 box16=new Box(600,450,30,40)
	 box17=new Box(940,340,30,40)
	 box18=new Box(970,340,30,40)
	 box19=new Box(1000,340,30,40)
	 box20=new Box(1030,340,30,40)
	 box21=new Box(1060,340,30,40)
	 box22=new Box(970,300,30,40)
	 box23=new Box(1000,300,30,40)
	 box24=new Box(1030,300,30,40)
	 box25=new Box(1000,260,30,40)
	 slingshot=new Slingshot(Polygon,{x:200,y:300})
	 console.log(score)
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(255);
  textSize(35)
        fill("white")
        text("Score "+score,width-300,50)
  imageMode(CENTER)
  image(polygonImage,Polygon.position.x,Polygon.position.y,40,40)
  stand1.display();
  stand2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  slingshot.display();
  drawSprites();
 
}
function mouseDragged(){
	Body.setPosition(Polygon,{x:mouseX,y:mouseY})
	}
	function mouseReleased(){
	slingshot.fly();
	}
	function keyPressed(){
		if(keyCode===32){
			Body.setPosition(Polygon,{x:200,y:300})
			slingshot.attach(Polygon)
		}
	}