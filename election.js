document.addEventListener("DOMContentLoaded", function() {

  // Imagination!
  var unorderList = document.querySelector('#list')


  $.ajax({
    url:"https://bb-election-api.herokuapp.com/",
    method:"GET",
    dataType: "JSON"
  }).done(function(response) {
    console.log('You request was successful');
    console.log(response.candidates);
    for (var i = 0; i < response.candidates.length; i++) {
      response.candidates[i]

      var list = document.createElement('li');
      list.innerText = 'Name: ' + response.candidates[i].name + ' Votes: ' + response.candidates[i].votes

      unorderList.appendChild(list)
    
    }
  })

});
