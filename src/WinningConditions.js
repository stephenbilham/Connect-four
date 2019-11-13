
let row = [7,8,9,10,11,12,13]
let column = [0,7,14,21,28,35] 
let diag = [5,11,17,23,29,35]
let simpFirstRow = [0,6,1]

findWinningCondition = (input) => {
  let emptyArr = []
  let difference = input[1] - input[0]
  for(i = 0; i < input.length -3; i++) { 
    let newArr = [input[i], input[i] + 1 * difference, input[i] + 2 * difference, input[i] + 3 * difference]
    emptyArr.push(newArr)
  }
  return emptyArr
 }
 console.log(findWinningCondition(diag))