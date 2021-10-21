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
  
    if (animalChoice === "Lions") {
      // remove
      $('#lionfacts').show();
    } else if (animalChoice === "Tigers") {
      // remove
      $('#tigerfacts').show();
    } else {
      $('.animalfacts').remove();
        $('#bearfacts').show();
    }
  });
});