/**Class for making ground*/
class Ground {
    constructor(x, y, width, height, bool) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, { isStatic: bool, restitution: 1, density: 2, friction: 0 })
        World.add(world, this.body)


    }



    show() {
        var angle = this.body.angle;
        push()
        rectMode(CENTER);
        fill("grey")
        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        rect(0, 0, this.width, this.height);
        pop()
    }
}