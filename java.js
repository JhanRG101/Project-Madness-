document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-theme');
    const body = document.body;
    const nav = document.querySelector('nav'); 
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      body.classList.add(currentTheme);
      if (currentTheme === 'dark-theme') {
        nav.classList.add('dark-theme'); 
      }
    }
  
   
    toggleButton.addEventListener('click', function () {
      if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        nav.classList.remove('dark-theme'); 
        localStorage.setItem('theme', 'light-theme');
      } else {
        body.classList.add('dark-theme');
        nav.classList.add('dark-theme'); 
        localStorage.setItem('theme', 'dark-theme');
      }
    });
  });