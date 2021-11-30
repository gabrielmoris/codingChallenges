const fs = require("fs");

module.exports.generateOverviewHtml = function () {
    //it should use readdir, (recomended syncronized method)
    //read the content of the projects directory
    //readdir returns an array of strings that contain the names of the content in the projects directory
    //we loop over that content, compose html that generates an a tag
    //the dfunction at the end returns that string of html
    const projects = fs.readdirSync(__dirname + "/projects", {
        withFileTypes: true,
    });
    let htmlToInsert = "";

    for (let i = 0; i < projects.length; i++) {
        let filePath = projects[i].name;
        let eachProject = projects[i].name;
        //  console.log(filePath)//this is all the paths

        htmlToInsert += `<a href='${filePath}'>${eachProject}</a><br>`;
    }
    return htmlToInsert;
};

// console.log(generateOverviewHtml());
