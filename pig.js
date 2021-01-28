class Pig{
    constructor(x,y){

        var ops={
            restitution:0.8,
            density:1.2,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,60,60,ops);
        this.w = 60;
        this.h = 60;
        World.add(myworld,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle); 
        fill("pink");
        rectMode(CENTER);
        rect(0,0,this.w,this.h)
        pop()
    }
}