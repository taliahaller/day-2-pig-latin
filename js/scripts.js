// Business Logic

var vowels = ["a", "e", "i", "o", "u"];
var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z'];

var translated = 0;



// User Interface Logic


$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    event.preventDefault();

    var userOriginal = $("input#userInput").val();
    var vowels = ["a", "e", "i", "o", "u"];
    var userInside = userOriginal.slice(0,1);

      for (var i = 0; i < vowels.length; i++) {
      if (userInside === vowels[i]) {
        console.log(vowels[i]);
        console.log(userInside);
        var result = userOriginal + "way";
         console.log(result);
       $(".translated").text(result);
       break;
     } else {userInside === vowels[i]

       // consonant use case
       // $(".translated").text(userInside);
     }
    }
  });
});
