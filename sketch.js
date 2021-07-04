var army , germs,  pic, bullet ;
var armyImage, germsImage, picImage, bullet_image;
var germsGroup, bulletGroup;

function preload(){
  
  picImage = loadImage("images.jpg");
  armyImage = loadImage("arrow0.png");
  bulletImage = loadImage("bullet.jpg");
  germsImage = loadImage("download.png");
  
}



function setup() {
  createCanvas(400,400);
  
  //creating background
  pic = createSprite(200,200,400,1000);
  pic.addImage(picImage);
  pic.scale=2
  
  

  //creating army to kill the germs
  army = createSprite(100,100);
  army.addImage(armyImage);
  army.scale=0.08

  
 

  germsGroup=createGroup();
  bulletGroup=createGroup();
  
}

function draw() {
  background(0);
 
  //killing germs
    if(bulletGroup.isTouching(germsGroup)){
      germsGroup.destroyEach();
      
    }
    if(germsGroup.isTouching(army)){
      text("game Over",200,100)
    }
  
   //moving army
   army.y = World.mouseY
  
   // release bullet when space key is pressed
  if (keyDown("space")) {
    createBullet();
    
  }
  
  //creating continous germs
  //var select_germs = Math.round(random(1,400));
  
  //if (World.frameCount % 100 == 0) {
    
      createGerms();
    
  
  
  drawSprites();
}


// Creating bullets for army
 function createBullet() {
   
  var bullet= createSprite(300 ,100, 60, 10);
  bullet.addImage(bulletImage);
  bullet.x = 100;
  bullet.y=army.y;
  bullet.velocityX = 4;
  bullet.lifetime = 1000;
  bullet.scale = 0.01;
  bulletGroup.add(bullet);
}

function createGerms(){
  if(frameCount%80===0){
  germs = createSprite(400,Math.round(random(1,350)));
  germs.addImage(germsImage);
  germs.velocityX=-3;
  germs.lifetime=500;
  germs.scale=0.2
  germsGroup.add(germs);
  }
  
}


