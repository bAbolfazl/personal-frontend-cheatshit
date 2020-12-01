var specifiedElement = document.getElementById('a');

//I'm using "click" but it works with any event
document.addEventListener('click', function(event) {
  var isClickInside = specifiedElement.contains(event.target);

  if (!isClickInside) {
    //the click was outside the specifiedElement, do something
  }
});