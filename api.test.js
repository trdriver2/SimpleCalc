const { parseUrl, parseParam } = require("./api");
describe("API functions", () => {
  test("has a parse function", () => {
    expect(parseUrl).toBeDefined();
  });
  test("has a parse function that can turn url parameters into strings", () => {
    expect(parseUrl('/calculate?q="1+2"')).toEqual("1+2");
  });
  test("has a function called parseParam", () => {
    expect(parseParam).toBeDefined();
  });
  test("has a parse function that can turn a string into an array of numbers and expressions", () => {
    expect(parseParam("1+2/3*4+5")).toEqual([
      "1",
      "+",
      "2",
      "/",
      "3",
      "*",
      "4",
      "+",
      "5"
    ]);
  });
});
