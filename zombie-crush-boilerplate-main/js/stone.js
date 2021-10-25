class Stone{
    constructor(x,y,r){
        var option={
            restitution:0.5
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x, y, this.r,option);
        World.add(world, this.body);
    }
    display(){
        push();
        var position=this.body.position;
        translate(position.x,position.y)
      ellipseMode(RADIUS);
      ellipse(0, 0,this.r,this.r);
      pop();
    }
}