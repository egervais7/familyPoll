$(document).ready(function() {
  console.log("ready");
  var count13 = 0;
  var count20 = 0;
  var noShow = 0;
  var clicks = 0;

  var countMar13 = function() {
    $(".countMar13").on("click", function(){
      count13++;
      clicks++;
      if (clicks < 2) {
        $("#mar13Count").html(count13);
      }
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
    });
  };

  noShowFunc();

});
