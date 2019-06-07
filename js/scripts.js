$(document).ready(function () {
  $('.formOne').submit(function (event) {
    event.preventDefault();
    var choiceOne = $('#questionOne').val();
    if (choiceOne === '0') {
      $('.formChoice').show();
      $('#languageZero').show();
      $('.formTwo').hide();
    } else if (choiceOne === '1') {
      $('.formChoice').hide();
      $('#languageZero').hide();
      $('.formTwo').show();
    }
  });

  $('.formTwo').submit(function (event) {
    event.preventDefault();
    var choiceTwo = $('#questionTwo').val();
    if (choiceTwo === '0') {
      $('.formChoice').show();
      $('#languageOne').show();
    } else if (choiceTwo === '1') {
      $('.formChoice').hide();
      $('#languageOne').hide();
      $('.formThree').show();
    }
  });

  $('.formThree').submit(function (event) {
    event.preventDefault();
    var choiceThree = $('#questionThree').val();
    if (choiceThree === '0') {
      $('.formChoice').show();
      $('#languageThree').show();
    } else if (choiceThree === '1') {
      $('#languageThree').hide();
      $('.formChoice').show();
      $('#languageFour').show();
    } else if (choiceThree === '2') {
      $('.formChoice').hide();
      $('#languageThree').hide();
      $('#languageFour').hide();
      $('.formFour').show();
    }
  });

  $('.formFour').submit(function (event) {
    event.preventDefault();
    var choiceFour = $('#questionFour').val();
    if (choiceFour === '0') {
      $('.formChoice').show();
      $('#languageThree').show();
    } else if (choiceFour === '1') {
      $('.formChoice').show();
      $('#languageThree').hide();
      $('#languageFour').show();
    } else if (choiceFour === '2') {
      $('.formChoice').show();
      $('#languageThree').hide();
      $('#languageFour').hide();
      $('#languageFive').show();
    } else if (choiceFour === '3') {
      $('.formChoice').hide();
      $('#languageThree').hide();
      $('#languageFour').hide();
      $('#languageFive').hide();
      $('.formFive').show();
    }
  });

  $('.formFive').submit(function (event) {
    event.preventDefault();
    var choiceFive = $('#questionFive').val();
    if (choiceFive === '0') {
      $('#languageFive').hide();
      $('.formChoice').show();
      $('#languageTwo').show();
    } else if (choiceFive === '1') {
      $('#languageTwo').hide();
      $('.formChoice').show();
      $('#languageFive').show();
    }
  });

  event.preventDefault();
});
