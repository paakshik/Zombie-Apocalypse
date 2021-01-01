/*function for setup basic*/;
function startup1(){
	createCanvas(1600,800);
engine = Engine.create();
world = engine.world;
Engine.run(engine);
}
/*function for draw basic*/
function startup2(){
    background(255);
	drawSprites();
}