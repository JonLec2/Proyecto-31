var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //crea los objetos para dividir
  for (var k = 0; k <=800; k = k + 100) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //crea la primera fila de objetos plinko
  for (var j = 30; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //crea la segunda fila de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //crea la tercera fila de objetos plinko
for(var j= 25; j<width-20; j=j+50){
  plinkos.push(new Plinko(j, 275))
}
  
  //crea la cuarta fila de objetos plinko

  for(var j=15; j<width-30;j=j+50){
    plinkos.push(new Plinko(j, 375))
  }

  //fila extra
  for(var j=20; j<width-20;j=j+105){
    plinkos.push(new Plinko(j, 125))
  }

  for(var j=20; j<width-20;j=j+105){
    plinkos.push(new Plinko(j, 325))
  }


  //pared
for(var j=2; j<width+5; j=j+790){
 divisions.push(new Divisions(j, 225,5, 450 ))
}

 
 
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  if(frameCount % 90 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10))
 
  }

  //muestra los plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //muestra las divisiones
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //muestra las partículas 
  for (var m = 0; m < particles.length; m++) {
   particles[m].display();   
  }
}
