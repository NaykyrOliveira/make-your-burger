window.onscroll = function() {
    let navBar = document.getElementById('nav');
    if(window.scrollY > 0) {
      navBar.classList.add('blur-effect');
    } else {
      navBar.classList.remove('blur-effect');
    }
  };