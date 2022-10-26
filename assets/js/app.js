// navbar theme change

// icon controll 
document.getElementById('theme-moon').addEventListener('click', onClick);
document.getElementById('theme-sun').addEventListener('click', onClick);
//  shadow controll 
const shadow = document.getElementsByClassName('shadow');
const shadowArray = Array.from(shadow);
let shadowOn = true;

function onClick(e){
   const darkTheme = document.getElementsByClassName('theme-dark');
   const lightTheme = document.getElementsByClassName('theme-light');
   const bgThemeDark = document.getElementsByClassName('bg-dark');
   const bgThemeLight = document.getElementsByClassName('bg-light');
   

   const darkArray = Array.from(darkTheme);
   const lightArray = Array.from(lightTheme);
   const bgArrayDark = Array.from(bgThemeDark);
   const bgArrayLight = Array.from(bgThemeLight);

   darkArray.forEach(element => {
    element.classList.add('theme-light');
    element.classList.remove('theme-dark');
   });

   lightArray.forEach(element => {
    element.classList.add('theme-dark');
    element.classList.remove('theme-light');
   });

   bgArrayDark.forEach(element => {
    element.classList.add('bg-light');
    element.classList.remove('bg-dark');
   });

   bgArrayLight.forEach(element => {
    element.classList.add('bg-dark');
    element.classList.remove('bg-light');
   });

   if(shadowOn){
      shadowArray.forEach(element => {
         element.classList.remove('shadow');
        });
      document.body.style.backgroundColor = "#fff";
        shadowOn = false;

   } else {
      shadowArray.forEach(element => {
         element.classList.add('shadow');
        });
        document.body.style.backgroundColor = "#111110";
        shadowOn = true;
   }


}

