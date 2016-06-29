//Question #2

var counter = 1;
var countdown = setInterval(function(){
  if(counter>= 10){
    clearInterval(countdown);
  }

  console.log(counter);
  counter += 7;
  ++counter;
  counter++;

}, 50);

