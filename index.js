function superbowlWin(array){
  let object = array.find(function(e) {return e.result==="W"})
  return object ? object.year : object
}
