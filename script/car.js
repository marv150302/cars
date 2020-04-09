var Car = function (ctx,_url,x,y) {
  this.ctx = ctx;
  this.x = x;
  this.y = y;
  this._url = _url;
  this.road_x1 = 0;
  this.road_y1 = 0;
  this.road_x2 = 0;
  this.road_y2 = -599;
  this.speed = 2;
  this.key = []
  this.car_speed = 5;
  this.width = 34;
  this.height = 56;
  this.bound_x = [0+100,490];

}
Car.prototype.draw = function () {
  this.ctx.clearRect(0,0,canvas.width,canvas.height);
  this.ctx.drawImage(resources.get("./images/road.png"),this.road_x1,this.road_y1);
  this.ctx.drawImage(resources.get("./images/road2.png"),this.road_x2,this.road_y2);
  this.ctx.drawImage(resources.get(this._url),this.x,this.y);
}
Car.prototype.update = function () {
  this.road_y1 += this.speed;
  this.road_y2 += this.speed;
  this.road_y1 > 599 ? this.road_y1=-599 : false
  this.road_y2 > 599 ? this.road_y2=-599 : false
}
Car.prototype.move = function () {
  this.key[39] ? player.x+=this.car_speed : false
  this.key[37] ? player.x-=this.car_speed : false
  this.key[38] ? player.y-=this.car_speed : false
  this.key[40] ? player.y+=this.car_speed : false
}
Car.prototype.bounds = function () {
  this.x <= this.bound_x[0] ? this.x=this.bound_x[0] : false
  this.x + this.width >= this.bound_x[1] ? this.x=this.bound_x[1]-this.width : false
}
