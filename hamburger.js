window.onscroll = function() {
    var header = document.querySelector('header');
    if (window.pageYOffset > 50) { /* Change '50' to the amount of scrolling you want */
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
};