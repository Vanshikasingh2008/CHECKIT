
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gamestate = "firstStage";

function preload()
{
	backgroundimg = loadImage("co_background.jpg");
}

function setup() {
	canvas = createCanvas(320,500);
    /*engine = Engine.create();
  world = engine.world;*/
  
firstPage = new FirstPage();
secondPage = new Register1();
thirdPageyes = new Yes(); 

	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundimg);

  if(gamestate === "firstStage"){
    textSize(50);
    fill(0);
    text("Check It !",50,100);
    firstPage.display();
    //secondPage.hide();
  }
  if(gamestate === "secondStage"){
    secondPage.display();
  }
  if(gamestate === "text"){
    fill(255);
    textSize(20);
    strokeWeight(4);
    text("Did you take the Covid-19 Vaccine?",10,355);
  }
  if(gamestate === "thirdStageyes"){
    thirdPageyes.display();
  }
  if(gamestate === "text2"){
    fill(255);
    textSize(20);
    strokeWeight(4);
    text("Registered Succesfully !",50,175);
  }
  
  drawSprites();
 
}



