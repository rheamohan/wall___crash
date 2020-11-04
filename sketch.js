var wall,thickness;
var bullet,weight,speed;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(400, 200, 50, 50);
  bullet.shapeColor = "pink";
  bullet.velocityX = speed;
  bullet.weight = 32;

  wall = createSprite (1200,200,20,400);
  wall.shapeColor = "blue";
  wall.thickness = 70;
}
 

function draw() {
  background ("black"); 
   
  if (hasCollided(wall,bullet)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
      
        if (damage>10){
        wall.shapeColor = "red";
        }
          if (damage<10){
          wall.shapeColor = "green";
          }
  }
 
  drawSprites();
}

function hasCollided(lwall,lbullet){
  bulletRightEdge = lbullet.x+lbullet.width;
  wallLeftEdge = lwall.x;

  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
   else {return false}
}




