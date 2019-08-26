function superbowlWin(recordArray) {
  const winningRecord = recordArray.find(recordObj => {
    return recordObj.result === 'W'
  })
  if (winningRecord) {
    return winningRecord.year;
  }
}