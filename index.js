const testVar = {}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  record.find( function(record) {
    console.log(record);
    if(record.result === "W") {
      return record.year
    } else { 
      return undefined 
    } 
  })
}