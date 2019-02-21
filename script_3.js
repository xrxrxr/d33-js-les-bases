function marioPyramid(){
  stageNumber = prompt('Combien de stages à la pyramides?')
  let stars = "*"
  while (stageNumber > 0){
    let emptiness = ""
    let stageNumberLine = stageNumber - 1
    while (stageNumberLine > 0){
      emptiness += " "
      stageNumberLine -= 1
    }
    console.log(emptiness + stars)
    stars += "*"
    stageNumber -= 1
  }
};

marioPyramid();
