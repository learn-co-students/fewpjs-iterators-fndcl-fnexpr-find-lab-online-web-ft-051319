const testVar = {}

function testFunc() {
  return "hi"
}


// function superbowlWin(array) {
//   array.find(function(e) {
//     debugger
//     if(e.result === "W") {
//       return e.year
//     }
//   })
// }
function superbowlWin(array) {
  let winner =  array.find(function(e) {return e.result === "W" })
  return winner === undefined ? undefined : winner.year
}

// function superbowlWin(array) {
//   let winner =  array.find(function(e) {return e.result === "W" })
//   if (winner === undefined){
//     return undefined
//   }
//   else {
//     return winner.year
//   }
// }
