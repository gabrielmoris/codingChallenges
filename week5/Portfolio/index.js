const http = require("http");
const fs = require("fs");
const path = require("path");
const { generateOverviewHtml } = require("./generateOverview");
const { url } = require("inspector");
const contentType = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".jpg": "image/jpeg",
    ".gif": "image/gif",
    ".png": "image/png",
    ".svg": "image/svg+xml",
};

http.createServer((req, res) => {
    req.on("error", (err) => console.log("Error on request: ", err));
    res.on("error", (err) => console.log("Error on response: ", err));
    //i only allow GET request
    if (req.method != "GET") {
        console.log("NOT a GET request. That's not good!!");
        req.statusCode = 405; //method not allowed
        return res.end();
    }
    //we normalize so that we are capable to understand if there is any traversal attack attempts
    const filePath = path.normalize(__dirname + "\\projects" + req.url);
    // protection
    if (!filePath.startsWith(`${__dirname}\\projects\\`)) {
        console.log("INTRUDER ALERT");
        req.statusCode = 403; //forbidden
        return res.end();
    }
    //////////////////////////////////////////////////////////////////////////////
    if (req.url === "/") {
        console.log("here i will put the a tags!!!!!");
        req.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        return res.end(generateOverviewHtml());
    } else {
        //////////////////////////////////////////////////////////////////////////////
        //sending over the files that the user requested
        //#1
        fs.stat(filePath, (err, stats) => {
            if (err) {
                console.log("FILE doesn't exist");
                // console.log(filePath);
                res.statusCode = 404; //not found
                return res.end();
            }
            //if we get here that means the user requested something that exists

            if (stats.isDirectory()) {
                if (req.url.endsWith("/")) {
                    //if whathever the user is requesting is a directory the user should be served the index.html
                    res.setHeader("Content-Type", "text/html");
                    const readstreamIndexHtml = fs.createReadStream(
                        filePath + "index.html"
                    );
                    readstreamIndexHtml.pipe(res);

                    readstreamIndexHtml.on("error", (err) => {
                        console.log("error on readStream: ", err);
                        res.statusCode = 500; //internal server error
                        return res.end();
                    });
                } else {
                    //redirect the user to the same req.url with the slash
                    //check back with the http request listener
                    // exercise from yesterday
                    // set header status code and end response
                    // console.log("the user requests this url" + req.url);
                    res.setHeader("Location", req.url + "/");
                    res.statusCode = 302;
                    res.end();
                }
            } else {
                // console.log(
                //     "user wants a file!!!!",
                //     contentType[path.extname(filePath)]
                // );
                //if the user is requesting a file. that means we should send the file
                //send that file:
                //#1 send the correct header
                // console.log("File extension", path.extname(filePath));
                res.setHeader(
                    "Content-Type",
                    contentType[path.extname(filePath)]
                );
                //#2 create a readstream to that file
                const readstreamFile = fs.createReadStream(filePath);
                //#3 pipe the readstream to the response object
                readstreamFile.pipe(res);

                readstreamFile.on("error", (err) => {
                    console.log("error on readStreamFile: ", err);
                    res.statusCode = 500; //internal server error
                    return res.end();
                });
            }
        });
    }
}).listen(8080, () => console.log("Portfolio server is listening to you!"));
