const Calculator = require("./main");

describe("Calculator", () => {
  describe("Equals", () => {
    test("Has a function called equals", () => {
      const subject = new Calculator(5);
      expect(subject.equals).toBeDefined();
    });

    test("Has a function called equals that returns the register value for calculator", () => {
      const subject = new Calculator(5);
      expect(subject.equals()).toEqual(5);
    });
  });

  describe("Addition", () => {
    test("Has a function called addition", () => {
      const subject = new Calculator(5);
      expect(subject.addition).toBeDefined();
    });

    test("Has a function called addition that adds a value to register", () => {
      const subject = new Calculator(5);
      expect(subject.addition(5)).toEqual({ register: 10 });
    });

    test("Has a function called addition that returns the instance of the caller so that its chainable", () => {
      const subject = new Calculator(5);
      expect(subject.addition(5) instanceof Calculator).toEqual(true);
      expect(subject.addition(5) === subject).toEqual(true);
    });
  });

  describe("Subtraction", () => {
    test("Has a function called subtraction", () => {
      const subject = new Calculator(5);
      expect(subject.subtraction).toBeDefined();
    });

    test("Has a function called subtraction that subtracts a value from the register", () => {
      const subject = new Calculator(5);
      expect(subject.subtraction(3)).toEqual({ register: 2 });
    });

    test("Has a function called subtraction that returns the instance of the caller so that its chainable", () => {
      const subject = new Calculator(5);
      expect(subject.subtraction(5) instanceof Calculator).toEqual(true);
      expect(subject.subtraction(5) === subject).toEqual(true);
    });
  });

  describe("Multiplication", () => {
    test("Has a function called multiplication", () => {
      const subject = new Calculator(5);
      expect(subject.multiplication).toBeDefined();
    });

    test("Has a function called multiplication that multiplies the register by a value", () => {
      const subject = new Calculator(5);
      expect(subject.multiplication(2)).toEqual({ register: 10 });
    });

    test("Has a function called multiplication that returns the instance of the caller so that its chainable", () => {
      const subject = new Calculator(5);
      expect(subject.multiplication(5) instanceof Calculator).toEqual(true);
      expect(subject.multiplication(5) === subject).toEqual(true);
    });
  });

  describe("Division", () => {
    test("Has a function called division", () => {
      const subject = new Calculator(5);
      expect(subject.division).toBeDefined();
    });

    test("Has a function called division that divides the register by a value", () => {
      const subject = new Calculator(8);
      expect(subject.division(2)).toEqual({ register: 4 });
    });

    test("Has a function called Division that returns the instance of the caller so that its chainable", () => {
      const subject = new Calculator(5);
      expect(subject.division(5) instanceof Calculator).toEqual(true);
      expect(subject.division(5) === subject).toEqual(true);
    });
  });

  describe("Clear", () => {
    test("Has a function called clear", () => {
      const subject = new Calculator(5);
      expect(subject.clear).toBeDefined();
    });

    test("Has a function called clear that sets the register to 0", () => {
      const subject = new Calculator(8);
      expect(subject.clear()).toEqual({ register: 0 });
    });

    test("Has a function called Clear that returns the instance of the caller so that its chainable", () => {
      const subject = new Calculator(5);
      expect(subject.clear() instanceof Calculator).toEqual(true);
      expect(subject.clear() === subject).toEqual(true);
    });
  });

  describe("Clear", () => {
    test("Has a function called rpn", () => {
      const subject = new Calculator(5);
      expect(subject.rpn).toBeDefined();
    });

    test("addition", () => {
      const subject = new Calculator(0);
      expect(subject.rpn("1 2 +")).toEqual(3);
    });
    test("subtraction", () => {
      const subject = new Calculator(0);
      expect(subject.rpn("1 2 -")).toEqual(-1);
    });
    test("multiplication", () => {
      const subject = new Calculator(0);
      expect(subject.rpn("3 2 *")).toEqual(6);
    });
    test("divison", () => {
      const subject = new Calculator(0);
      expect(subject.rpn("8 2 /")).toEqual(4);
    });
    test("Multiple Expressions at once", () => {
      const subject = new Calculator(0);
      expect(subject.rpn("8 2 / 3 + 1 - 2 *")).toEqual(12);
    });
    describe("errors", () => {
      test("Checks for improper string format", () => {
        const subject = new Calculator(0);
        expect(subject.rpn("4 + 2")).toEqual(null);
      });
      test("Checks for strings shorter than 5", () => {
        const subject = new Calculator(0);
        let test = "";
        for (let i = 0; i < 5; i++) {
          expect(subject.rpn(test)).toEqual(null);
          test += "a";
        }
      });
      test("Checks for non strings", () => {
        const subject = new Calculator(0);
        expect(subject.rpn({})).toEqual(null);
      });
      test("Checks for nothing being passed in", () => {
        const subject = new Calculator(0);
        expect(subject.rpn()).toEqual(null);
      });
    });
  });
});
