class Plinko {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
    this.r=r;
      this.body = Bodies.circle(x,y,this.r,options);
      World.add(world, this.body);
    }
    display(){
      ellipseMode(RADIUS);
      fill("white");
      ellipse(0,0,this.r,this.r);
    }
  }