document.addEventListener("DOMContentLoaded", () =>{

    const output = document.getElementById("ouputtext");
    let num1 = "";
    let operator = "";
    let block = false;
    let num_extern = "";


    document.querySelectorAll('button').forEach((element) =>{
        element.addEventListener("click", () =>{
            if (element.className === "num"){
                if(!block){
                    updateText(element.value);
                }else{
                    num_extern =  num_extern + element.value;
                }

            }else if(element.className === "calcf"){

                if (num1 != "" && operator != ""){
                    if(!block){
                        num2 = output.innerHTML;
                    }else{
                        console.log("NUMEXTERN", num_extern)
                        num2 = num_extern;
                    }
                    console.log("here", "num1",num1,"num2", num2)
                    num1 = operate(num1, num2, operator)
                    output.innerHTML = num1;
                    block = true;
                    num_extern = "";
                }else{
                    num1 = output.innerHTML;
                    output.innerHTML = "";
                    operator = element.value
                }



            }else if(element.className === "calcf3"){
                let num2 = output.innerHTML;
                operate(num1, num2, operator);
            }

        })
    })


})



function updateText(a){
    // Get the text in the html that was already entered
    const x = document.getElementById("ouputtext").innerHTML;
    // Add the new number
    document.getElementById("ouputtext").innerHTML = x + a;
}


function operate(num1, num2,  operator){

    let number1 = parseInt(num1)
    let number2 = parseInt(num2)
    let result = 0;
    
    if (operator === "add"){
        result = number1 + number2
    }else if (operator === "subst"){
        result = number1 - number2;
    }else if (operator === "multiply"){
        result = number1 * number2;
    }else if (operator === "divide"){
        result = number1 / number2;
    }


    return result;
}



function add(a, b){
    return a+b
}