const output = document.querySelector("#output");
const resetBtn = document.querySelector("#reset");
const operatorBtns = document.querySelectorAll(".operator");
const operandBtns = document.querySelectorAll(".operand");

let currentSum;
let num = 0;

let inputOperands = [];
let calculation = [];
let num1;
let num2;
let operator;

function builCalculation() {
    console.log(calculation);
}

operatorBtns.forEach((operatorBtn) => {
    calculation.push(output.innerHTML);
    operatorBtn.addEventListener("click", (e) => {
        let number1 = output.innerHTML
        switch(e.target.value) {
            case "+":
                operator = +
                calculation.push('+') 
                console.log('+');
                builCalculation(calculation)
                
                break;
            case "-":
                calculation.push('-') 
                console.log('-');
                break;
            case "*":
                calculation.push('*') 
                console.log('*');
                break;
            case "/":
                calculation.push('/') 
                console.log('/');
                break;
            default:
                console.log('=');
            break;               
        }
    })
})

operandBtns.forEach((operandBtns) => {
    operandBtns.addEventListener('click', (e) => {

        if ( e.target.value === "." && inputOperands[inputOperands.length-1] === ".") {
            console.log("last item .")
            return
        }
        else if(e.target.value === "." && inputOperands.includes('.')) {
            console.log("already contains .")
            return
        }

        else if (e.target.value === ".") {
            inputOperands.push(".")
            output.innerHTML += "." 
        } 
         
        
        else if(e.target.value === "del") {
            inputOperands = []
            output.innerHTML = "0"
        } 
        
        else if(e.target.value === '0' &&  output.innerHTML === "0") {
            console.log("empty")
            return 
        }

        else {
            num = e.target.value
            inputOperands.push(num)

            if(output.innerHTML === "0") {
                output.innerHTML = num
            } else {
            
            output.innerHTML += num
            }
        }

        //console.log(output.innerHTML)
        // calculation.push(output.innerHTML);
        
        //console.log(inputOperands)
        //console.log("last item is " + inputOperands[inputOperands.length-1])
        //console.log("current number is "+currentSum)

    })
})





// Checking if reset btn was clicked
resetBtn.addEventListener('click', clear);
// Clears the display
function clear() {
    output.innerHTML = "0";
}