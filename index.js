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

  

     // function for calculator operator
     function calculator(appendA,appendB,operator){
       
        let result = 0;
    
     if (operator=="+="){  
    result = `${add(appendA,appendB)}`;
    console.log(result);
   }else if (operator=="-="){
    result =`${subtract(appendA,appendB)}`;
    console.log(result);
   }else if (operator=="÷="){
    result=`${divide(appendA,appendB)}`;
    console.log(result);
   }else if (operator=="x="){
    result =`${multiplication(appendA,appendB)}`;
    console.log(result);
   }else if (operator=="+/-"){
    result =`${getSign(appendA,appendB)}`;
    console.log(result);
   }else if (operator=="%="){
    result=`${getPercent(appendA,appendB)}`;
    console.log(result);
   }else if(operator == "="){

    display.Content= appendA;
    operator = '';
   }
    
     }calculator();
       
     


     //  functions that populate the display when clicked. store display variable somewhere.
    function populateDisplay(){
        let screen = 0;
        let turnUp= true;
        if (turnUp=false){

        }
        btn.forEach((button)=> {button.addEventListener("click",()=>{
            
         if (button.id == "ac") {

            display.textContent=0;
            
            
        }else{
           if(button.textContent === '+'
            ||button.textContent === '-'
            ||button.textContent === '÷'
            ||button.textContent === 'x'
            ||button.textContent === '%'
            ||button.textContent === '='
            ||button.textContent === '+/-'
            ||button.textContent === '%'
        ) {
            display.textContent= '';
            operator=operator.concat(button.textContent);
            
            
        } 
        else if(button.textContent === '1'
                ||button.textContent === '2'
                ||button.textContent === '3'
                ||button.textContent === '4'
                ||button.textContent === '5'
                ||button.textContent === '6'
                ||button.textContent === '7'
                ||button.textContent === '8'
                ||button.textContent === '9'
                ||button.textContent === '0'
                ||button.textContent === '.'
        
      ){console.log(button.textContent)
            
          if(operator==''){
            screen = button.textContent;
            display.textContent += screen;
            appendA=parseInt(display.textContent);
            console.log(appendA);
          }else if ( operator!=''){
            screen = button.textContent;
            display.textContent += screen;
            appendB=parseInt(display.textContent);
            console.log(appendB);
        }}

            
           
            
            
            
           
        // } else if(button.textContent==="Del"){
        //     function backspace (appendA,appendB){
        //      let undo = appendA||appendB;
             
        //      undo=undo.split('');
        //      undo=undo.splice(undo.length-1,1)
        //      undo= undo.join('');
             
        //    }  backspace();
        //  }          
         
        } 
        return [appendA, appendB, operator] ;
        });
    });
        
    } populateDisplay();














     // store all values and call the  calculator operate function 
     // operation with decimals
     // function to display error if the user divide by 0
     // allow only one dot in calc function
     // add backspace button to undo if the user clicked a wrong number
     // add keyboard support
     