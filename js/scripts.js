$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var workplace= $("input:radio[name=workplace]:checked").val();
    //Path towards Ruby or PHP.
    if (workplace==="startup") {
      $(".question1").hide();
      $(".question2").show();
      $("form#quiz").submit(function(event) {
        event.preventDefault();
        var rubyvsphp= $("input:radio[name=rubyvsphp]:checked").val();
        if (rubyvsphp) {
          $(".question2").hide();
          $(".lastquestion").show();
          $("form#quiz").submit(function(event) {
            event.preventDefault();
            var all =$("input:radio[name=all]:checked").val();
            if (all!= "none" && rubyvsphp!=all) {
              $(".language2").text(all);
              $(".language").text(rubyvsphp);
              $("form#quiz").hide();
              $("p.maybe").show();
              $("form#results").show();
            }else {
              $(".language").text(rubyvsphp);
              $("form#quiz").hide();
              $("form#results").show();
            }
          });
        }
      });
    //Path towards c#, java or PHP
    } else if (workplace=="company") {
      $(".question1").hide();
      $(".question2b").show();
      $("form#quiz").submit(function(event) {
        event.preventDefault();
        var cjavaphp= $("input:radio[name=cjavaphp]:checked").val();
        if (cjavaphp==="PHP") {
          $(".question2b").hide();
          $(".lastquestion").show();
          $("form#quiz").submit(function(event) {
            event.preventDefault();
            var all =$("input:radio[name=all]:checked").val();
            if (all!= "none" && cjavaphp!=all) {
              $(".language2").text(all);
              $(".language").text(cjavaphp);
              $("form#quiz").hide();
              $("p.maybe").show();
              $("form#results").show();
            }else {
              $(".language").text(cjavaphp);
              $("form#quiz").hide();
              $("form#results").show();
            }
          });
      //Path towards C# or Java
        }else if (cjavaphp==="cjava") {
          $(".question2b").hide();
          $(".question3").show();
          $("form#quiz").submit(function(event) {
            var cjava= $("input:radio[name=cjava]:checked").val();
            if (cjava) {
              $(".question3").hide();
              $(".lastquestion").show();
              $("form#quiz").submit(function(event) {
                event.preventDefault();
                var all =$("input:radio[name=all]:checked").val();
                if (all!= "none" && cjava!=all) {
                  $(".language2").text(all);
                  $(".language").text(cjava);
                  $("form#quiz").hide();
                  $("p.maybe").show();
                  $("form#results").show();
                }else {
                  $(".language").text(cjava);
                  $("form#quiz").hide();
                  $("form#results").show();
                }
              });

            }
          });
        }
      });
    }
  });


  $("form#results").submit(function(event) {
    event.preventDefault();
    var name= $("input#name").val();
    var email= $("input#email").val();
    if (name && email) {
      $(".name").text(name);
      $(".email").text(email);
      $("form#results").hide();
      $(".alert.alert-success").slideDown("slow");
    } else {
      alert("You need to fill out both fields.")
    }
  });
});
