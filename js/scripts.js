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

    if (result === javascript){
      alert("yay")
      // ("#python").show();
    }
  
  });
});

//Business Logic
function yourLanguage(favBeverage, favMusic, favOutdoor, favFood, favAnimal) {
  if(!!favBeverage === true && !!favMusic === true && !!favOutdoor === true && favFood === "sushi" && !!favAnimal === true){
    result = python;
  } else if(!!favBeverage === true && !!favMusic === true && !!favOutdoor === true && favFood === "tartare" && !!favAnimal === true){
    result = javascript;
  } else if(!!favBeverage === true && !!favMusic === true && !!favOutdoor === true && favFood === "foie" && !!favAnimal === true){
    result = COBOL;
  } else if(!!favBeverage === true && !!favMusic === true && !!favOutdoor === true && favFood === "truffles" && !!favAnimal === true){
    result = Ruby;
  } 
  return result;
}