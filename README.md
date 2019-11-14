# SimpleCalc

This is just a simple calculator class written in JS. It can add, subtract, multiply, and divide. It holds a register that contains the current value, which can be cleared using the clear command. It can also print the current value in the register using equals. All commands, except equals and rpn, are chainable. rpn is a special function that takes in a string in rpn format, evaluates it, and sends back a response.

## Running Locally

To run the application locally, simply clone the repository and, inside of the project dirctory, run npm install. After this, you can import the library using
"const Calculator = require("./main")"
