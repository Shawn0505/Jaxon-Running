var ground
function preload(){
  //pre-load images
  ground1 = loadImage("path.png")
  man1 = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  ground = createSprite(200,200,200,2000);
  ground.addImage(ground1)
  ground.scale=1;
  
  var man = createSprite(200,200,150,200);
  man.addAnimation("man1",man1)
  man.scale=0.09;
}

function draw() {
  background(0);
  ground.velocityY=2;


drawSprites();
}
