class Bird{
    constructor(x,y){

        var ops={
            restitution:0.8,
            density:1.2,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,70,70,ops);
        this.w = 70;
        this.h = 70;
        World.add(myworld,this.body);

    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);  
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.w,this.h)
        pop()
        pos.x=mouseX;
        pos.y=mouseY
    }
}