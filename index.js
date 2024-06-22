// variables that perform calculator function.

let display = document.querySelector('.display');
let operation = document.querySelectorAll('#operator-btn');
const equals = document.querySelector(".equals")
let btn = document.querySelectorAll("button")


let appendA = 0;
let appendB = 0;
 let operator ='';


// functions for operation

function add(a,b){
    return a + b; 
   } 

function subtract(a,b){
    return a - b; 
    }

function multiplication(a,b){
    return a * b; 
    }

function divide(a,b){
    return a / b;
    }

function getSign(a,b){
    let sign = -a || -b;  
    return sign;
   }

function getPercent(a,b){
    let percentage = (a/100)||(b/100);
    return percentage;
   }

  

     //  functions that populate the display when clicked. store display variable somewhere.
    function updateDisplay(){
        for(let i = 0; i < btn.length; i++){

          btn[i].addEventListener("click", () => {
            if(btn[i].classList.contains('key')){
                display.textContent += btn[i].textContent


            }else if(btn[i].classList.contains('operator-btn')){
                a = Number(display.textContent)
                display.textContent = btn[i].textContent
                operator = display.textContent
                display.textContent = ""


            }else{
                b = Number(display.textContent)
                display.textContent = calculator(operator)
            }
          })



        }
       
            
           
            
            
            
           
        // } else if(button.textContent==="Del"){
        //     function backspace (appendA,appendB){
        //      let undo = appendA||appendB;
             
        //      undo=undo.split('');
        //      undo=undo.splice(undo.length-1,1)
        //      undo= undo.join('');
             
        //    }  backspace();
        //  }          
         
        } 
     



  // function for calculator operation
  function calculator(operator){
       
    let result = 0;

 if (operator==="+"){  
 return add(a,b)
}else if (operator==="-"){
return subtract(a,b)
}else if (operator==="÷"){
return divide(a,b)
}else if (operator==="x"){
return multiplication(a,b)
}else if (operator==="+/-"){
return getSign(a,b)
}else if (operator==="%"){
return getPercent(a,b)
}else if(operator === "="){
 result = calculator(operator)
display.textContent =result;
operator = '';
}
  }








     // store all values and call the  calculator operate function 
     // operation with decimals
     // function to display error if the user divide by 0
     // allow only one dot in calc function
     // add backspace button to undo if the user clicked a wrong number
     // add keyboard support
     