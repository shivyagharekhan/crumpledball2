class Dustbin{
    constructor(){
        var option={
            isStatic:true
        }

  this.dustbinc = Bodies.rectangle(700,685,150,25,option)
  this.dustbinl = Bodies.rectangle(625,685,25,150,option)
  this.dustbinr = Bodies.rectangle(775,685,25,150,option)
this.image =loadImage("dustbingreen.png");
World.add(world,this.dustbinc)
World.add(world,this.dustbinl)
World.add(world,this.dustbinr)
    }
    display(){
var pos=this.dustbinc.position
imageMode(CENTER)
image(this.image,pos.x,pos.y,170,150)

    }
}