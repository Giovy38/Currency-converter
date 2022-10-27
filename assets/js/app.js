// navbar theme change

// icon controll 
document.getElementById('theme-moon').addEventListener('click', themeChainge);
document.getElementById('theme-sun').addEventListener('click', themeChainge);
//  shadow controll 
const shadow = document.getElementsByClassName('shadow');
const shadowArray = Array.from(shadow);
let shadowOn = true;
// select hidden obj
const hiddenObj = document.getElementsByClassName('hidden');
const hiddenObjArray = Array.from(hiddenObj);

function themeChainge(e){
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
      document.body.style.backgroundColor = "#F5DCB2";

      hiddenObjArray.forEach(element => {
         element.classList.remove('dark-hover');
         element.classList.add('light-hover');

      shadowOn = false;
      })

   } else {
      shadowArray.forEach(element => {
         element.classList.add('shadow');
        });
        document.body.style.backgroundColor = "#111110";

      hiddenObjArray.forEach(element => {
         element.classList.remove('light-hover');
         element.classList.add('dark-hover');

      shadowOn = true;
      })
   }
}

// hidden value 
let hidden = true;

hiddenObjArray.forEach(element => {
   element.style.display = "none";
})

// see the hidden object 
const downArrowIcon = document.querySelectorAll('.down-arrow-icon');
// change 1st choice border radius


downArrowIcon.forEach(arrow => {
   arrow.addEventListener('click', showHidden)
})

function showHidden(){
   if(hidden){
      hiddenObjArray.forEach(element => {
         element.style.display = "flex";

         document.getElementById('first-left-value').style.borderRadius = "10px 10px 0 0";
         document.getElementById('first-right-value').style.borderRadius = "10px 10px 0 0";
         document.getElementById('left-mooney-input').style.borderRadius = "0 0 10px 10px";
         document.getElementById('right-mooney-input').style.borderRadius = "0 0 10px 10px";
      })
      hidden = false;
   } else {
      hiddenObjArray.forEach(element => {
         element.style.display = "none";

         document.getElementById('first-left-value').style.borderRadius = "10px";
         document.getElementById('first-right-value').style.borderRadius = "10px";
         document.getElementById('left-mooney-input').style.borderRadius = "10px";
         document.getElementById('right-mooney-input').style.borderRadius = "10px";
      })
      hidden = true;
   }
}

// get API 

const inputValueChange = document.querySelectorAll('.value-input');
let leftMooneyValue, rightMooneyValue; 
let leftMooney, rightMooney;


inputValueChange.forEach(input => {
   input.addEventListener('input', valueChange)
})

function valueChange(){

   // taking the value of the input
   leftMooneyValue = document.getElementById('left-input').value
   rightMooneyValue = document.getElementById('right-input').value

   // taking the extended name of the mooney value
   leftStartValue = document.getElementById('left-start-value-extended').innerHTML;
   const rightStartValue = document.getElementById('right-start-value-extended').innerHTML;

   // taking the short name of the mooney value
   leftMooney = document.getElementById('left-start-value').innerHTML;
   rightMooney = document.getElementById('right-start-value').innerHTML;


   document.getElementById('value-title').innerHTML = `${leftMooneyValue} ${leftStartValue} to ${rightStartValue}`

   const host = 'api.frankfurter.app';
   if(leftMooney !== rightMooney ){
      fetch(`https://${host}/latest?amount=${leftMooneyValue}&from=${leftMooney}&to=${rightMooney}`)
      .then(resp => resp.json())
      .then((data) => {
         
         document.getElementById('right-input').value = `${data.rates[rightMooney]}`;
         
      });
   } else {
      document.getElementById('right-input').value = `${leftMooneyValue}`;
   }
   
}

// switch the selected value with the 1st value 
const leftValue = document.getElementById('left-value');
const rightValue = document.getElementById('right-value');



leftValue.addEventListener('click', switchValue );


function switchValue(e){

   if(e.target.classList.contains('left-money-container') || e.target.parentElement.classList.contains('left-money-container') ){
      const leftValueNod = document.querySelectorAll('#left-value');
      let selectedTarget;

      if(e.target.classList.contains('left-money-container')){
         // if i click on div
         selectedTarget = e.target;
      } else {
         // if i click on a div's element
         selectedTarget = e.target.parentElement;
      }

      let firstLeftChoice = leftValueNod[0].children[0];
      let selectedChoice = selectedTarget;


       // GET img src
       let selectedChoiceImgUrl = selectedChoice.children[0].getAttribute('src');
      

      // PUT the current value to the selected value position
     
      // CHANGE img
      firstLeftChoice.children[0].src = `${selectedChoiceImgUrl}`;
      // CHANGE short value
      firstLeftChoice.children[1].innerHTML = `${selectedChoice.children[1].innerHTML}`;
      // CHANGE long value
      firstLeftChoice.children[2].innerHTML = `${selectedChoice.children[2].innerHTML}`;
   }
   
   valueChange();
}
