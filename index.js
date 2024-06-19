// variables that perform calculator function.

let display = document.querySelector('.display');
let operator = document.querySelectorAll('#operator-btn');
const equals = document.querySelector(".equals")
let btn = document.querySelectorAll("button")


let operandA = 0;
let operandB = 0;
 operator ='';



// functions for operation

function add(operandA,operandB){
    return operandA + operandB; 
   } 

function subtract(operandA,operandB){
    return operandA - operandB; 
    }

function multiplication(operandA,operandB){
    return operandA * operandB;  
    }

function divide(operandA,operandB){
    return operandA / operandB;
    }

function getSign(){
    let sign = "-";
    sign.concat(appendA || appendB);
    return Number(sign);
   }

function getPercent(){
    let percentage = (Math(appendA/100))||(Math(appendB/100));
    return percentage;
   }

  

     // function for calculator operator
     function calculator(appendA,appendB,operator){
        populateDisplay();
      //  const operate = array.reduce((appendA,appendB) => `${appendA+operator+appendB}`) 
     if (operator="+"&& equals.onclick){
    add();
   } if (operator="-"&& equals.onclick){
    subtract();
   } if (operator="÷"&& equals.onclick){
    multiplication();
   } if (operator="x"&& equals.onclick){
    divide();
   } if (operator="+/-"&& equals.onclick){
    getSign();
   } if (operator="%"&& equals.onclick){
    getPercent();
   }
    
     }calculator();
       
     


     //  functions that populate the display when clicked. store display variable somewhere.
    function populateDisplay(){
        let screen = 0;
        btn.forEach((button)=> {button.addEventListener("click",()=>{
            
         if (button.id == "ac") {

            display.textContent=0;
            
            
        }else {
           if(button.textContent === '+'
           ||button.textContent === '-'
           ||button.textContent === '÷'
           ||button.textContent === 'x'
          ||button.textContent === '%'
          ||button.textContent === '='
        ) {
            display.textContent= '';
            operator=button.textContent;
            
            appendB= display.textContent;
            console.log(appendB);
        } else if(button.textContent==="Del"){
            
        }
        else{console.log(button.textContent)
            
            screen = button.textContent;
            display.textContent += screen;
            appendA= display.textContent;
            
            console.log(appendA)
           
        }
         
        }           
        });
    });
        
    }














     // store all values and call the  calculator operate function 
     // operation with decimals
     // function to display error if the user divide by 0
     // allow only one dot in calc function
     // add backspace button to undo if the user clicked a wrong number
     // add keyboard support
     