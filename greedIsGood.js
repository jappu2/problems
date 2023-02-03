function score( dice ) {
  
  let score = 0
  let ones = dice.filter(e => e==1).length
  let fives = dice.filter(e => e==5).length
  
  if (ones >= 3) {
    score += 1000
    ones -= 3
  }
  if (ones) {
    score += 100 * ones
    ones = 0
  }
    if (fives >= 3) {
    score += 500
    fives -= 3
  }
  if (fives) {
    score += 50 * fives
    fives = 0
  }
  
  for (let i = 2; i <= 6; i++){
    let current = dice.filter(e => e == i).length
    if (current >= 3) {
      score += 100 * i
      current -= 3
    }
    if (current >= 3) {
      score += 100 * i
      current -= 3
    }
  }
  
  return score
}

score( [2, 3, 4, 6, 2] ) // Should be 0 
score( [4, 4, 4, 3, 3] ) //Should be 400
score( [2, 4, 4, 5, 4] ) //Should be 450
