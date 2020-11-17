class box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        console.log(this.body.speed);
        if (this.body.speed < 3){
          this.body.display();
        }
        else {
          World.remove(world, this.body);
        push();
        this.visibility = this.visibility - 5;
  tint(255, this.visibility);
  image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        }
        
      }
}
