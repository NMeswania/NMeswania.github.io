// When the user scrolls the page, execute myFunction 
window.onscroll = function() {updateScrollBar()};

function updateScrollBar() {
  var currentWinPos = document.body.scrollTop || document.documentElement.scrollTop;
  var ScrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = 100 - (currentWinPos / ScrollableHeight) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}