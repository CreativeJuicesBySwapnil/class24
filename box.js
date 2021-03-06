class Box{
    constructor(x,y,w,h){

        var ops={
            restitution:0.8,
            density:1.2,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,w,h,ops);
        this.w = w;
        this.h = h;
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