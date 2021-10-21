$(document).ready(function() {
  $("#radio").submit(function(event) {
    console.log("Script executing!");
    event.preventDefault();
    const animalChoice = $("input:radio[name=animal]:checked").val();
    $("#lionfacts").show();
  });
});