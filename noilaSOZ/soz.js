var random_number = Math.floor(Math.random() * 100);

var span_trycount = document.getElementById('span_trycount');
var span_level = document.getElementById('span_level');
var input_number =document.getElementById('input_number');
var button_check = document.getElementById('button_check');

var user_number = null;
var tryCount= 0;
var level = 1;
console.log('tasodifiy son = ' + random_number);
input_number.focus();
input_number.onkeydown = function(e) {
  if (e.keyCode == 13) {
    button_check.click();
  }
};
button_check.addEventListener('click', (e)=>{
  user_number = input_number.value;
  if (user_number == " ") {
    alert('biron son kiriting');
    input_number.focus( );
  } else if (user_number = random_number) {
    tryCount++;
    span_trycount.innerHTML = tryCount; 
    if (confirm(`siz tasodifiy sonni ${tryCount} topdingiz!`)) {
      tryCount = 0;
      level++;
      var span_level = document.getElementById('span_level');
      span_trycount.innerHTML = tryCount;
      span_level.innerHTML = level;
      random_number = Math.floor(Math.random() * 100);
      console.log('tasodifiy random number = ' + random_number);
    }

  } else if (user_number> random_number){
    alert(`tasodifiy number ${user_number} dan katta`);
    input_number.value = " ";
    tryCount++;
    span_trycount.innerHTML = tryCount; 
    input_number.focus();
  } 
})

