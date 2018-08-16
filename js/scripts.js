// Business Logic

// var vowels = ["a", "e", "i", "o", "u"];
// var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z'];
//
// var translated = 0;



// User Interface Logic


$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    event.preventDefault();

    var userOriginal = $("input#userInput").val().toLowerCase();
    var plainSentence = userOriginal.split(" ");
    var pigLatin = [];

 for (var i = 0; i < plainSentence.length; i++) {
   var checkWord = plainSentence[i];

   if (/[^a-z'].*/i.test(checkWord)) {

  loop1:
     for (var k = 0; k < checkWord.length; k++) {
       if (/.*[!,.]$/m.test(checkWord.charAt(k))) {
         var beforePunctuation = checkWord.slice(0, k);
         var afterPunctuation = checkWord.slice(k);
         var pigTransform = beforePunctuation + "way" + afterPunctuation;
         pigLatin.push(pigTransform);
         console.log(beforePunctuation);
         console.log(afterPunctuation);
         break loop1;
       } else {
         console.log(checkWord);
         pigLatin.push(checkWord);
         break loop1;
       }
     }


     // pigLatin.push(checkWord);
   } else if (/^[aeiouy].*/i.test(checkWord)) {
      var pigTransform = checkWord + "way";
      pigLatin.push(pigTransform);

   } else {

     loop2:

     for (var j = 0; j < checkWord.length; j++) {
       if (/[aeiouy]+/i.test(checkWord.charAt(j))) {
         if ((checkWord.charAt(j) == "u") && (checkWord.charAt(j-1) == "q")) {
           var beforeVowel = checkWord.slice(0, j+1);
           var afterVowel = checkWord.slice(j+1);
           var pigTransform = afterVowel + beforeVowel + "ay";
           pigLatin.push(pigTransform);
           break loop2;
         } else {
           var beforeVowel = checkWord.slice(0, j);
           var afterVowel = checkWord.slice(j);
           var pigTransform = afterVowel + beforeVowel + "ay";
           pigLatin.push(pigTransform);
           break loop2;
         }
       }
     }
    }
   }

   pigLatin = pigLatin.join(" ");
        pigLatin = pigLatin.toLowerCase();
        pigLatin = pigLatin.replace(/^\w/, function (cap) {
          return cap.toUpperCase();
        });

$(".translated").text(pigLatin);

  });
});
