function main() {
  var loop = requestAnimationFrame(main)
  if (game.start) {
    player.draw()
    player.update()
    player.move()
    player.bounds()
    obstacle.draw()
    obstacle.random()
    obstacle.update()
    obstacle.delete()
    obstacle.collision(player.x,player.y,player.width,player.height)
  }
  game.over ? cancelAnimationFrame(loop) : false
  game.over ? location.reload() : false
}
