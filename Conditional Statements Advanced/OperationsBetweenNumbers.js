function calculator(num1, num2, operator) {
    let result;
num1 = Number(num1);
num2 = Number(num2);

    if (operator == '+' || operator == '-' || operator == '*') {
        if (operator == '+') {
            result = num1 + num2;
        }
        else if (operator == '-') {
            result = num1 - num2;
        }
        else if (operator == '*') {
            result = num1 * num2;
        }

        if (result % 2 == 0) {
            console.log(`${num1} ${operator} ${num2} = ${result} - even`);
        }
        else{
            console.log(`${num1} ${operator} ${num2} = ${result} - odd`);
        }
        
    }
     else if ((operator == '/' || operator == '%') && num2 == 0) {
        console.log(`Cannot divide ${num1} by zero`);
    }
    else if (operator == '/') {
        result = num1 / num2;

        console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
    }
    else if (operator == '%') {
        result = num1 % num2;

        console.log(`${num1} % ${num2} = ${result}`);
    }
}

calculator(10, 12, '+');