class Snow{
    constructor(x,y,r){
        var options={
            density:1,
            friction:1.5
        }
        this.image=loadImage("snow4.webp");
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r,50);
        pop();
    }
}