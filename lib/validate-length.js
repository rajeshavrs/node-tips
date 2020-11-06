const validateInput = function(inputMsg) {
  try {
    for(i = 0; i < inputMsg.length; i++) {
      // console.log(inputMsg[i].length)
      if(inputMsg[i].length === 16) {
        throw new Error('16-digit account numbers are not supported')
      }
    }
  }catch {
    console.log(e)
  }
}

validateInput(['1', '2', '1234123412341234'])