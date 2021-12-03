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

app.get("/projects/:project", (req, res) => {
    const requestedProject = req.params.project;
    for (let i = 0; i < projects.length; i++) {
        projects[i].selected = false;
        if (requestedProject === projects[i].directory) {
            projects[i].selected = true;
        }
    }
    const selectedProject = projects.find(
        (item) => item.directory == requestedProject
    );

    if (!selectedProject) {
        return res.sendStatus(404);
    }

    res.render("project", {
        layout: "main",
        projects,
        currproject: selectedProject,
    });
});

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
