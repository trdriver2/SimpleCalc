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
  rpn(evaluate = "") {
    const evaluateExpression = exp => {
      switch (exp) {
        case "+":
          return this.addition;
        case "-":
          return this.subtraction;
        case "/":
          return this.division;
        case "*":
          return this.multiplication;
      }
    };
    if (typeof evaluate !== "string" || evaluate.length < 5) {
      console.error("The provided string cannot be evaluated");
      return null;
    }
    evaluate = evaluate.split(" ");
    const expressions = ["+", "-", "*", "/"];
    for (let i = 0; i < evaluate.length; i++) {
      if (isNaN(evaluate[i]) && expressions.includes(evaluate[i])) {
        let exp = evaluateExpression(evaluate[i]).bind(this);
        if (i === 2 && !isNaN(evaluate[i - 1]) && !isNaN(evaluate[i - 2])) {
          this.register = parseInt(evaluate[i - 2]);
          exp(parseInt(evaluate[i - 1]));
        } else if (i - 1 > 2 && !isNaN(evaluate[i - 1])) {
          exp(parseInt(evaluate[i - 1]));
        } else {
          console.error("The provided string cannot be evaluated");
          return null;
        }
      }
    }
    return this.register;
  }
}

module.exports = Calculator;
