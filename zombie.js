class Zombie{
constructor(x,y,width,height,image){
this.x = x;
this.y = y;
this.wid = width;
this.hei = height;
this.img = image;
}
shpw(){
this.body = createSprite(this.x,this.y,this.wid,this.hei)
this.body.addImage(this.img)
}
move(){
    this.body.setVelocityX = -2;
    if (this.body.x< 0){
        this.body.x = 800;
    }
}
}