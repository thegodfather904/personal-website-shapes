$(function() {
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  canvas.width = 400;
  canvas.height = 400;
  document.body.appendChild(canvas);

  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "white";
  context.fillRect(300, 200, 10, 10);

  context.beginPath();
  context.arc(100, 200, 20, 0, Math.PI * 2, true);
  context.closePath();
  context.fill();

  var posX = 20;
  var posY = 100;

  var vx = 10;
  var vy = -10;
  var gravity = 1;

  setInterval(function(){
    // Erase canvas
    context.fillStyle = "black";
    context.fillRect(0,0,canvas.width, canvas.height);

    posX += vx;
    posY += vy;
    vy += gravity;
    // Draw a circle particle on the canvas
    context.beginPath();
    context.fillStyle = "white";
    // After setting the fill style, draw an arc on the canvas
    context.arc(posX, posY, 10, 0, Math.PI*2, true);
    context.closePath();
    context.fill();

  }, 30);

});
