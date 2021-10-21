function lion(animal)  {
  return animal + "#lionfacts";
}
function tiger(animal)  {
  return animal + "#tigerfacts";
}

function bear(animal)  {
  return animal + "#bearfacts";
}

$(document).ready(function() {
  $('form#animalForm').submit(function(event) {
    event.preventDefault();
    const animalChoice = $("input:radio[name=animal]:checked").val();
    console.log(animalChoice)     

    if (animalChoice === "Lions") {
      $('#lionfacts').show();
    } else if (animalChoice === "Tigers") {
      $('#tigerfacts').show();
    } else {
      $('#bearfacts').show();
    }
  });
});