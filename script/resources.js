var canvas = {
  height : document.getElementById('game').height,
  width : document.getElementById('game').width,
  ctx : function () {
    return document.getElementById('game').getContext("2d");
  },
  scale_value : 1.6
}
var player = new Car(canvas.ctx(),"./images/car.png",150,200);
var obstacle = new Obstacle(canvas.ctx());
var game = {
  over : false,
  start : false
}
