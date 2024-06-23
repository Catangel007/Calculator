// variables that perform calculator function.

let display = document.querySelector('.display');
let operation = document.querySelectorAll('#operator-btn');
const equals = document.querySelector(".equals")
let btn = document.querySelectorAll("button")


let a = '';
let b = '';
 let operator ='';
 let result = 0;

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
    let sign = (a= -a )|| (b= -b);  
    return sign;
   }

function getPercent(a,b){
    let percentage = (a/100)||(b/100);
    return percentage;
   }

  

     //  functions that populate the display when clicked. store display variable somewhere.
    function updateDisplay(){
        
    // let arr = Array.prototype.slice.call(btn)
     for(let i = 0; i<btn.length;i++) {
       if (btn[i]===0){

           btn.addEventListener("click",()=>{})
       }
         btn[i].addEventListener("click", () => {
           if(btn[i].classList.contains('key')&& operator===''){
               display.textContent += btn[i].textContent
               a = Number(display.textContent)
               console.log(a)


           }else if(btn[i].classList.contains('operator-btn')){
            
               operator = btn[i].textContent
               display.textContent = ""
               console.log(operator)

           }else if(btn[i].classList.contains('key')&& operator!==''){
               display.textContent += btn[i].textContent
               b = Number(display.textContent)
               console.log(b)
               
               
                
           } else if (btn[i].classList.contains('equals')){
              result = calculator(operator)
                display.textContent =result;
                operator=''
                a = result
           console.log(result)
           }
        })


      }
        } updateDisplay()
       
            
           
            
            
            
           
        // } else if(button.textContent==="Del"){
        //     function backspace (appendA,appendB){
        //      let undo = appendA||appendB;
             
        //      undo=undo.split('');
        //      undo=undo.splice(undo.length-1,1)
        //      undo= undo.join('');
             
        //    }  backspace();
        //  }          
         
        
     



  // function for calculator operation
  function calculator(operator){
       
   

 if (operator==="+"){  
 return add(a,b)
}else if (operator==="-"){
return subtract(a,b)
}else if (operator==="÷"){
return divide(a,b)
}else if (operator==="x"){
return multiplication(a,b)
}else if (operator==="+/-"){
return getSign(-a,-b)
}else if (operator==="%"){
return getPercent(a,b)
}else {

operator = '';
}
  }








     // store all values and call the  calculator operate function 
     // operation with decimals
     // function to display error if the user divide by 0
     // allow only one dot in calc function
     // add backspace button to undo if the user clicked a wrong number
     // add keyboard support
     