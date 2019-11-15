const Calculator = require("./main");
const http = require("http");
const port = 8080;

function parseUrl(url) {
  url = url.split("?")[1].split("&"); //creates an array of the paramerters.
  return url[0].split('"')[1]; //only sending back the contents of the first parameter
}

function parseParam(param) {
  const delims = ["+", "-", "/", "*"];
  if (param.includes(" ")) return param.split(" ");

  let answer = [];

  for (par of param) {
    if (delims.includes(par)) {
      answer.push(param.substring(0, param.indexOf(par)));
      answer.push(par);
      param = param.substring(param.indexOf(par) + 1, param.length);
    }
  }
  answer.push(param);
  return answer;
}

function evaluate(arr) {
  let calc = new Calculator(parseFloat(arr[0]));
  const evaluateExpression = (exp, val) => {
    switch (exp) {
      case "+":
        calc.addition(val);
        break;
      case "-":
        calc.subtraction(val);
        break;
      case "/":
        calc.division(val);
        break;
      case "*":
        calc.multiplication(val);
        break;
    }
  };
  for (let i = 1; i < arr.length; i += 2) {
    evaluateExpression(arr[i], parseFloat(arr[i + 1]));
  }
  return calc.equals();
}

http
  .createServer((req, res) => {
    if (req.method !== "GET") req.statusCode = 400;
    if (req.url.includes("/calculate")) {
      let url = decodeURI(req.url);
      let eval = parseParam(parseUrl(url));
      console.log(evaluate(eval));
      //res.write(evaluate(eval));
    }
    res.end();
  })
  .listen(port);

module.exports = { parseUrl, parseParam };
