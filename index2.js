var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");//all work done this methode

ctx.strokeStyle = "black";
ctx.strokeRect(10,10,380,280);


ctx.fillStyle = "green";
ctx.fillRect(12,12,376,276); //x,y,width,height

var centerx = c.width / 2;
var centery = c.height / 2;

ctx.beginPath();
ctx.arc(centerx,centery,60,0,2*Math.PI,false);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();
