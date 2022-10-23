var ball = prompt("what is your score from math exam?");
if (ball >= 0 && ball <54){
  alert("you cannot pass the exam")
} else if(ball >=54 && ball<71){
  alert("you get 3")
} else if(ball >=72 && ball<81){
  alert("you get 4")
} else if(ball>=82 && ball<100){
  alert("you won you get 5")
} else{
  alert("you did notwrite correctly.")
}
