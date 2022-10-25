var name = prompt("what is your name?")
if (name == "null"){
  alert("byeee")
} else if (name.length> 0){
  alert(name + ", welcome to our site")
} else{
  alert("byeee")
}


var elTitle = document.querySelector("h1.title");
var elKnopka = document.querySelector("button.button");
var elDiv = document.querySelector("div.content");
var cars = ["mm", "edd", "sss"]
elKnopka.addEventListener("click", function() {
  elDiv.innerHTML = cars.join("<br />")
})