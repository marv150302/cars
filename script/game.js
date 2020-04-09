function start() {
  $("div").hide()
  game.start = true;
  player.name = $("#start input").val();
  switch ($("#start option:selected" ).text()) {
    case "Easy":
                obstacle.difficulty = 500;
      break;
    case "Hard":
                obstacle.difficulty = 300;
      break;
    case "Dye":
                obstacle.difficulty = 100;
      break;
    default:

  }
}
