const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
    let newArray = array.find(s => s.result === "W");
    return newArray === undefined ? newArray : newArray.year;
}
