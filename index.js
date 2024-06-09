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
result=(operandA + operandB); 

} 

function minus(operandA,operandB){
    result=(operandA - operandB); 
    
    }

    function multiplication(operandA,operandB){
        result=(operandA * operandB); 
        
        }

        function division(operandA,operandB){
            result=(operandA / operandB); 
            
            }

            // get operandA
            // function getOperandA(){
                let num = document.querySelector("#row");
                for(let i=0; i<9; i++){
            num.addEventListener("click", (e)=>{
             let target= e.target;
             switch(target.id){
                    case "one":
                    operandA.push(1);
                    display.textContent = `${operandA}`;
                    break;
                    case "two":
                    operandA.push(2);
                    display.textContent = `${operandA}`;
                    break;
                    case "three":
                    operandA.push(3);
                    display.textContent = `${operandA}`;
                    break;
                    case "four":
                    operandA.push(4);
                    display.textContent = `${operandA}`;
                    break;
                    case "five":
                    operandA.push(5);
                    display.textContent = `${operandA}`;
                    break;
                    case "six":
                    operandA.push(6);
                    display.textContent = `${operandA}`;
                    break;
                    case "seven":
                    operandA.push(7);
                    display.textContent = `${operandA}`;
                    break;
                    case "eight":
                    operandA.push(8);
                    display.textContent = `${operandA}`;
                    break;
                    case "nine":
                    operandA.push(9);
                    display.textContent = `${operandA}`;
                    break;
                    case "zero":
                    operandA.push(0);
                    display.textContent = `${operandA}`;
                    break;
                    
                   
             }console.log(operandA);
            })
        }
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
        for(let i=0; i<9; i++){
            num.addEventListener("click", (e)=>{
             let target= e.target;
             switch(target.id){
                case "one":
                    operandB.push(1);
                    display.textContent = `${operandB}`;
                    break;
                    case "two":
                    operandB.push(2);
                    display.textContent = `${operandB}`;
                    break;
                    case "three":
                    operandB.push(3);
                    display.textContent = `${operandB}`;
                    break;
                    case "four":
                    operandB.push(4);
                    display.textContent = `${operandB}`;
                    break;
                    case "five":
                    operandB.push(5);
                    display.textContent = `${operandB}`;
                    break;
                    case "six":
                    operandB.push(6);
                    display.textContent = `${operandB}`;
                    break;
                    case "seven":
                    operandB.push(7);
                    display.textContent = `${operandB}`;
                    break;
                    case "eight":
                    operandB.push(8);
                    display.textContent = `${operandB}`;
                    break;
                    case "nine":
                    operandB.push(9);
                    display.textContent = `${operandB}`;
                    break;
                    case "zero":
                    operandB.push(0);
                    display.textContent = `${operandB}`;
                    break;
                    
                   
             } console.log(operandB);  
            })
       // }getOperandB();
        }


       
