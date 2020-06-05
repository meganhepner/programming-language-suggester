//User Logic
$(document).ready(function() {
  $("form#ProgramLanguage").submit(function(event) {
    event.preventDefault();
    const favBeverage =  $("input:radio[name=beverage]:checked").val();
    const favMusic =  $("input:radio[name=music]:checked").val();
    const favOutdoor =  $("input:radio[name=outdoor]:checked").val();
    const favFood =  $("input:radio[name=food]:checked").val();
    const favAnimal =  $("input:radio[name=food]:checked").val();

    if()
      if(!!favBeverage === true && !!favMusic === true && !!favOutdoor === true && favFood === "sushi" && !!favAnimal === true){
        $('#python').show();
      } else if(!!favBeverage === true && !!favMusic === true && !!favOutdoor === true && favFood === "tartare" && !!favAnimal === true){
        $('#javascript').show();
      } else if(!!favBeverage === true && !!favMusic === true && !!favOutdoor === true && favFood === "foie" && !!favAnimal === true){
        $('#COBOL').show();
      } else if(!!favBeverage === true && !!favMusic === true && !!favOutdoor === true && favFood === "truffles" && !!favAnimal === true){
        $('#RUBY').show();
      }
  
  });
});


