var rainyButton = $('b1')
var sunnyButton = $('b2')
var warmButton = $('b3')
var coldButton = $('b4')
var cheerfulButton = $('b5')
var blueButton = $('b6')
var lazyButton = $('b7')
var adventurousButton = $('b8')
var formalButton = $('b9')
var casualButton = $('b10')
var workButton = $('b11')
var dateButton = $('b12')
var section = $('.container')

rainyButton.on("click", appendRainy);
function appendRainy() {
  event.preventDefault();
  section.append(`<p>ayo</p>`);
}

clear.on("click", clearButton)
  function clearButton(){
    section.remove();
  }
