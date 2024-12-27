let input = document.getElementById('display'); 
let buttons= document.querySelectorAll('button');
let displayValue = '';
let operator = '';
let firstValue = '';
let secondValue = '';
let result = '';
let isOperator = false;
let isEqual = false;

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;
        if (value === 'C') {
            displayValue = '';
            input.value = '';
        } else if (value === '=') {
            displayValue=eval(displayValue);
            input.value=displayValue;
        }
        else if(value==="DEL"){
            displayValue=displayValue.slice(0,-1);
            input.value = displayValue;    
        }
        else {
            displayValue += value;
            input.value = displayValue;
        }
    }
    )
}
);