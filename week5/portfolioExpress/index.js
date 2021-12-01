const express = require("express");
const { nextTick } = require("process");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;
const fs = require("fs");
const path = require("path");
const { generateOverviewHtml } = require("./generateOverview");

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    if (req.cookies.checked === "true" || req.url === "/cookies") {
        next();
    } else {
        res.cookie("URL", req.url);
        res.redirect("/cookies");
    }
}); //middleware

app.get("/cookies", (req, res) => {
    res.sendFile(`${__dirname}\\cookiesForm.html`);
});
app.post("/cookies", (req, res) => {
    if (req.body.checked === "on") {
        res.cookie("checked", "true");
        res.redirect(req.cookies.URL);
    }
});
app.get("/", (req, res) => {
    res.send(generateOverviewHtml());
});
app.use("/", express.static(`${__dirname}\\projects`));

app.listen(PORT, () => {
    console.log(
        `Express Portfolio is listenning 👂)))\n\nHERE------>   http://localhost:${PORT}`
    );
});
