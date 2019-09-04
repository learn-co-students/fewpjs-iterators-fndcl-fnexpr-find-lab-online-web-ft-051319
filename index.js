const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]



function superbowlWin(record) {
  const victory = record.find(function(recordResult) { return recordResult.result === "W"})
  if(victory){
    return victory.year
  } else {
    return undefined 
  } 
}