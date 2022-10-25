// navbar

document.getElementById('theme-moon').addEventListener('click', onClick);
document.getElementById('theme-sun').addEventListener('click', onClick);

function onClick(e){
   const darkTheme = document.getElementsByClassName('theme-dark');
   const lightTheme = document.getElementsByClassName('theme-light');
   const darkArray = Array.from(darkTheme);
   const lightArray = Array.from(lightTheme);

   darkArray.forEach(element => {
    element.classList.add('theme-light');
    element.classList.remove('theme-dark');
   });

   lightArray.forEach(element => {
    element.classList.add('theme-dark');
    element.classList.remove('theme-light');
   });
}