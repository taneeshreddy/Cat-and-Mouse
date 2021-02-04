var backgroundImage;

var cat, mouse;

function preload() {
    //load the images here
    backgroundImage = loadImage("images/garden.png");
    mouse1Image = loadImage("images/mouse1.png");
    mouseWalking = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse4Image = loadImage("images/mouse4.png");

    catWalking = loadAnimation("images/cat2.png","images/cat3.png");
    cat1Image = loadImage("images/cat1.png");
    cat4Image = loadImage("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(800,650,10,10);
    mouse = createSprite(200,650,10,10);
    cat.addImage("cat1", cat1Image);
    mouse.addImage("mouse1", mouse1Image);
    cat.scale = 0.1;
    mouse.scale = 0.1;
}

function draw() {

    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning", catImg2);
      cat.changeAnimation("catRunning");
  }


}
