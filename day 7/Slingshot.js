class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.s1=loadImage('sprites/sling1.png')
        this.s2=loadImage('sprites/sling2.png')
        this.s3=loadImage('sprites/sling3.png')
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.s1, 184, 39)
        image(this.s2, 160, 39)

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            if (pointA.x < 250) {
            line(pointA.x, pointA.y, pointB.x+5, pointB.y-30);
            line(pointA.x, pointA.y, pointB.x-25, pointB.y-30);
            image(this.s3, pointA.x, pointA.y)
            } else {
            line(pointA.x, pointA.y, pointB.x-15, pointB.y-30);
            line(pointA.x, pointA.y, pointB.x-45, pointB.y-30);
            image(this.s3, pointA.x, pointA.y)
            }
        }
    }
    
}