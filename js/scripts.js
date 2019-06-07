$(document).ready(function () {
  $('.formOne').submit(function (event) {
    event.preventDefault();
    var choice = $('#questionOne').val();
    if (choice === '0') {
      $('#languageOne').show();
    }

  });
});
