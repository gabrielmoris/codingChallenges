const chalk = require("chalk");
// console.log(chalk.cyan("this will be cyan"))
// console.log(chalk.magenta("this will be magenta"))
const queryString = require("querystring");
const http = require("http");
const server = http.createServer((req, res) => {
    req.on("err", (err) => console.log("ERROR in request: ", err));
    res.on("err", (err) => console.log("ERROR in response: ", err));
    //on inconming GET requests I want to serbe the user a form that they can submit
    if (req.method === "GET") {
        res.write(`<!doctype html>
<html>
<title>Colors</title>
<form method="POST">
  <input type="text" name="first" placeholder="first name" autocomplete="off">
  <select name="color">
    <option value="red">red</option>
    <option value="blue">blue</option>
    <option value="green">green</option>
    <option value="yellow">yellow</option>
    <option value="gray">gray</option>
    <option value="magenta">magenta</option>
    <option value="cyan">cyan</option>
  </select>
  <button type="submit">Go</button>
</form>
</html>`);
        return res.end();
    }
    if (req.method === "POST") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        }).on("end", () => {
            // console.log("request is done streaming data");
            // console.log("body: ", body);
            //we are parsing our body so that we can turn our
            //query string in an actual javascript object
            const parsedBody = queryString.parse(body);
            // console.log("parsed body: ", parsedBody);
            res.setHeader("Content-Type", "text/html");
            res.statusCode = 200;
            res.write(
                `<a href="http://localhost:8080"><h1 style="color:${parsedBody.color}">Hello ${parsedBody.first}</h1></a>`
            );

            console.log(chalk[parsedBody.color](`hello!! ${parsedBody.first}`));
            return res.end();
        });
    }
});

server.listen(8080, () => console.log("colorful server listening!!!👂"));
