const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {

  let winResult = record.find(r => r.result === "W")

  if (winResult) {
    return winResult.year;
  }
  else {
    return undefined
  }
}