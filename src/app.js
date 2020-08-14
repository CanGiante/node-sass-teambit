//TO DO:

//dropdown
//hover vari

$( document ).ready(function() {
  $(".close").hide();
  $(".open").show();

  //per mostrare:
  $(".open").click(function() {

    $(".open").hide();
    $(".close").show();
    $(".dropdown").show();

  });

  //per chiudere:
  $(".close").click(function() {

    $(".close").hide();
    $(".open").show();
    $(".dropdown").hide();

  });

});
