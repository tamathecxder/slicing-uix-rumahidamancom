const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', () => {
  console.log(window.scrollY);

  if ( window.scrollY > '80' ) {
    navbar.classList.replace('bg-transparent', 'nav-color');
  } else {
    navbar.classList.replace('nav-color', 'bg-transparent');
  }
});



