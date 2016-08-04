var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var op = $('#operator :selected').val();
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

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email-entry').val();
    $('#signup').hide();
    $('#email-display').append('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});
