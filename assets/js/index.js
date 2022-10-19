// Navbar color change on scroll
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50 && window.screen.width >= 992) {
        document.getElementById("navbar_top").classList.add("fixed-top");
        // add padding top to show content behind navbar
        navbar_height = document.querySelector(".navbar").offsetHeight;
         
        document.body.style.paddingTop = navbar_height + "px";
  
        // adding background color to navbar
  
        document.getElementById("navbar_top").classList.add("bg-white");
        // document.getElementById('navbar_top').classList.add('navbar-light');
      } else {
        document.getElementById("navbar_top").classList.remove("fixed-top");
        // remove padding top from body
  
        // remove bg color from navbar
        document.getElementById("navbar_top").classList.remove("bg-white");
        // document.getElementById('navbar_top').classList.remove('navbar-light');
        document.body.style.paddingTop = "0";
      }
    });
  });
  
  // Prevent Right click
  // document.addEventListener("contextmenu", (event) => event.preventDefault());
  
  
  
  //Go to top button
  var mybutton = document.getElementById("myBtn");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }







