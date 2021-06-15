class Slingshot {

constructor(body,point) {
var options = {
    bodyA: body,
    pointB: point,
    length: 55,
    stiffness: 0.04
  }

  this.sling1 = loadImage("sprites/sling1.png");
  this.sling2 = loadImage("sprites/sling2.png");
  this.sling3 = loadImage("sprites/sling3.png");

  this.sling = Constraint.create(options);

  World.add(myWorld,this.sling);
}
attach(body) {
  this.sling.bodyA = body;
}
fly() {
  this.sling.bodyA = null;
}

display() {
  image(this.sling1,200,20)
  image(this.sling2,170,20)
  


    if (this.sling.bodyA) {
      var pointA = this.sling.bodyA.position;
      var pointB = this.sling.pointB;

      if (frameCount % 60 == 0){ console.log(pointA.x); }

     // stroke("white");
      //line(pointB.x-20,pointA.y+15,pointB.x-10,pointB.y-55);
     // line(pointB.x-20,pointA.y+15,pointB.x+35,pointB.y-55);

     push()
      if (pointA.x < 220) {

      stroke(48,22,8);
      strokeWeight(3);
      
        line(pointA.x -20, pointA.y + 10, pointB.x -10, pointB.y -55);
        line(pointA.x -20, pointA.y + 10, pointB.x +30, pointB.y -55);
        image(this.sling3,pointA.x-30,pointA.y -10,15,30);
    }
    else {
      stroke(48,22,8);
      strokeWeight(3);
      
        line(pointA.x +20, pointA.y + 10, pointB.x -10, pointB.y -55);
        line(pointA.x +20, pointA.y + 10, pointB.x +30, pointB.y -55);
        image(this.sling3,pointA.x+25,pointA.y -10,15,30);
    }
pop()
     // 
     // line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    }


}