let add = require('./add');
let inputHandler = require('./inputHandler')

const readline = require('readline');
const substraction = require('./subtraction');
const multiplication = require('./multiplication');
const exponentiation = require('./exponentiation');
const dividing=require('./dividing');
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function calculator() {
    userInput.question('Введите значения и оператор через пробел (например 2 + 3): ',
        (input) => {
            inputHandler(input, (num1, operator, num2) => {

                let result;
                switch (operator) {
                    case '+':
                        result = add(num1, num2)

                        break;
                    case '-':
                        result = substraction(num1, num2)

                        break;
                    case '/':
                        result = dividing(num1, num2)

                        break;
                    case '*':
                        result = multiplication(num1, num2)

                        break;
                    case '**':
                        result = exponentiation(num1, num2)

                        break;
                    default:
                        console.log("Неверная операция! ")
                        userInput.close;
                        return;
                }
                console.log('Результат ' + result);
                calculator();
            })
        });
}

calculator();