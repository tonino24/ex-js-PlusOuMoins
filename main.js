var Game = function(max) {
  this.answer = Math.floor(Math.random() * max);
  this.test = function(guess) {
    if (guess > this.answer) {
      return "c'est moins...";
    } else if (guess < this.answer) {
      return "c'est plus...";
    } else {
      return "t'as gagné mec !!!";
    }
  }
}


$(document).ready(function() {
  var g = new Game(10);
  $('input').keypress(function(e) {
    if (e.which === 13) {
      var capture = $('input').val();
      $('ul').append('<li>' + g.test(capture) + '</li>');
    }
  });
})
