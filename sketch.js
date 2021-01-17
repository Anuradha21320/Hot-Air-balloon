var balloon,bgImg,bImg
var database , position



function preload(){

bgImg = loadImage("background.png");
bImg = loadImage("HotAir.png");


}



function setup() {
  createCanvas(800,700);
  balloon = createSprite(150, 380, 50, 50);
  balloon.addImage("balloon",bImg);

 // var balloonPosition = database.ref('balloon/height');
  //balloonPosition.on("value", readPosition,showError);
}

function draw() {
  background(bgImg); 


   stroke("black");
   textSize(20)
   text("Use Arrow Keys To Move The Air Balloon !",25,30);


  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x -10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x +10;
  }
  else if(keyDown(UP_ARROW)){
   balloon.y = balloon.y -10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y +10;
  }

 drawSprites();
}

//function updateHeight(x,y){
 // database.ref('balloon/height').set({
  //  'x' : updateHeight.x + x , 
   // 'y' : updateHeight.y + y
 // })
//}

//function readHeight(data){
 // height = data.val();
  //balloon.x = height.x;
  //balloon.y = height.y;
//}

//function showError(){
 // console.log("error");
//}








