class Ball{
    constructor(x,y,r){
        var options={
            restitution:0.9,
            density:1,
            friction:0.5
        }
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
        noStroke();
        fill("red");
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}