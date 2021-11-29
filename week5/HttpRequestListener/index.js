const http = require("http");
const { clearScreenDown } = require("readline");
const PORT = 8080;

const server = http.createServer(function (request, response) {
    //handling errors
    request.on("error", (err) => console.log("err in request: ", err));
    response.on("error", (err) => console.log("err in response: ", err));
    console.log("METHOD: ", request.method);
    console.log("URL: ", request.url);
    console.log("HEADERS: ", request.headers);
    console.log("///////////////////////////////////");

    if (request.method === "GET") {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");
        response.end(`<!doctype html>
<html>
<title>Hello World!</title>
<p>Hello World!</p>
</html>`);
    } else if (request.method === "HEAD") {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");
    } else if (request.method === "POST") {
        let body = "";

        request.on("data", (chunk) => {
            body += chunk;
        });
        request.on("end", () => {
            console.log("BODY: ", body),
            console.log("///////END OF BODY///////")
            response.setHeader("Location", "/")
            response.statusCode = 302;
            response.end(
            );
        });
    } else {
        response.statusCode = 405;
    }
});

server.listen(PORT, () => console.log(`Server is all ears to you: ${PORT}`));
