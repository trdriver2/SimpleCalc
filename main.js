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
}

module.exports = Calculator;
