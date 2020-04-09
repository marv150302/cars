var Obstacle = function (ctx) {
  this.x = [];
  this.y = [];
  this.ctx = ctx;
  this._url = [];
  this.speed = 2;
  this.bound_x = [0+100,490];
  this.width = [];
  this.height = [];
  this.difficulty = 500;
}
Obstacle.prototype.draw = function () {
  this._url.forEach((_url, i) => {
    this.ctx.drawImage(resources.get(_url),this.x[i],this.y[i]);
  });
}
Obstacle.prototype.update = function () {
  this.y.forEach((item, i) => {
    this.y[i] += this.speed;
  });
}
Obstacle.prototype.getRandom = function (max,min) {
  return Math.floor(Math.random()*max)+min
}
Obstacle.prototype.random = function () {
  var type = this.getRandom(this.difficulty,0);
  switch (type) {
    case 0:
            this.x.push(this.getRandom(this.bound_x[1],this.bound_x[0]))
            this.y.push(-100);
            this._url.push("./images/diamond.png");
            this.width.push(55);
            this.height.push(38);
      break;
    case 1:
            this.x.push(this.getRandom(this.bound_x[1],this.bound_x[0]))
            this.y.push(-100);
            this._url.push("./images/purple_rock.png");
            this.width.push(53);
            this.height.push(46);
      break;
    case 2:
            this.x.push(this.getRandom(this.bound_x[1],this.bound_x[0]))
            this.y.push(-100);
            this._url.push("./images/box.png");
            this.width.push(41);
            this.height.push(38);
      break;
    case 3:
            this.x.push(this.getRandom(this.bound_x[1],this.bound_x[0]))
            this.y.push(-100);
            this._url.push("./images/cone.png");
            this.width.push(41);
            this.height.push(45);
      break;
    case 4:
            this.x.push(this.getRandom(this.bound_x[1],this.bound_x[0]))
            this.y.push(-100);
            this._url.push("./images/tire.png",);
            this.width.push(41);
            this.height.push(31);
      break;
    case 5:
            this.x.push(this.getRandom(this.bound_x[1],this.bound_x[0]))
            this.y.push(-100);
            this._url.push("./images/bin.png",);
            this.width.push(41);
            this.height.push(48);
      break;
    default:

  }
}
Obstacle.prototype.delete = function () {
  this.y.forEach((item, i) => {
    if (item + this.width  > 600) {
      this.y.splice(i,1);
      this.x.splice(i,1);
      this._url.splice(i,1);
      this.width.splice(i,1);
      this.height.splice(i,1);
    }
  });
}
Obstacle.prototype.collision = function (x,y,width,height) {
  this.y.forEach((item, i) => {
    if (x < this.x[i] + this.width[i] && x + width > this.x[i] && y < this.y[i] + this.height[i] && y + height > this.y[i]) {
      game.over = true;
    }
  });

}
