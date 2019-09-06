const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array) {
  let winYear = array.find(function(array) {return array.result === "W"})
  return winYear === undefined ? undefined : winYear.year
}