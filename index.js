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
let num = document.querySelector(".row");

let operandA = '';
let operandB = '';
let operator = '';
let result = '';






function plus(operandA,operandB){
result=(operandA + operandB); 

} plus();

function minus(operandA,operandB){
    result=(operandA - operandB); 
    
    }minus()

    function multiplication(operandA,operandB){
        result=(operandA * operandB); 
        
        }multiplication();

        function division(operandA,operandB){
            result=(operandA / operandB); 
            
            }division();

            // get operandA
            // function getOperandA(){
            num.addEventListener("click", (e)=>{
             let target= e.target;
             switch(target.id){
                case "one":
                    operandA=1;
                    break;
                    case "two":
                    operandA=2;
                    break;
                    case "three":
                    operandA=3;
                    break;
                    case "four":
                    operandA=4;
                    break;
                    case "five":
                    operandA=5;
                    break;
                    case "six":
                    operandA=6;
                    break;
                    case "seven":
                    operandA=7;
                    break;
                    case "eight":
                    operandA=8;
                    break;
                    case "nine":
                    operandA=9;
                    break;
                    case "zero":
                    operandA=0;
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
                    add();
                    break;
                    case "subtract":
                    operator='-';
                    minus();
                    break;
                    case "multiply":
                    operator='x';
                    multiplication();
                    break;
                    case "divide":
                    operator='÷';
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
                    operandB=1;
                    break;
                    case "two":
                    operandB=2;
                    break;
                    case "three":
                    operandB=3;
                    break;
                    case "four":
                    operandB=4;
                    break;
                    case "five":
                    operandB=5;
                    break;
                    case "six":
                    operandB=6;
                    break;
                    case "seven":
                    operandB=7;
                    break;
                    case "eight":
                    operandB=8;
                    break;
                    case "nine":
                    operandB=9;
                    break;
                    case "zero":
                    operandB=0;
                    console.log("0");
                    break;
                    
                   
             } console.log(operandB);  
            })
       // }getOperandB();
        


        display.textContent = `${operandA+operator+operandB}`;
