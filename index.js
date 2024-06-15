const ac = document.querySelector("#ac");
const uniary = document.querySelector("#uniary");
const percent = document.querySelector("#percent");
const add = document.querySelector("#add");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const multiply = document.querySelector("#multiply");
const four = document.querySelector("#four");
const five = document.querySelector("#five ");
const six = document.querySelector("#six ");
const subtract = document.querySelector("#subtract");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three ");
const divide = document.querySelector("#divide");
const zero= document.querySelector("#zero");
const dot = document.querySelector("#dot");
const del = document.querySelector("#delete")
const equals = document.querySelector("#equals");
const display = document.querySelector(".display");


let operandA = 0;
let operandB = 0;
let operator = 0;
let result = 0;






function plus(operandA,operandB){
     return result=(operandA + operandB); 

} 

function minus(operandA,operandB){
    return result=(operandA - operandB); 
      }

function multiplication(operandA,operandB){
        return result=(operandA * operandB); 
        
        }

function division(operandA,operandB){
            return result=(operandA / operandB);
      }

function getUniary(){
    let sign = "-";
    sign.concat(appendA || appendB);
    return Number(sign);
}

function getPercent(){
    let n = (Math(appendA/100))||(Math(appendB/100));
    return n;
}

            // get operandA
            // function getOperandA(){
                let row = document.querySelector("div#row");
        
            row.addEventListener("click", (e)=>{
             let target= e.target
             switch(target.id){
                    case "one":
                        display.textContent = `${operandA.push(1)}`;
                    break;
                    case "two":
                        
                        display.textContent = `${operandA.push(2)}`;
                    break;
                    case "three":
                        
                        display.textContent = `${operandA.push(3)}`;
                    break;
                    case "four":
                        
                        display.textContent = `${operandA.push(4)}`;
                    break;
                    case "five":
                        
                        display.textContent = `${operandA.push(5)}`;
                    break;
                    case "six":
                        
                        display.textContent = `${operandA.push(6)}`;
                    break;
                    case "seven":
                        
                        display.textContent = `${operandA.push(7)}`;
                    break;
                    case "eight":
                      
                        display.textContent = `${operandA.push(8)}`;
                    break;
                    case "nine":
                    ;
                    display.textContent = `${operandA.push(9)}`;
                    break;
                    case "zero":
                    
                    display.textContent = `${operandA.push(0)}`;
                    break;
                    case "ac":
                    ac = 0;
                    display.textContent = ac;
                    break;
                    case "uniary":
                    display.textContent = getUniary();
                    break;
                    case "dot":
                    for(let dots = 0; dots <= 1; dots++){
                    display.textContent = `${operandA.push(Number("."))}`;
                     }
                    break;
                    case "delete":
                    break;     
             }console.log(operandA);
            })
        
       // }getOperandA();

    //    // function getOperator(){
    //     row.addEventListener("click", (e)=>{
    //             let target= e.target;
    //             switch(target.id){
    //                 case "add":
    //                 operator='+';
    //                 display.textContent = `${operator}`;
    //                 add();
    //                 break;
    //                 case "subtract":
    //                 operator='-';
    //                 display.textContent = `${operandA}`;
    //                 minus();
    //                 break;
    //                 case "multiply":
    //                 operator='x';
    //                 display.textContent = `${operandA}`;
    //                 multiplication();
    //                 break;
    //                 case "divide":
    //                 operator='÷';
    //                 display.textContent = `${operandA}`;
    //                 division();
    //                 break;
    //                 // case "add":
    //                 // operator='+';
    //                 // add();
    //                 // break;
    //                 // case "add":
    //                 // operator='+';
    //                 // add();
    //                 // break;
    //                 // case "add":
    //                 // operator='+';
    //                 // add();
    //                 // break;
    //                 // case "add":
    //                 // operator='+';
    //                 // add();
    //                 // break;

    //             }console.log(operator);
    //             }) 
    //    // }getOperator();








    //    // function getOperandB(){
        
    //    row.addEventListener("click", (e)=>{
    //          let target= e.target;
    //          switch(target.id){
    //             case "one":
    //                 operandB.push(Number(1));
    //                 display.textContent = `${operandB}`;
    //                 break;
    //                 case "two":
    //                 operandB.push(2);
    //                 display.textContent = `${operandB}`;
    //                 break;
    //                 case "three":
    //                 operandB.push(3);
    //                 display.textContent = `${operandB}`;
    //                 break;
    //                 case "four":
    //                 operandB.push(4);
    //                 display.textContent = `${operandB}`;
    //                 break;
    //                 case "five":
    //                 operandB.push(5);
    //                 display.textContent = `${operandB}`;
    //                 break;
    //                 case "six":
    //                 operandB.push(6);
    //                 display.textContent = `${operandB}`;
    //                 break;
    //                 case "seven":
    //                 operandB.push(7);
    //                 display.textContent = `${operandB}`;
    //                 break;
    //                 case "eight":
    //                 operandB.push(8);
    //                 display.textContent = `${operandB}`;
    //                 break;
    //                 case "nine":
    //                 operandB.push(9);
    //                 display.textContent = `${operandB}`;
    //                 break;
    //                 case "zero":
    //                 operandB.push(0);
    //                 display.textContent = `${operandB}`;
    //                 break;
    //                 case "ac":
    //                 ac =0;
    //                 display.textContent = ac;
    //                 break;
    //                 case "uniary":
    //                 display.textContent = getUniary;
    //                 break;
    //                 case "dot":
    //                 for(let dots = 1; dots <= 1; dots++){
    //                 display.textContent = ".";
    //                     }
    //                 break;
    //                 case "delete":
    //                 break;
                    
                   
    //          } console.log(operandB);  
    //         })
    //    // }getOperandB();
        


       
