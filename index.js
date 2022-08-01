let buttons = document.querySelectorAll(".button");
let inputDisplay = document.querySelector(".input-display");
let calculatorBody = document.querySelector(".calculator-body");
let calulationDisplay = document.querySelector(".calculation-display");
console.log(calulationDisplay.innerText);

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
            calulationDisplay.appendChild(createTextNode(elementText))
     
            
        }else if(event.target.matches(".button-clear")){
            clearText();
           
        }else if(event.target.matches(".button-operation")){
            let operationText = event.target.innerText;
            let values = inputDisplay.innerText;
            calulationDisplay.appendChild(createTextNode(operationText));
            op = operation(values,operationText);
            clearText();
        }else if(event.target.matches(".button-equals")){
            let values = inputDisplay.innerText;
            let calulatedResult = op(values);
            inputDisplay.innerText = calulatedResult;
        }


        
   
     
    
    })
    


