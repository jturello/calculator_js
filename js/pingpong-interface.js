var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var op = $('#operator :selected').val()
    // parseInt($('#operator :selected').val());

    console.log("num1, num2, op: " + num1, num2, op);

    var simpleCalculator = new Calculator("hot pink");
    var result = simpleCalculator.calculate(num1, num2, op);
    var output = simpleCalculator.pingPong(result);
    output.forEach(function(element) {
      $('ul#solution').prepend("<li>" + element + "</li>");
    });
  });
});
