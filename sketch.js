var maze,mazeImage;
var player,enemyPlayer;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29;
var block,block1,block2;
var treasureBox,treasureBoxImage,key,keyImage;
var score = 0;
var lives = 3;
var wallSound;


function preload() {
  wallSound = loadSound("sounds/wallhit.mp3");
  mazeImage = loadImage("sprites/maze.png");
  treasureBoxImage = loadAnimation("sprites/treasureboxclosed.png","sprites/treasureboxopen.png");
  fireImage = loadImage("sprites/fire.png");
  keyImage = loadImage("sprites/key.png");
  playerImage = loadAnimation("sprites/playerfront.png");
  enemyPlayerImage = loadImage("sprites/ghost.png");
  playerRightImage = loadAnimation("sprites/playerright.png","sprites/playerrightwalk1.png","sprites/playerrightwalk2.png");
  playerLeftImage = loadAnimation("sprites/playerleft.png","sprites/playerleftwalk1.png","sprites/playerleftwalk2.png");
  playerUpImage = loadAnimation("sprites/playerback.png","sprites/playerbackwalk1.png","sprites/playerbackwalk2.png");
  playerDownImage = loadAnimation("sprites/playerfront.png","sprites/playerwalking1.png","sprites/playerwalk2.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  //maze = createSprite(600,500,400,400);
  //maze.scale=0.5
  //maze.addImage(mazeImage);
  player = createSprite(200,200);
  
  enemyPlayer = createSprite(100,40,10,10);
  enemyPlayer.addImage(enemyPlayerImage);
  enemyPlayer.scale=0.1;
  treasureBox = createSprite(870,390,10,10);
  treasureBox.addAnimation("treasurebox", treasureBoxImage);
  treasureBox.scale = 0.1
  key= createSprite(100,60,5,5);
  key.addAnimation("key", keyImage);
  key.scale=0.15;
  player.addAnimation("standingPlayer", playerImage);
  player.addAnimation("rightPlayer",playerRightImage);
  player.addAnimation("leftPlayer",playerLeftImage);
  player.addAnimation("upPlayer",playerUpImage);
  player.addAnimation("downPlayer",playerDownImage);
  block = createSprite(600,277,10,10);
  block1 = createSprite(580,295,10,10);
  block2 = createSprite(580,260,10,10);
  player.scale = 0.5;

  wall1 = createSprite(15,10,20,900);
  wall1.visible = true;
  wall2 = createSprite(500,10,950,20);
  wall2.visible = true;
  wall3 = createSprite(970,10,20,900);
  wall3.visible = true;
  wall4 = createSprite(500,450,950,20);
  wall4.visible = true;
  wall5 = createSprite(0,295,295,20);
  wall5.visible = true;
  wall5.debug = true;
  wall2.debug = true;

  wall6 = createSprite(230,174,270,20);
  wall6.visible = true;
  wall7 = createSprite(500,174,125,20);
  wall7.visible = true;
  wall8 = createSprite(637,240,195,20);
  wall8.visible = true;
  wall9 = createSprite(540,390,135,20);
  wall9.visible = true;
  wall10 = createSprite(590,90,65,20);
  wall10.visible = true;

  wall11 = createSprite(630,320,95,20);
  wall11.visible = true;
  wall12 = createSprite(230,390,95,30);
  wall12.visible = true;
  wall13 = createSprite(240,90,25,155);
  wall13.visible = true;
  wall13.debug = true;
  wall14 = createSprite(107,138,25,70);
  wall14.visible = true;
  wall14.debug = true
  wall15 = createSprite(720,175,25,150);
  wall15.visible = true;

  wall16 = createSprite(625,110,25,175);
  wall16.visible = true;
  wall17 = createSprite(450,130,25,85);
  wall17.visible = true;
  wall18 = createSprite(380,60,25,85);
  wall18.visible = true;
  wall19 = createSprite(485,320,25,160);
  wall19.visible = true;
  wall20 = createSprite(590,350,25,80);
  wall20.visible = true;

  wall21 = createSprite(670,346,25,115);
  wall21.visible = true;
  wall22 = createSprite(365,400,25,90);
  wall22.visible = true;
  wall23 = createSprite(270,320,25,165);
  wall23.visible = true;
  wall24 = createSprite(360,205,25,90);
  wall24.visible = true;
  wall25 = createSprite(555,205,25,90);
  wall25.visible = true;

  wall26 = createSprite(175,205,25,90);
  wall26.visible = true;
  wall26.debug = true;
  wall27 = createSprite(860,205,25,110);
  wall27.visible = true;
  wall28 = createSprite(800,60,25,110);
  wall28.visible = true;
  wall28.debug = true;
  wall29 = createSprite(790,400,25,110);
  wall29.visible = true;
  player.debug = true;
  player.setCollider("circle",0,0,20);
  enemyPlayer.debug = true;
  enemyPlayer.velocityX = 1.5;
  enemyPlayer.velocityY = 0 ;
  
}

function draw() {
  background(mazeImage);  
  textSize(20);
  text("lives",800,150);
  text("score",780,200);
  lives = 3;
  score = 0;
  block.velocityX = -0.5;
  block1.velocityX = +0.5;
  block2.velocityX = +0.5;
  drawSprites();
  playerMovement();
  console.log(mouseX + ";" + mouseY);
  playerWallHit();
  ghostControl();
  restart();
  main();
  soundControlls();

}

function playerMovement() {

  if(keyDown("RIGHT_ARROW") ){

  player.changeAnimation("rightPlayer",playerRightImage);
  player.velocityX = +2;
  player.velocityY = 0;

  }
  if(keyDown("LEFT_ARROW") ){

  player.changeAnimation("leftPlayer",playerLeftImage);
  player.velocityX = -2;
  player.velocityY = 0;
    
  }if(keyDown("UP_ARROW") ){

  player.changeAnimation("upPlayer",playerUpImage);
  player.velocityX = 0;
  player.velocityY = -2;

  }
  if(keyDown("DOWN_ARROW") ){

  player.changeAnimation("downPlayer",playerDownImage);
  player.velocityX = 0;
  player.velocityY = +2;

  }


}

function playerWallHit(){

player.collide(wall1);
player.collide(wall2);
player.collide(wall3);
player.collide(wall4);
player.collide(wall5);
player.collide(wall6);
player.collide(wall7);
player.collide(wall8);
player.collide(wall9);
player.collide(wall10);
player.collide(wall11);
player.collide(wall12);
player.collide(wall13);
player.collide(wall14);
player.collide(wall15);
player.collide(wall16);
player.collide(wall17);
player.collide(wall18);
player.collide(wall19);
player.collide(wall20);
player.collide(wall21);
player.collide(wall22);
player.collide(wall23);
player.collide(wall24);
player.collide(wall25);
player.collide(wall26);
player.collide(wall27);
player.collide(wall28);
player.collide(wall29);

if (block.isTouching(wall1)||
block.isTouching(wall2)||
block.isTouching(wall3)||
block.isTouching(wall4)||
block.isTouching(wall5)||
block.isTouching(wall6)||
block.isTouching(wall7)||
block.isTouching(wall8)||
block.isTouching(wall9)||
block.isTouching(wall10)||
block.isTouching(wall11)||
block.isTouching(wall12)||
block.isTouching(wall13)||
block.isTouching(wall14)||
block.isTouching(wall15)||
block.isTouching(wall16)||
block.isTouching(wall17)||
block.isTouching(wall18)||
block.isTouching(wall19)||
block.isTouching(wall20)||
block.isTouching(wall21)||
block.isTouching(wall22)||
block.isTouching(wall23)||
block.isTouching(wall24)||
block.isTouching(wall25)||
block.isTouching(wall26)||
block.isTouching(wall27)||
block.isTouching(wall28)||
block.isTouching(wall29)) {

  block.velocityX = 3;
  block.velocityY = 0;


}

}

function ghostControl() {

if (enemyPlayer.isTouching(wall13)) {

  enemyPlayer.velocityX = -2;
  //enemyPlayer.y = 0;
  //console.log(enemyPlayer.x);
}

if (enemyPlayer.isTouching(wall1)) {

  enemyPlayer.velocityX = 0;
enemyPlayer.velocityY = 2;

}

if (enemyPlayer.isTouching(wall5)) {

  enemyPlayer.velocityX = 0.1;
  enemyPlayer.velocityY = 2;

}

if (enemyPlayer.isTouching(wall2)) {

  enemyPlayer.velocityX = 0;
  enemyPlayer.velocityY = 1;

}

}

function restart () {

if (player.isTouching(enemyPlayer)||player.isTouching(block)||player.isTouching(block1)||player.isTouching(block2)) {

player.x = 200;
player.y = 200;
player.velocityX = 0;
player.velocityY = 0;

}

}

function main() {

if (player.isTouching(treasureBox)) {

  text("you won", 300, 200);
  textSize(20);
  score = score + 1;

}

if (player.isTouching(enemyPlayer)||player.isTouching(block)||player.isTouching(block1)||player.isTouching(block2)) {

  text("you lost better luck next time", 500, 200);
  textSize(20);
}

}

function soundControlls() {

if (player.isTouching(wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17.wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27.wall28,wall29) ) {

  wallSound.play();

}

if (player.isTouching(enemyPlayer) ) {

  //playSound("", false);

}



if (player.isTouching(block,block1,block2) ) {

  //playSound("", false);

}

if (player.isTouching(key) ) {

  //playSound("", false);

}

if (player.isTouching(treasureBox) ) {

  //playSound("", false);

}

}