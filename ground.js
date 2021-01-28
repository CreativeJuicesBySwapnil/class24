class Ground {
    constructor(x,y,w,h){
        var blt= {
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,blt);
        this.width=w;
        this.height=h;
        World.add(myworld,this.body); 
    }

    present(){
        var sas=this.body.position;

        fill("green");
        rectMode(CENTER)
        rect(sas.x,sas.y,this.width,this.height);
    }
}
