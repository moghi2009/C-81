var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var circle1_color = "blue";
var circle2_color = "yellow";
var circle3_color = "black";
var circle4_color = "green";
var circle5_color = "red";

ctx.beginPath();
ctx.strokeStyle = circle1_color;
ctx.lineWidth = 8;
ctx.arc(290, 280, 90, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = circle2_color;
ctx.lineWidth = 8;
ctx.arc(390, 380, 90, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = circle3_color;
ctx.lineWidth = 8;
ctx.arc(490, 280, 90, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = circle4_color;
ctx.lineWidth = 8;
ctx.arc(590, 380, 90, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = circle5_color;
ctx.lineWidth = 8;
ctx.arc(690, 280, 90, 0, 2*Math.PI);
ctx.stroke();