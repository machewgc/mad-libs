$(document).ready(function() {
  $("form#words").submit(function(event) {

    var words = ["animal","name","object"];

    words.forEach(function(word) {
      var userInput = $("input#" + word).val();
      $("." + word).text(userInput);
    });

    $("#mad-lib").show();
    event.preventDefault();
  });
});
