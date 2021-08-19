
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1100, 700);

	engine = Engine.create();
	world = engine.world;



	_bottom = new Wall(200,690,1800,20);
	_right = new Wall(1090,200,20,1000);
	_left = new Wall(10,200,20,1000);
	_top = new Wall(200,10,1800,20);
	_rightSide = new Wall(900,650,20,150); 	
	_leftSide = new Wall(700,650,20,150);

	var options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,100,20,options);

	World.add(world, ball);

	Engine.run(engine);

	force();
  
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);

  _bottom.show();
  _top.show();
  _left.show();
  _right.show();
  _rightSide.show();
  _leftSide.show()

  ellipse(ball.position.x, ball.position.y, 20);
  
  drawSprites();
 
}

function force() {

		Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.07,y:0});
		Matter.Body.applyForce(ball, {x:0,y:0}, {x:0,y:-0.08});


}	




