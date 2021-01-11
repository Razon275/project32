class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visiblity=255;
  }
  display(){
    //console.log(this.body.speed);
    if(this.body.speed < 5){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity -5;
      tint(0,this.Visiblity);
      pop();
    }
};
//display(){
 // var pos =this.body.position;
 // rectMode(CENTER);
//  fill("blue");
 // rect(pos.x, pos.y, this.width, this.height);
//}
score(){

  if(this.Visiblity<0 && this.Visiblity>-105){
    score++;
    
  }
  
}
}