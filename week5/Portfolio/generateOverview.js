const fs = require("fs");

module.exports.generateOverviewHtml = function () {
    const projects = fs.readdirSync(__dirname + "/projects", {
        withFileTypes: true,
    });
    let htmlToInsert = "";

    for (let i = 0; i < projects.length; i++) {
        let filePath = projects[i].name;
        let eachProject = projects[i].name;
        htmlToInsert += `<a href='${filePath}'>${eachProject}</a><br>`;
    }
    
    return htmlToInsert;
};

