$(document).ready(function() {
  console.log("ready");
  var count13 = 0;
  var count20 = 0;
  var noShow = 0;

  var countMar13 = function() {
    count13++;
    document.getElementById("mar13Count").innerHTML = count13;
  };

  var countMar20 = function() {
    count20++;
    document.getElementById("mar20Count").innerHTML = count20;
  };

  var noShowCount = function() {
    noShow++;
    document.getElementById("noShowCount").innerHTML = noShow;
  };

});
