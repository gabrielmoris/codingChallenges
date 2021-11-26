const fs = require("fs");

function logSizes(directoryPath) {
    fs.readdir(directoryPath, { withFileTypes: true }, (err, content) => {
        if (err) {
            console.log("Error: ", err);
            return;
        }

        for (let i = 0; i < content.length; i++) {
            if (content[i].isFile()) {
                fs.stat(
                    directoryPath + "/" + content[i].name,
                    (err, content) => {
                        if (err) {
                            console.log("Error: " + err);
                            return;
                        }
                        console.log(directoryPath, " ", content.size); //
                    }
                );
            } else {
                //recursion to keep reading in the nested directories
                const directoryPath2 = directoryPath + "/" + content[i].name;
                // console.log("recursion", directoryPath);
                logSizes(directoryPath2);
            }
        }
    });
}

// logSizes(`C:/Users/gabri/Desktop/spiceAcadeny/fun-with-fs/files`);
logSizes(`${__dirname}/files`);
