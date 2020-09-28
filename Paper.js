class Paper
{
  constructor(x,y,diameter) 
  {
    var options = 
    {
    isStatic:false,
    'restitution':0.3,
    'friction':0.5,
    'density':1.2
    }

    this.body = Bodies.circle(x,y,diameter,options)
    this.diameter = 15;

    World.add(world, this.body);
  }
    display()
    {
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("blue");
        fill("pink");
        circle(0,0,30);
        pop();
    }
}