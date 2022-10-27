var elTitle = document.querySelector("h1.title");
var elKnopka = document.querySelector("button.button");
var elDiv = document.querySelector("div.content");
var elInput = document.querySelector("input.input")
var elForm = document.querySelector("form");
var cars = [];
//  elForm.addEventListener("submit", function(e){
//    e.preventDefault()
//  })
// elKnopka.addEventListener("click", function() {
//   var inputText = elInput.value;

//   if (inputText) {
//     cars.unshift(inputText);
//     elDiv.innerHTML = cars.join("<br />");
//     elInput.value = " ";
//     elInput.focus();
//   }
 
// });



for(var i = 0; i < cars.length; i++) {
  // if(i ===7) {
  //   //continue;
  //   break;
  // }
     console.log(cars[i]);
}

elKnopka.addEventListener("click", function() {

  var text = elInput.value;
  if (text) {
    if(cars.indexOf(text) === -1){
      cars.unshift(text);
      elDiv.innerHTML = " ";
     for(i=0; i < cars.length; i++) {
       var newPElemt = document.createElement("p");
       newPElemt.classList.add("test");
       newPElemt.textContent = cars [i];
       elDiv.appendChild(newPElemt);
     } 
     

    } else {
      alert ("bu eleent qoshilgan")
    } 
    
  } else {
    alert("nimadir yozing");
    }
    
})