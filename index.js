let input = [2,3,8,7]
let target = 10

const twoSums = (inputArray, target) => {
  for (let i = 0; i < inputArray.length; i++) {
    let reducedTarget = target - inputArray[i]
    for (let j = 0; j < inputArray.length; j++) {
      if (j === i) continue
      if (reducedTarget - inputArray[j] === 0) {
        return [inputArray[i],inputArray[j]]
      }
    }
  }
  return 'no result'
}

console.log(input, target);