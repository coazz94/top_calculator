document.addEventListener("DOMContentLoaded", () =>{

    // num1, num2 = Numbers for operation, operator = +,-,*,/ 
    // output = the text shown on the calculator
    // block = differentiate between first and aditional calculations (2+3-4) // 2+3 ist first calc, -4 is second Part
    // num_blocked = is the number that will not be shown, but saved in background
    const output = document.getElementById("ouputtext");
    const dot_butt = document.getElementById("dot")
    let num1 = "";
    let operator = "";
    let block = false;
    let num_blocked = "";

    // query for all buttons and listen for the click
    document.querySelectorAll('button').forEach((element) =>{
        element.addEventListener("click", () =>{
            // If button classname is num, button with a number was clicked
            if (element.className === "num"){
                // If first number update the text, use of block, else save the number in the background to num_blocked
                if(element.value == "."){
                    dot_butt.disabled = true
                }
                if(!block){
                    updateText(element.value);
                }else{
                    num_blocked =  num_blocked + element.value;
                }

            // if classname calcf_, a operator was choosen
            }else if(element.className === "calcf"){
                // enable the dot again
                dot_butt.disabled = false
                // if num1 and operator empty, it is the first calculation
                if (num1 != "" && operator != ""){
                    // block than second operator choosen, than num2 is num_blocked
                    if(!block){
                        num2 = output.innerHTML;
                    }else{
                        num2 = num_blocked;
                    }
                    // calc the new num1, change the textshown to it, block = true  because first calc was finished
                    num1 = operate(num1, num2, operator)
                    output.innerHTML = num1;
                    block = true;
                    num_blocked = "";
                    operator = element.value;
                // else make first calc
                }else{
                    num1 = output.innerHTML;
                    output.innerHTML = "";
                    operator = element.value;
                }
            // calcf_3 = "=", show the result of the calc
            }else if(element.className === "calcf_3"){
                dot_butt.disabled = false
                let num2 = output.innerHTML;
                let result = operate(num1, num2, operator);
                output.innerHTML = result;
                num1 = operator = num_blocked = "";
                block = false;
            // calcf_4 = erase the text
            }else if (element.className === "calcf_4"){
                dot_butt.disabled = false
                num1 = operator = num_blocked = "";
                output.innerHTML = "";
                block = false;
            }
        })
    })
})


function updateText(a){
    // Get the text in the html that was already entered
    const x = document.getElementById("ouputtext").innerHTML;
    console.log(document.getElementById("ouputtext").innerHTML)
    // Add the new number
    document.getElementById("ouputtext").innerHTML = x + a;
}


function operate(num1, num2,  operator){
    // Covnert the string to a number
    let number1 = parseFloat(num1);
    let number2 = parseFloat(num2);
    let result = Number;
    
    // depending on the operator make the result
    if (operator === "add"){
        result = number1 + number2;
    }else if (operator === "subst"){
        result = number1 - number2;
    }else if (operator === "multiply"){
        result = number1 * number2;
    }else if (operator === "divide"){
        // Check if dividgin by 0
        if(number2 == 0){
            result = "error";
        }else{
            result = number1 / number2;
        }
    }
    return result;
}
