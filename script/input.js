document.addEventListener("keydown",function (e) {
  player.key[e.keyCode]=true;
  if(e.keyCode == 13){$('div.start button').click();}
})
document.addEventListener("keyup",function (e) {
  player.key[e.keyCode]=false;
})
