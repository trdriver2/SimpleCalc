class Calculator {
  constructor(init) {
    this.register = init;
  }

  addition(add) {
    this.register += add;
    return this;
  }

  subtraction(sub) {
    this.register -= sub;
    return this;
  }

  multiplication(mult) {
    this.register *= mult;
    return this;
  }

  division(div) {
    this.register /= div;
    return this;
  }

  equals() {
    return this.register;
  }

  clear() {
    this.register = 0;
    return this;
  }
  rpn(evaluate) {
    evaluate = evaluate.split(" ");
    const expressions = ["+", "-", "*", "/"];
    for (let i = 0; i < evaluate.length; i++) {
      if (isNaN(evaluate[i]) && expressions.includes(evaluate[i])) {
        let exp = this.evaluateExpression(evaluate[i]).bind(this);

        if (i === 2 && !isNaN(evaluate[i - 1]) && !isNaN(evaluate[i - 2])) {
          this.register = parseInt(evaluate[i - 2]);
          exp(parseInt(evaluate[i - 1]));
        } else if (i - 1 >= 0 && !isNaN(evaluate[i - 1])) {
          exp(parseInt(evaluate[i - 1]));
        } else {
          console.error("The provided string cannot be evaluated");
          return null;
        }
      }
    }
    return this.register;
  }
  evaluateExpression(exp) {
    if (exp === "+") return this.addition;
    else if (exp === "-") return this.subtraction;
    else if (exp === "*") return this.multiplication;
    else if (exp === "/") return this.division;
  }
}

let a = new Calculator(0);
console.log(a.rpn("1 2 + 7 - 2 *"));

module.exports = Calculator;
