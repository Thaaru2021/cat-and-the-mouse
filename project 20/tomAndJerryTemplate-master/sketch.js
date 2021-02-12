
function preload() {
 tomImg.loadAnimation ("cat1.png,cat2.png,cat3.png,cat4.png") 
 gardenImg.loadImage("garden.png")
 jerryImg.loadAnimation("mouse1.png,mouse2.png,mouse3.png,mouse4.png")

}

function setup(){
    createCanvas(1000,800);
tom=createSprite(300,300,30,30)
tom.addAnimation(tomImg)

garden=createSprite(1000,300)
garden.addImage(gardenImg)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
