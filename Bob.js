class Bob{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:7.8
        }

        this.body=Bodies.circle(x,y,25,options);
        World.add(this.body,world);

    }
       display(){
            push();
             ellipseMode(RADIUS);
             strokeWeight(1);
             fill("red");
             stroke('white')
             ellipse(this.body.position.x,this.body.position.y,25,25);
             pop();

       }

}