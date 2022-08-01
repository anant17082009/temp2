var shooter,shooterimg
var bullet,bulletimg
var laser,laserimg
var bg,bgimg
var asteroid,asteroidimg
var line

function preload() {
  shooterimg = loadImage("./img/shooter.png")
  laserimg = loadImage("./img/laser.png")
  bulletimg = loadImage("./img/bullet.png")
  bgimg = loadImage("./img/bg.jpg")
  asteroidimg = loadImage("./img/asteroid.png")
}

function setup(){
    createCanvas(windowWidth,windowHeight)
    
    shooter = createSprite(719,714,25,25)
    shooter.addImage(shooterimg)
    shooter.scale = 0.50

    laser = createSprite(shooter.x,shooter.y,10,10)
    laser.addImage(laserimg)
    laser.scale = 0.05
    laser.visible = false

    line = createSprite(0,805,3500,10)

    

    
    

   
    
    
    
}

function draw(){

  background(bgimg)

  if(keyIsDown(LEFT_ARROW)){
    shooter.velocityX = -15
  }
  if(keyWentUp(LEFT_ARROW)){
    shooter.velocityX = 0
  }


  if(keyIsDown(RIGHT_ARROW)){
    shooter.velocityX = 15
  }
  if(keyWentUp(RIGHT_ARROW)){
    shooter.velocityX = 0
  }

  if(frameCount%50===0){
    asteroid = createSprite(Math.round(random(200,1554)),Math.round(random(77,75)) , 30 , 30)
    asteroid.addImage(asteroidimg)
    asteroid.scale = 0.25
    asteroid.velocityY = 5

  }
  

  if(asteroid.isTouching(line) && line.isTouching(asteroid)){
    gameOver()
    console.log("ok")
}



 



  drawSprites()
  fill("white")
  text(mouseX+","+mouseY,mouseX,mouseY)
}



function gameOver() {
  swal(
    {
      title: `Game Over , You Lose!!!`,
      text: "Thanks for playing!!",
      imageUrl:
        "https://png.pngtree.com/png-clipart/20210310/original/pngtree-sad-mood-face-expression-boy-student-png-image_5950485.jpg",
      imageSize: "150x150",
      confirmButtonText: "Play Again !!"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );


  
}
