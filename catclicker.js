var catImage = document.getElementById('pisica');


function getCurrentNrOfClicks() {
  return Number.parseInt($("#clicks").text());
}

function listenToCat () {
  let x = getCurrentNrOfClicks();
  x = x + 1;
  $('#clicks').text(x)
}

catImage.addEventListener('click', listenToCat);
