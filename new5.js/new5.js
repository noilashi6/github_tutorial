var elComputerAnswer = document.querySelector("h1.computer_answer");
var elButtonUpper = document.querySelector("button.bigger");
var elButtonLower = document.querySelector("button.lower");

var elDone = document.querySelector("button.done");

 var lower = 100;
 var upper = 150;

 var status = "";

var computer_choice = (lower + upper) / 2;
function taxminqil() {
 // var computer_choice = (lower + upper) / 2;

  elComputerAnswer.textContent = `you think a number: ${computer_choice}`;
}
 elDone.addEventListener("click", function(e) {
  status= "done";
  tekshir(status);
 })
elButtonLower.addEventListener("click", function(e) {
  status="lower";
  tekshir(status);
})
elButtonUpper.addEventListener("click", function(e) {
  status= "bigger";
  tekshir(status);
});
function tekshir(status) {
  switch (status) {
    case "bigger":
      lower = computer_choice;
      taxminqil();
      break;
    case "lower":
    
      upper = computer_choice;
      taxminqil();
      
      break;
  
    default:
      alert("i found")  //done
      break;
  }
}