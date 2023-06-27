window.addEventListener("scroll", function() {
    var scrollButton = document.getElementById("scroll-to-top");
    
    if (document.documentElement.scrollTop > 300) {
      scrollButton.classList.add("show");
    } else {
      scrollButton.classList.remove("show");
    }
  });
  
  document.getElementById("scroll-to-top").addEventListener("click", function() {
    document.documentElement.scrollTop = 0;
  });
  