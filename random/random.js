
var elTitle = document.querySelector("h1.title");
var elKnopka = document.querySelector("button.button");
var elDiv = document.querySelector("div.content");
var elInput = document.querySelector("input.input")
var elForm = document.querySelector("form");


var mathRandomNum = Math.floor(Math.random() * 100);
var trycount =0;
console.log(mathRandomNum);

elKnopka.addEventListener("click", function() {
  trycount++;
   var number = parseInt(elInput.value);
  
   if(number || number===0) {
    elInput.value = " ";
    elInput.focus();
    if ( number < mathRandomNum ){
      alert ("siz kichik son o'yladingiz");
    } else if (number > mathRandomNum) {
      alert ("siz kattaroq son o'yladingiz");
    } else  {
      alert(" ❤️❤️ siz men o'ylagan " + mathRandomNum + " sonni o'yladingiz" + " siz " +trycount + "  ta urinishda topdiz 👍👍👍");
    }
   }
})










































// / var randompr = prompt("what do you think?");
// // randompr = math.random *100;
// // math.floor(math.random * 100);
// // if (randompr < math.random) {
// //   alert("kichik son oyladingiz")
// // } else if (randompr > math.random) {
// //   alert("katta son o'yladingiz")
// // } else if (randompr = math.random) {
// //   alert("yutdingiz")
// // }

