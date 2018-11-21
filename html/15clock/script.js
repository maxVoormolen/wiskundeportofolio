const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



let midX = canvas.width/2;
let midY = canvas.height/2;

let clock = new Image();
clock.src = "clockFace.png";

let myTime = new Date();

let hoursHand = new Image();
hoursHand.src = "hoursHand.png";

let minutesHand = new Image();
minutesHand.src = "minutesHand.png";

let secondHand = new Image();
secondHand.src = "secondHand.png";



function animate(){
  myTime = new Date();



  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  //draw face
  context.drawImage(clock,midX-clock.width/2,midY-clock.height/2);

  //draw secondsHand
  context.save();
  context.translate(midX,midY);
  context.rotate(myTime.getSeconds()*2*Math.PI/60)
  context.drawImage(secondHand,-70,-233);
  context.restore();


  //draw minutesHand
  context.save();
  context.translate(midX,midY);
  context.rotate(myTime.getMinutes()*2*Math.PI/60)
  context.drawImage(minutesHand,-18,-178);
  context.restore();


  //draw hoursHand
  context.save();
  context.translate(midX,midY);
  context.rotate(myTime.getHours()*2*Math.PI/12)
  context.drawImage(hoursHand,-15,-121);
  context.restore();

}

animate();
