class Log{
    constructor(x,y,h,AB){

        var ops={
            restitution:0.8,
            density:1.2,
            friction:1.5
        }
        this.body = Bodies.rectangle(x,y,20,h,ops);
        this.w = 20;
        this.h = h;

        Body.setAngle(this.body,AB);

        World.add(myworld,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        stroke("purple");
        strokeWeight(10);   
        fill("white");
        rectMode(CENTER);
        rect(0,0,this.w,this.h)
        pop()
    }
}