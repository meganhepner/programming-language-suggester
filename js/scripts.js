//User Logic
$(document).ready(function() {
  $("form#ProgramLanguage").submit(function(event) {
    event.preventDefault();
    const favBeverage =  $("input:radio[name=beverage]:checked").val();
    const favMusic =  $("input:radio[name=music]:checked").val();
    const favOutdoor =  $("input:radio[name=outdoor]:checked").val();
    const favFood =  $("input:radio[name=food]:checked").val();
    const favAnimal =  $("input:radio[name=animal]:checked").val();
    let result = yourLanguage(favBeverage, favMusic, favOutdoor, favFood, favAnimal);

  });
});

//Business Logic
function yourLanguage(favBeverage, favMusic, favOutdoor, favFood, favAnimal) {
    if()
}