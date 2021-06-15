class Ground {
    constructor(x,y,width,height) {
        var Option = {
           isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,Option);

        this.width = width;

        this.height = height;

        World.add(myWorld,this.body);
    }
    display() {
        var pos = this.body.position;

        push();
      //  strokeWeight(4);
      //  stroke("white");
        fill("brown");

        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}