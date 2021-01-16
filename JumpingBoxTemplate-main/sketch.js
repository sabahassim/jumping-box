var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(65,78,200,20);
    surface1.shapeColour = "pink";

    surface2 = createSprite();
    surface2.shapeColour = "green";

    surface3 =  createSprite();
    surface3.shapeColour = "yellow";

    surface4 =  createSprite();
    surface4.shapeColour = "orange";

    //create box sprite and give velocity
    box = createSprite(random(20,750));
    box.velocity = 5;
}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        //change colour here
        box.shapeColour = "pink";
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
     // change colour here
     box.shapeColour = "green";
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        // change colour here
        box.shapeColour = "yellow";
       }

       if(surface4.isTouching(box) && box.bounceOff(surface4)){
        // change colour here
        box.shapeColour = "orange";
       }
}
