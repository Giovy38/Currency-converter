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

// hidden value 
let hidden = true;

const hiddenObj = document.getElementsByClassName('hidden');

const hiddenObjArray = Array.from(hiddenObj);

hiddenObjArray.forEach(element => {
   element.style.opacity = "0";
})

// see the hidden object 
const downArrowIcon = document.querySelectorAll('.down-arrow-icon');
// change 1st choice border radius


downArrowIcon.forEach(arrow => {
   arrow.addEventListener('click', showHidden)
})

function showHidden(){
   console.log('ciao');
   if(hidden){
      hiddenObjArray.forEach(element => {
         element.style.opacity = "100";

         document.getElementById('first-left-value').style.borderRadius = "10px 10px 0 0";
         document.getElementById('first-right-value').style.borderRadius = "10px 10px 0 0";
         document.getElementById('left-mooney-input').style.borderRadius = "0 0 10px 10px";
         document.getElementById('right-mooney-input').style.borderRadius = "0 0 10px 10px";
      })
      hidden = false;
   } else {
      hiddenObjArray.forEach(element => {
         element.style.opacity = "0";

         document.getElementById('first-left-value').style.borderRadius = "10px";
         document.getElementById('first-right-value').style.borderRadius = "10px";
         document.getElementById('left-mooney-input').style.borderRadius = "10px";
         document.getElementById('right-mooney-input').style.borderRadius = "10px";
      })
      hidden = true;
   }

   
}
