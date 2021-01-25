class Roof{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width=width;
        this.height=height;
        World.add(this.body,world)
 }
    display(){
        push();
        rectMode(CENTER);
        fill("white");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}