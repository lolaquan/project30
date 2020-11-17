const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,platform1, platform2;
var polygon, slingShot;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13;
var block14, block15, block16;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    block1 = new box(330, 235, 30, 40);
    block2 = new box(360, 235, 30, 40);
    block3 = new box(390, 235, 30, 40);
    block4 = new box(420, 235, 30, 40);
    block5 = new box(450, 235, 30, 40);
    block6 = new box(360, 195, 30, 40);
    block7 = new box(390, 195, 30, 40);
    block8 = new box(420, 195, 30, 40);
    block9 = new box(390, 155, 30, 40);

    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(600, 405, 250, 30);
    platform2 = new Ground(750, 305, 300, 30);

    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);
    
    slingShot = new SlingShot(polygon.body,{x:100, y:200});
}

function draw(){
    background(255, 55, 55);
    Engine.update(engine);
    strokeWeight(4);
    
    ground.display();
    polygon.display();
    platform.display();
    slingShot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if (keyCode === 82){
slingShot.attach(polygon.body);
    }
}