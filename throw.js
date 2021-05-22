class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB=pointB
        this.throw = Constraint.create(options)
        World.add(world, this.throw)
     
    }

    fly(){
        this.throw.bodyA=null
    }
    
    attach(body){
      this.throw.bodyA=body
    }

    display(){
if(this.sling.bodyA){
    strokeWeight(10)
    line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,
        this.pointB.y)
}
    }
}