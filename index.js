const testVar = [
  { year: "2018", result: "N/A"},
  { year: "2017", result: "N/A"},
  { year: "2016", result: "N/A"}
]

function testFunc() {
  return "hi"
}
function superbowlWin (record) {
  let row = record.find(function(row) { return row["result"]==="W"})
 if (row === undefined)
  return undefined
  else {
    return row["year"]
  }

}
