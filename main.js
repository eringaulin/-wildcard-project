var rainyButton = $('b1')
var sunnyButton = $('b2')
var warmButton = $('b3')
var coldButton = $('b4')
var cheerfulButton = $('b5')
var blueButton = $('b6')
var lazyButton = $('b7')
var adcenturousButton = $('b8')
var formalButton = $('b9')
var casualButton = $('b10')
var workButton = $('b11')
var dateButton = $('b12')

button.on("click", appendRainy);
function appendRainy() {
  event.preventDefault();
  container.append(`<p> ${name} </p>`);
}
