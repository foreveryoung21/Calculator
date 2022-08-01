// save value in variable sum.
// 5+5*10
// when you select an operation 
// save different operations + * / 
// when you press plus it keeps staving 

// each operation has section of operation 
// if the value is an operation then evaluate result and print
// follow the following steps 
// onchange event 

// click event has the current number 
// when you click an operator current number combine
// when you pres the = operating on both the previous and new number 



/*
console.log(input);
let total; 

let previous =0;
let current =0;

function op(previous,current){
    return previous+current;
}

plus.addEventListener("click",()=>{
   
    previous = parseInt(input.value);
})

equal.addEventListener("click",()=>{
    let current = parseInt(input.value);
    console.log(current+previous);

})
*/

//hash table array linked list queue 

let buttons = document.querySelectorAll(".button");
let inputDisplay = document.querySelector(".input-display");
let calculatorBody = document.querySelector(".calculator-body");

function createTextNode(text){
    let textNode = document.createTextNode(text);
    return textNode;

}

function clearText(){
inputDisplay.innerText="";
}


function operation(prev,op){
    
    if(op === "+"){
       return function(current){
        return parseInt(prev)+parseInt(current);
       }
    }else if(op === "-"){
        return function(current){
            return parseInt(prev)-parseInt(current);
        }
    }else if(op ==="*"){
        return function(current){
            return parseInt(prev)* parseInt(current);
        }
    }else if (op === "/"){
        return function(current){
            return parseInt(prev)/parseInt(current);
        }
    }
    }






    calculatorBody.addEventListener("click",(event)=>{
      
        if(event.target.matches(".button-number ,.button-decimal")){
            if(inputDisplay.innerText.length>=15){
                return;
            }
            let elementText = event.target.innerText;
            inputDisplay.appendChild(createTextNode(elementText));
     
            
        }else if(event.target.matches(".button-clear")){
            clearText();
           
        }else if(event.target.matches(".button-operation")){
            let operationText = event.target.innerText;
            let values = inputDisplay.innerText;
            op = operation(values,operationText);
            clearText();
        }else if(event.target.matches(".button-equals")){
            let values = inputDisplay.innerText;
            let calulatedResult = op(values);
            inputDisplay.innerText = calulatedResult;
        }


        
   
     
    
    })
    


