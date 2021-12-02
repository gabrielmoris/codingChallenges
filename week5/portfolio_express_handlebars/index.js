const express = require("express");
const app = express();
const PORT = 8080;
const hb = require("express-handlebars");
const projects = require(`${__dirname}\\data.json`);
// console.log(names);

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static(`${__dirname}\\projects`));
app.use(express.static(`${__dirname}\\public`));

app.get("/", (req, res) => {
    res.render("home", {
        layout: "main",
        projects, //igual que projects: projects
    });
});


app.listen(PORT, () => {
    console.log(
        `Express Handlebars is listenning 👂)))\n\nHERE------>   http://localhost:${PORT}`
    );
});
