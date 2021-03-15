var backImage,backgr;
var player, player_running;
var ground,ground_img;
var banans,banansImage,bananaGroup
var stone,stoneimg,stonegroup
var gameoverimg,gameover
var END =0;
var PLAY =1;
var gameState = PLAY;

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
banansImage=loadImage("banana.png");
stoneimg=loadImage("stone.png");
gameoverimg=loadImage("gameOver.png");

}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
 
  bananaGroup=new Group();
  stonegroup=new Group();

  gameover=createSprite(400,200);
  gameover.addImage(gameoverimg)
}

function draw() { 
  background(0);

  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

  }
spwanBanans()

if(bananaGroup.isTouching(player)){
  player.scale=player.scale+0.001;
  
}
if(player.isTouching)
  drawSprites();
}

function spwanBanans(){
  if ( frameCount%150===0){
var y=Math.round(random(150,300));
banans=createSprite(800,y);
banans.addImage(banansImage);
banans.scale=0.1
banans.velocityX=-4
banans.lifetime=200;
bananaGroup.add(banans);

  }
}

function spwanBanans(){
  if ( frameCount%200===0){

stone=createSprite(800,390);
stone.addImage(stoneimg);
stone.scale=0.1
stone.velocityX=-4
stone.lifetime=200;
stonegroup.add(banans);
  }
  }
