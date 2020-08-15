$( document ).ready(function() {


  $(".close").hide();
  $(".open").show();


  $(".open").click(function() {

    $(".open").hide();
    $(".close").show();
    $(".dropdown").show();

  });


  $(".close").click(function() {

    $(".close").hide();
    $(".open").show();
    $(".dropdown").hide();

  });
  

});
