var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,2000);
  
  thickness = random(22, 83)
  wall = createSprite(1400, 200, thickness, 2000)
  wall.shapeColor = 'red'


  bullet = createSprite(400, 200, 50, 50);
  bullet.shapeColor = 'yellow'

  speed = random(223, 321)
  weight = random(30, 52)

  bullet.velocityX = speed;
  console.log("speed of bullet: " + speed)


}

function draw() {
  background(0,0,0);  


  if(hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness *thickness * thickness);

    if (damage >10)
    {
      wall.shapeColor = color(255, 0, 0);
    }

    if(damage < 10)
    {
      wall.shapeColor = color(0, 255, 0);
    }

    console.log("Damage by the bullet: " + damage)



  }


  
  drawSprites();
}


function hasCollided(lbullet, lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if (bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;


}