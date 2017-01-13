$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var workplace= $("input:radio[name=workplace]:checked").val();
    if (workplace==="startup") {
      $(".question1").hide();
      $(".question2").show();
      $("form#quiz").submit(function(event) {
        event.preventDefault();
        var rubyvsphp= $("input:radio[name=rubyvsphp]:checked").val();
        if (rubyvsphp) {
          $(".language").text(rubyvsphp);
          $("form#quiz").hide();
          $("form#results").show();
        }
      });
    } else if (workplace=="company") {
      $(".question1").hide();
      $(".question3").show();
    }

  });
  $("form#results").submit(function(event) {
    event.preventDefault();
    var name= $("input#name").val();
    var email= $("input#email").val();
    $(".name").text(name);
    $(".email").text(email);
    $("form#results").hide();
    $(".alert.alert-success").show();
  });

});
