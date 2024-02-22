function inputHandler(input, callback) {
    const expresssion = input.split(' ');
    const num1 = parseFloat(expresssion[0]);
    const num2 = parseFloat(expresssion[2]);
    const operator = expresssion[1];
    callback(num1, operator, num2);
}
module.exports=inputHandler;