const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let win = array.find(function(game) {return game.result === "W"})
  return win ? win.year : win
}
