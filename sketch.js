
var cat, catImg;
var mouse,mouseImg;
var catImg1,mouseImg1;
 var catImg2,mouseImg2;

var garden,gardenImg;

function preload() {
    //load the images here

    catImg =loadAnimation("images/tomOne.png");

    gardenImg = loadImage("images/garden.png");

    mouseImg = loadAnimation("images/jerryOne.png");

    catImg1  = loadAnimation("images/tomTwo.png","images/tomThree.png");

    mouseImg1 =loadAnimation("images/jerryTwo.png","images/jerryThree.png"); 

    catImg2 = loadAnimation("images/tomFour.png");

    mouseImg2 = loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(500,700,20,20);
    cat.addAnimation("cat",catImg);
    cat.scale = 0.2;
    
    mouse = createSprite(200,700,20,20);
    mouse.addAnimation("standing",mouseImg);
    mouse.scale = 0.15;

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width-mouse.width)/2){
cat.addAnimation("cat sitting",catImg2);
cat.velocityX = 0;
cat.x = 300;
cat.changeAnimation("cat sitting");

mouse.addAnimation("last Image",mouseImg2);
mouse.scale = 0.15;
cat.scale = 0.2;
mouse.changeAnimation("last Image");

    }
    drawSprites();
}


function keyPressed(){
    if(keyCode ===LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("running",catImg1);
        cat.changeAnimation("running");

        mouse.addAnimation("teasing",mouseImg1);
        mouse.frameDelay = 25;
        mouse.changeAnimation("teasing");
       
    }
    

    
    

  //For moving and changing animation write code here


}
