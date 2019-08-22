const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let record = array.find(record => record.result === "W");
  return record === undefined ? record : record.year;
};