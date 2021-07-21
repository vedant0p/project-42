var dockingStation,dockingStationImage;
var back, backImage;
var spacecraft,spacecraft1_img,spacecraft2_img,spacecraft3_img,spacecraft4_img;
var hasDocked = false
function preload(){
  dockingStationImage = loadImage("iss.png");
  backImage = loadImage("spacebg.jpg");
  spacecraft_img1 = loadImage("spacecraft1.png");
  spacecraft_img2 = loadImage("spacecraft2.png");
  spacecraft_img3 = loadImage("spacecraft3.png");
  spacecraft_img4 = loadImage("spacecraft4.png");
}
function setup() {
  createCanvas(800,400);

  dockingStation = createSprite(430, 200, 70, 70);
  dockingStation.addImage(dockingStationImage);
  dockingStation.scale=0.50

  

  spacecraft = createSprite(200, 200, 200, 200);
  spacecraft.addImage(spacecraft_img1);
  spacecraft.scale=0.15

}

function draw() {
  background(backImage);  

  if(!hasDocked) {
    spacecraft.x = spacecraft.x + random(-1,1);

    if(keyIsDown(UP_ARROW)){
      spacecraft.y = spacecraft.y -2
    }
  
    if(keyIsDown(DOWN_ARROW)){
      spacecraft.y = spacecraft.y +2
      spacecraft.addImage(spacecraft_img2)
  
    }
  
    if(keyIsDown(RIGHT_ARROW)){
      spacecraft.x = spacecraft.x +2
      spacecraft.addImage(spacecraft_img3)
  
    }
  
   if(keyIsDown(LEFT_ARROW)){
    spacecraft.x = spacecraft.x -2
    spacecraft. addImage(spacecraft_img4)
  
    }
  }

  if(spacecraft.y <= (dockingStation.y+70) && spacecraft.x <= (dockingStation.x-10)) {
    hasDocked = true
    fill("white")
    textSize(25)
    text("Docking successful!",400,200)
  }
  drawSprites();

}