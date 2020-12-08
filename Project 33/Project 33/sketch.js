  const Engine = Matter.Engine;
  const World = Matter.World;
  const Events = Matter.Events;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body
 
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var turn = 0;
var ground;
var particle;
var gameState;

function setup(){
  createCanvas(900, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(450,775,900,50);
  gameState = "play";

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 15; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 40; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 15; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 40; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    Engine.run(engine);
}
 


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("black");
  drawSprites();
  textSize(10);
  fill("white");
  text("SCORE: "+score, 420, 450);
  text("300", 30, 500);
  text("200", 110, 500);
  text("100", 190, 500);
  text("100", 270, 500);
  text("200", 350, 500);
  text("300", 430, 500);
  
  ground.display();
  
   for (var j = 0; j < plinkos.length; j++) {
     
     plinkos[j].display();
     
   }

   for (var j = 0; j < plinkos.length; j++) {
     
    plinkos[j].display();
   }

   for (var j = 0; j < plinkos.length; j++) {
     
    plinkos[j].display();
   }

   for (var j = 0; j < plinkos.length; j++) {
     
    plinkos[j].display();
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(gameState==="end"){
     text("GAME OVER", 200, 400);
   }
   if(particle != null){
     particle.display();
     if(particle.body.position.y > 760){
       if(particle.body.positon.x < 300){
         score += 500;
         particle = null;
         if(turn===5){
           gameState = "end";
         }
       }
       else if(particle.body.position.x < 600 && particle.body.position.x > 301){
         score += 100;
       }
     }
   }
}

function mousePressed(){
  if(gameState === "play"){
    turn++;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}

