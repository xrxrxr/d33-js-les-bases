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

function marioPyramid2(){
  let array_testimonial = []
  stageNumber = prompt('Combien de stages pour cette deuxième pyramide?')
  let stars = "*"
  while (stageNumber > 0){
    let emptiness = ""
    let stageNumberLine = stageNumber - 1
    while (stageNumberLine > 0){
      emptiness += "."
      stageNumberLine -= 1
    }
    // console.log(emptiness + stars)
    line_by = emptiness + stars
    array_testimonial.push(line_by)
    stars += "*"
    stageNumber -= 1
  }
  return array_testimonial
};


var mario_party_pyramid = document.getElementById('mario_party_pyramid');
mario_party_pyramid.innerHTML = "Hey it's me Mario !"
marioPyramid2().forEach(function(element) {
   let line = document.createElement('div');
   line.innerHTML = element;
   mario_party_pyramid.appendChild(line);
});