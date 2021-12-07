const { readdir, stat } = require("fs").promises;

function logSizes(directoryPath) {
    return readdir(directoryPath, { withFileTypes: true })
        .then((content) => {
            //create a variable that should be an array and will keep track of any promise generate by the for loop.
            let arrayOfPromises = [];
            for (let i = 0; i < content.length; i++) {
                if (content[i].isFile()) {
                    //the call to stat should be pushed into our array of promises
                    arrayOfPromises.push(
                        stat(directoryPath + "/" + content[i].name).then(
                            (content) => {
                                console.log(directoryPath, " ", content.size);
                            }
                        )
                    );
                } else {
                    const directoryPath2 =
                        directoryPath + "/" + content[i].name;
                    //recursion to keep reading in the nested directories
                    //push the call to logsizes into the array of promises
                    arrayOfPromises.push(logSizes(directoryPath2));
                }
            }
            //return a call to promises.all and pass to it the array of promises, all the functions will wait here until i return this.
            return Promise.all(arrayOfPromises);
        })
        .catch((err) => {
            console.log("ERROR: ", err);
        });
}


logSizes(__dirname + "/files").then(() => console.log("and... \n...done!"));
