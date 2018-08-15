// Business Logic

var vowels = ["a", "e", "i", "o", "u"];
var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z'];

var translated = 0;




// User Interface Logic


$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    event.preventDefault();

    var userInside = $("input#userInput").val();
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < vowels.length; i++) {
      if (userInside === vowels[i]) {
        console.log(vowels[i]);
        console.log(userInside);
        var result = userInside + "way";
         console.log(result);
       $(".translated").text(result);
       break;
     } else {
       alert("Not ready for consonants!");
       // consonant use case
       // $(".translated").text(userInside);
     }
    }
  });
});

// //for (i = 0; i < userInside.length; i++) {
//     for (j = 0;, j < vowels.length; j++) {
//          if (userInside === vowels[j]) {


//     }
// }





//     for (var i = 0; i < vowels.length; i++) {
//        var vowel = vowels[i];
//       var translate = [vowel];
//       translated.push(translate);
//
//        var userInput = $("input#userInput").val();
//        var result = userInput + "way";
//
//     if (userInput === translated) {
//       $(".translated").text(result);
//     } else {
//       $(".translated").text(userInput);
//     }
// };
// });
// });



// $(document).ready(function() {
//   $("#pig-latin").submit(function(event) {
//     event.preventDefault();
//     // var userInput = $("input#userInput").val();
//
//     for (var i = 0; i < vowels.length; i++) {
//        var vowel = vowels[i];
//       var translate = [vowel];
//       translated.push(translate);
//
//        var userInput = $("input#userInput").val();
//        var result = userInput + "way";
//
//     if (userInput === translated) {
//       $(".translated").text(result);
//     } else {
//       $(".translated").text(userInput);
//     }
// };
// });
// });
