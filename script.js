var COUNTDOWN_DATE = new Date("mar 9, 2024 00:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = COUNTDOWN_DATE - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("DAYS").innerHTML = days;
  document.getElementById("HOURS").innerHTML = hours;
  document.getElementById("MINUTES").innerHTML = minutes;
  document.getElementById("SECONDS").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("DAYS").innerHTML = 0;
    document.getElementById("HOURS").innerHTML = 0;
    document.getElementById("MINUTES").innerHTML = 0;
    document.getElementById("SECONDS").innerHTML = 0;
  }
}, 1000);
 