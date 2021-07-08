var player ; 
var monster ;
var obstacles ;



function preload(){
  
  playerImage =loadAnimation("soldier_1.jpg","soldier_2.jpg","soldier_3.jpg","soldier_4.jpg","soldier_5.jpg","soldier_6.jpg","soldier_7.jpg")
  
 
}



function setup() {
    createCanvas(1200,1200)
  player = createSprite(100,400,20,20)
  player.addAnimation("playerImage",playerImage);
}


function draw() {
 
 player.velocity = 2;   
 drawSprites();
   
  
}

