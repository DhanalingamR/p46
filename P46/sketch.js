var bg
var rc,rci,rc2,ri2
var cc=0,ccf
var b,bi
var bo1,bo2,bo3,bo4

function preload(){
 
bg=loadImage("images/bg.png")
rci=loadImage("images/rc.png")
ri2=loadImage("images/rc2.png")
bi=loadImage("images/b.png")
}

function setup(){
 createCanvas(1800,900) 
 rc=createSprite(1100,450,10,12)
 rc.addImage(rci)
 rc.scale=0.054
 rc2=createSprite(600,450,10,12)
 rc2.addImage(ri2)
 rc2.scale=0.05 
 bo1=createSprite(850,230,690,15)
 bo2=createSprite(850,665,690,15)
 bo3=createSprite(500,450,15,450)
 bo4=createSprite(1200,450,15,450)
 b=createSprite(850,446,10,10)
 b.addImage(bi)
 b.scale=0.3
bo1.visible=false
bo2.visible=false
bo3.visible=false
bo4.visible=false

}


function draw(){
background(bg)

b.bounceOff(bo1)
b.bounceOff(bo2)
b.bounceOff(bo3)
b.bounceOff(bo4)

rc.collide(bo1)
rc.collide(bo2)
rc.collide(bo3)
rc.collide(bo4)

rc2.collide(bo1)
rc2.collide(bo2)
rc2.collide(bo3)
rc2.collide(bo4)

if (rc.isTouching(b)) {
    b.velocityX=-5
    b.velocityY=8
}
if (rc2.isTouching(b)) {
    b.velocityX=5
    b.velocityY=-8
}

if (keyDown(LEFT_ARROW)) {
    rc.x=rc.x-5
}
if (keyDown(RIGHT_ARROW)) {
    rc.x=rc.x+5
}
if (keyDown(UP_ARROW)) {
    rc.y=rc.y-5
}
if (keyDown(DOWN_ARROW)) {
    rc.y=rc.y+5
}

if (keyDown("a")) {
    rc2.x=rc2.x-5
}
if (keyDown("d")) {
    rc2.x=rc2.x+5
}
if (keyDown("w")) {
    rc2.y=rc2.y-5
}
if (keyDown("s")) {
    rc2.y=rc2.y+5
}

if (rc.isTouching(rc2)) {
  rc.destroy()  
  rc2.destroy()
  cc=1
  ccf=frameCount
}

if (cc===1 && frameCount>ccf+20) {
    console.log("hello")
    rc=createSprite(1100,450,10,12)
    rc.addImage(rci)
    rc.scale=0.05
    rc2=createSprite(600,450,10,12)
    rc2.addImage(ri2)
    rc2.scale=0.05 
    cc=0  
}

drawSprites();
}
