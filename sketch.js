var canvas;
var music;
var object1,object2,object3,object4;
var box;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);

    //create 4 different surfaces
object1=createSprite(50,390,80,20);
object1.shapeColor="blue";

object2=createSprite(150,390,80,20);
object2.shapeColor="red";

object3=createSprite(250,390,80,20);
object3.shapeColor="yellow";

object4=createSprite(350,390,80,20);
object4.shapeColor="pink";

    //create box sprite and give velocity
box=createSprite(random(2,370),50,15,15);


}

function draw() {
    background(0);
    drawSprites();

    //create edgeSprite
edges = createEdgeSprites();

box.bounceOff(edges);
/*box.bounceOff(object1);
box.bounceOff(object2);
box.bounceOff(object3);
box.bounceOff(object4);*/

if(keyDown("space")){
    box.velocityY=6;
    box.velocityX=3;
    music.play();
}

    //add condition to check if box touching surface and make it box

    if(object1.isTouching(box)&& box.bounceOff(object1) ){
        box.shapeColor="blue";
    }

    if(object2.isTouching(box)&& box.bounceOff(object2) ){
        box.shapeColor="red";
    }

    if(object3.isTouching(box)){
       music.stop();
       box.velocityX=0; 
       box.velocityY=0;   
        box.shapeColor="yellow";
    }
    if(object4.isTouching(box)&& box.bounceOff(object4) ){
        box.shapeColor="pink";
    }
}
