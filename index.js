const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
  let winner = arr.find(function(game){
     // console.log(game)
    return game.result === "W";
  })
  if(winner){
    return winner.year;
  }else{
    return winner;
  }

}
