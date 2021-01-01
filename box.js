/**Class for making packages  and helicoptor*/
class Box {
    constructor(x, y, width, height, bool, image) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, { isStatic: bool, restitution: 1, density: 60 });
        World.add(world, this.body);
        this.body.friction = 0;
    }
    show() {
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        fill("blue");
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
    move3() {
        this.body.position.x++;
    }
}
