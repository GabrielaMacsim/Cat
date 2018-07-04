var catImage1 = document.getElementById('pisica1');
var catImage2 = document.getElementById('pisica2');

function getCurrentNrOfClicks1() {
  return Number.parseInt($("#clicks1").text());
}
function getCurrentNrOfClicks2() {
  return Number.parseInt($("#clicks2").text());
}

function listenToCat1 () {
  let x = getCurrentNrOfClicks1();
  x = x + 1;
  $('#clicks1').text(x)
}
function listenToCat2 () {
  let y = getCurrentNrOfClicks2();
  y = y + 1;
  $('#clicks2').text(y)
}

catImage1.addEventListener('click', listenToCat1);
catImage2.addEventListener('click', listenToCat2);
