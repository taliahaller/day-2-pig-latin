// Business Logic

var vowels = ["a", "e", "i", "o", "u"];
var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z'];

var translated = 0;



// User Interface Logic


$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    event.preventDefault();

    var userOriginal = $("input#userInput").val().toLowerCase();
    userOriginal = userOriginal.split(" ");
    // console.log(userOriginal);
    // var vowels = ["a", "e", "i", "o", "u"];
    var pigLatin = [];

    for(var j = 0; j < userOriginal.length; j++) {
      var word = userOriginal[j];
      var letter = word.slice(0,1);

      loop2:
        for (var i = 0; i < vowels.length; i++) {
        if (letter === vowels[i]) {
        var resultVowel = word + "way";
             pigLatin.push(resultVowel);
              console.log(pigLatin);
                  // break loop2;
          } else {
            var resultConsonant = word + "ay";
         pigLatin.push(resultConsonant);
       }
         console.log(pigLatin);
     $(".translated").text(pigLatin.join(" "));
      }
     }
   });
 });
