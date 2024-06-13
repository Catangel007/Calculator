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
const equals = document.querySelector("#equals");
const display = document.querySelector(".display");


let operandA = '';
let operandB = '';
let operator = '';
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

            // get operandA
            // function getOperandA(){
                let row = document.querySelector("#row");
        let num = row.querySelectorAll("button") 
            num.addEventListener("click", (e)=>{
             let target= e.target;
             switch(target.id){
                    case "one":
                    operandA.concat(1);
                    display.textContent = `${operandA}`;
                    break;
                    case "two":
                    operandA.concat(2);
                    display.textContent = `${operandA}`;
                    break;
                    case "three":
                    operandA.concat(3);
                    display.textContent = `${operandA}`;
                    break;
                    case "four":
                    operandA.concat(4);
                    display.textContent = `${operandA}`;
                    break;
                    case "five":
                    operandA.concat(5);
                    display.textContent = `${operandA}`;
                    break;
                    case "six":
                    operandA.concat(6);
                    display.textContent = `${operandA}`;
                    break;
                    case "seven":
                    operandA.concat(7);
                    display.textContent = `${operandA}`;
                    break;
                    case "eight":
                    operandA.concat(8);
                    display.textContent = `${operandA}`;
                    break;
                    case "nine":
                    operandA.concat(9);
                    display.textContent = `${operandA}`;
                    break;
                    case "zero":
                    operandA.concat(0);
                    display.textContent = `${operandA}`;
                    break;
                    
                   
             }console.log(operandA);
            })
        
       // }getOperandA();

       // function getOperator(){
            num.addEventListener("click", (e)=>{
                let target= e.target;
                switch(target.id){
                    case "add":
                    operator='+';
                    display.textContent = `${operator}`;
                    add();
                    break;
                    case "subtract":
                    operator='-';
                    display.textContent = `${operandA}`;
                    minus();
                    break;
                    case "multiply":
                    operator='x';
                    display.textContent = `${operandA}`;
                    multiplication();
                    break;
                    case "divide":
                    operator='÷';
                    display.textContent = `${operandA}`;
                    division();
                    break;
                    // case "add":
                    // operator='+';
                    // add();
                    // break;
                    // case "add":
                    // operator='+';
                    // add();
                    // break;
                    // case "add":
                    // operator='+';
                    // add();
                    // break;
                    // case "add":
                    // operator='+';
                    // add();
                    // break;

                }console.log(operator);
                }) 
       // }getOperator();








       // function getOperandB(){
        
            num.addEventListener("click", (e)=>{
             let target= e.target;
             switch(target.id){
                case "one":
                    operandB.concat(Number(1));
                    display.textContent = `${operandB}`;
                    break;
                    case "two":
                    operandB.concat(2);
                    display.textContent = `${operandB}`;
                    break;
                    case "three":
                    operandB.concat(3);
                    display.textContent = `${operandB}`;
                    break;
                    case "four":
                    operandB.concat(4);
                    display.textContent = `${operandB}`;
                    break;
                    case "five":
                    operandB.concat(5);
                    display.textContent = `${operandB}`;
                    break;
                    case "six":
                    operandB.concat(6);
                    display.textContent = `${operandB}`;
                    break;
                    case "seven":
                    operandB.concat(7);
                    display.textContent = `${operandB}`;
                    break;
                    case "eight":
                    operandB.concat(8);
                    display.textContent = `${operandB}`;
                    break;
                    case "nine":
                    operandB.concat(9);
                    display.textContent = `${operandB}`;
                    break;
                    case "zero":
                    operandB.concat(0);
                    display.textContent = `${operandB}`;
                    break;
                    
                   
             } console.log(operandB);  
            })
       // }getOperandB();
        


       
