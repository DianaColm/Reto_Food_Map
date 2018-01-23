$(document).ready(function() {
  //screen splash
  setTimeout(function() {
    $(".preload").fadeOut(1500);
  }, 3000);

  setTimeout(function() {
    $("#main").removeClass("d-none")
  }, 2000);
});
