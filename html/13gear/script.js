const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let gear = new Image();
gear.rot = 0;
gear.src = "gear.png";

let gear2 = new Image();
gear2.rot2 = 1,3;
gear2.src = "gear.png";

let gear3 = new Image();
gear3.rot3 = 2;
gear3.src = "gear2.png";

let gear4 = new Image();
gear4.rot4 = 1.25;
gear4.src = "gear3.png";



gear.addEventListener('load',()=>{
animate();
})


function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  context.save();
  context.translate(50,50);
  context.rotate(gear.rot);
  context.drawImage(gear,-gear.width/2,-gear.height/2);
  context.restore();

  context.save();
  context.translate(976,150);
  context.rotate(gear3.rot3);
  context.drawImage(gear3,-gear3.width/2,-gear3.height/2);
  context.restore();

  context.save();
  context.translate(590,150);
  context.rotate(gear2.rot2);
  context.drawImage(gear2,-gear2.width/2,-gear2.height/2);
  context.restore();

  context.save();
  context.translate(1200,673);
  context.rotate(gear4.rot4);
  context.drawImage(gear4,-gear4.width/2,-gear4.height/2);
  context.restore();


  gear.rot += 0.01;
  gear2.rot2 -= 0.01;
  gear3.rot3 += 26*0.01/12;
  gear4.rot4 -= 21*(26*0.01/12)/22;
}
