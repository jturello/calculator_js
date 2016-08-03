$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email-entry').val();
    $('#signup').hide();
    $('#email-display').append('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
