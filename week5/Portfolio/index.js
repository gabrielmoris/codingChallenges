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

    if (req.method != "GET") {
        console.log("NOT a GET request. That's not good!!");
        req.statusCode = 405; //method not allowed
        return res.end();
    }

    const filePath = path.normalize(__dirname + "\\projects" + req.url);
    // protection
    if (!filePath.startsWith(`${__dirname}\\projects\\`)) {
        console.log("INTRUDER ALERT");
        req.statusCode = 403; //forbidden
        return res.end();
    }

    if (req.url === "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        return res.end(generateOverviewHtml());
    } else {
        //sending over the files that the user requested

        fs.stat(filePath, (err, stats) => {
            if (err) {
                console.log("FILE doesn't exist");
                res.statusCode = 404; //not found
                return res.end();
            }

            if (stats.isDirectory()) {
                if (req.url.endsWith("/")) {
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
                    res.setHeader("Location", req.url + "/");
                    res.statusCode = 302;
                    res.end();
                }
            } else {
                res.setHeader(
                    "Content-Type",
                    contentType[path.extname(filePath)]
                );
                const readstreamFile = fs.createReadStream(filePath);
                readstreamFile.pipe(res);

                readstreamFile.on("error", (err) => {
                    console.log("error on readStreamFile: ", err);
                    res.statusCode = 500; //internal server error
                    return res.end();
                });
            }
        });
    }
}).listen(8080, () => console.log("Portfolio server is listening to you!👂👂"));
