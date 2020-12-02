class Paper{
    constructor(x,y,radius ){
        var option={
            
            restitution:0.3,
            density:1.2
                    }
this.body=Bodies.circle(x,y,radius,option)
this.radius=radius
World.add(world,this.body)
this.image=loadImage("paper.png")
    }
    display(){
var pos=this.body.position
imageMode(CENTER)
image(this.image,pos.x,pos.y,50,50)

    }
}