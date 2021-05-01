
// Modules - Engine, World, Bodies

// Nicknames - namespacing

const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world, ground, box1,box2;
var ground_options,box_options;

function setup(){
    createCanvas(800,500);

    engine = Engine.create(); // engine = Matter.Engine.create();
    world = engine.world;

    box1 = new Box(200,100,40,40);
    box2 = new Box(175,210,40,40);

   ground = new Ground(400,490,800,10);

    

    console.log(ground);
    console.log(box);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    
    
}