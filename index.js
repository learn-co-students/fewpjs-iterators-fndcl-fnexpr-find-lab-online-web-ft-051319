const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let win = array.find(function(e) {return e.result === "W"})
  return win === undefined ? undefined : win.year
}