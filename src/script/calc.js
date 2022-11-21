const output = document.querySelector("#output");
const resetBtn = document.querySelector("#reset");
const operatorBtns = document.querySelectorAll(".operator");
const operandBtns = document.querySelectorAll(".operand");

let sum = '';
let num = 0;

operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", (e) => {
        switch(e.target.value) {
            case "+":
                console.log('+');
                break;
            case "-":
                console.log('-');
                break;
            case "*":
                console.log('*');
                break;
            case "/":
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
        if(e.target.value === ".") {
            num = num + ','
            return showNum(num)
        }

    })
})

function showNum(num){
    output.innerHTML = num;
}

// Checkign if reset btn was clicked
resetBtn.addEventListener('click', clear);
// Clears the display
function clear() {
    output.innerHTML = "0";
}