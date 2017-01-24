var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

if (w >= 50 && w <= 700) {
    var slideIndex = 1;
    var x = document.getElementsByClassName("squares");
    showDivs(slideIndex);

    function plusDivs(n) {
      showDivs(slideIndex += n);
    }

    function showDivs(n) {
      var i;
      if (n > x.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      x[slideIndex-1].style.display = "block";  
    }
} else {
    for (i = 0; i < x.length; i++) {
         x[i].style.display = "block";  
      }
}