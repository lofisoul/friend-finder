var scores = [];
var formSelects = $('select.form-control');
var formInputs = $('input.form-control');
var submit = $('#submit');

function formValidate() {
  var isValid = true;

  $(formSelects).each(function(){
    if($(this).val() === '') {
      isValid = false;
    }
  });

  $(formInputs).each(function(){
    if($(this).val() === '') {
      isValid = false;
    }
  });
  return isValid;
}

function modalPop(title, header, info, image) {
  $('.modal-title').text(title);
  $('.modal-header').text(header);
  $('.match-info').text(info);
  $('.match-img').attr('src', image);
  $('#resultsModal').modal('show');
}

$(submit).on('click',function(e) {
  e.preventDefault();

  // check if form valid
  if (formValidate()) {
    //generate scores array
    $('select.form-control').each(function() {
      scores.push($(this).val());
      return scores;
    });
    var name = $('input#name').val();
    var photo = $('input#photo').val();

    //generate user
    var user = {
      name: name,
      photo: photo,
      score: scores
    }

    var currentURL = window.location.origin;

    $.post(currentURL+"/api/friends", user, function(data){
              modalPop("Best Match", data.name, "", data.photo);
          });
    }

  else {
    modalPop("Whoops!", "You missed something", "Please answer all questions and check your inputs");
    }
  console.log(user);
});
