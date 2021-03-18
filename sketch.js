var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  ball= createSprite(600, 300, 40, 40);
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

if(isMeeting(fixedRect,movingRect))
 
 {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

}
else if(isMeeting(ball,movingRect)){
  movingRect.shapeColor="yellow";
  ball.shapeColor="yellow";
}
else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";

}
  drawSprites();
}


