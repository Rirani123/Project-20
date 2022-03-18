var cat;
var mouse;

function preload() {
    //load the images here
    tomImage1 = loadAnimation("cat1.png", "cat2.png");
    tomImage2 = loadImage("cat3.png", "cat4.png");
    gardenImage = loadImage("garden.png");
    jerryImage1 = loadImage("mouse1.png", "mouse2.png");
    jerryImage2 = loadImage("mouse3.png", "mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870, 600);
    tom.addAnimation("catSitting", tomImage1);
    tom.scale = 0.2;
    
    jerry = createSprite(270, 600);
    jerry.addAnimation("mouseTeasing", jerryImage1);
}

function draw() {

    background("gardenImage");
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2) {
        tom.velocityX = 0;
        tom.addAnimation("catLastImage", tomImage2);
        tom.changeAnimation("catLastImage");
        tom.x = 300;
        tom.scale = 0.2;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW) {
        jerry.addAnimation("mouseTeasing", jerryImage1);
        jerry.changeAnimation("mouseTeasing");
        jerry.frameDelay = 25;

        tom.velocityX = -5;
        tom.addAnimation("catSitting", tomImage1);
        tom.changeAnimation("catSitting");
        tom.frameDelay = 25;

    }

}
