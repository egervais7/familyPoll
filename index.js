$(document).ready(function() {
  console.log("ready");

  if (localStorage.voteCount13) {
    var count13 = JSON.parse(localStorage.getItem('voteCount13'));
    $("#mar13Count").html(count13);
  } else {
    var count13 = 0;
  }

  if (localStorage.voteCount20) {
    var count20 = JSON.parse(localStorage.getItem('voteCount20'));
    $("#mar20Count").html(count20);
  } else {
    var count20 = 0;
  }

  if (localStorage.voteCountNoShow) {
    var noShow = JSON.parse(localStorage.getItem('voteCountNoShow'));
    $("#noShowCount").html(noShow);
  } else {
    var noShow = 0;
  }

  var clicks = 0;

  var countMar13 = function() {
    $(".countMar13").on("click", function(){
      count13++;
      clicks++;
      if (clicks < 2) {
        $("#mar13Count").html(count13);
      }
      localStorage.setItem('voteCount13', JSON.stringify(count13));
    });
  };

  countMar13();

  var countMar20 = function() {
    $(".countMar20").on("click", function(){
      count20++;
      clicks++;
      if (clicks < 2) {
        $("#mar20Count").html(count20);
      }
      localStorage.setItem('voteCount20', JSON.stringify(count20));
    });
  };

  countMar20();

  var noShowFunc = function() {
    $(".noShowFunc").on("click", function(){
      noShow++;
      clicks++;
      if (clicks < 2) {
        $("#noShowCount").html(noShow);
      }
      localStorage.setItem('voteCountNoShow', JSON.stringify(noShow));
    });
  };

  noShowFunc();

});
