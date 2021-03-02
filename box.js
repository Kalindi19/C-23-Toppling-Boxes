class Box{
    constructor(x,y,width,height){
        var option={
            restitution : 0.5,
            friction : 3,
            density : 1.5
        };
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        this.color="green";
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill(this.color);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}