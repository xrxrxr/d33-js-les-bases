var stageNumber = prompt("salut petit coquinou combien d'etages veux-tu ?")
console.log("voici ta pyramide")

function marioPyramid(stageNumber) {
  let stars = "*"
  while (stageNumber > 0) {
    let emptiness = ""
    let stageNumberLine = stageNumber - 1
    while (stageNumberLine > 0) {
      emptiness += " "
      stageNumberLine -= 1
    }
    console.log(emptiness + stars)
    stars += "*"
    stageNumber -= 1
  }
}
console.log(marioPyramid(stageNumber));
