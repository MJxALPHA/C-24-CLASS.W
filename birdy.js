class Birdy {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.name = "yellow kite";
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;

      this.body.position.x = mouseX;
      this.body.position.y = mouseY;


      push();
      translate(this.body.position.x,this.body.position.y)
      rotate(angle);
      rectMode(CENTER);
      fill(255,0,0);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  