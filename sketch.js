function setup() {
  createCanvas(800,1000);
  Rect1 = createSprite(400, 200, 50, 50);
  Rect2 = createSprite(400, 800,80,30);
  Rect1.velocityY = 5;
  Rect2.velocityY = -5;
  hi1 = createSprite(400,500,20,20);
  hi2 = createSprite(600,500,40,40);
  hi1.velocityX = 5;
  hi2.velocityX = -5;
}

function draw() {
  background("blue"); 
 bounceOff(hi1,hi2);
  drawSprites();
}

