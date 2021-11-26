const fs = require("fs");

function mapSizes(directoryPath) {
    let mapObject = {};
    let contentDirs = fs.readdirSync(directoryPath, { withFileTypes: true });
    // console.log(contentDirs);
    for (let i = 0; i < contentDirs.length; i++) {
        if (contentDirs[i].isFile()) {
            let siceFile = fs.statSync(
                directoryPath + "/" + contentDirs[i].name
            ).size;
            mapObject[contentDirs[i].name] = siceFile;
        } else {
            let directoryPath2 = directoryPath + "/" + contentDirs[i].name;
            let nestedMapObject = mapSizes(directoryPath2);
            mapObject[contentDirs[i].name] = nestedMapObject;
        }
    }
    return mapObject;
}

// console.log(mapSizes(`${__dirname}/files`));

const path = __dirname + "/pathObject.json";
try {
    const stringedObj = JSON.stringify(mapSizes(`${__dirname}/files`), null, 8);
    fs.writeFileSync(path, stringedObj);
} catch (e) {
    console.log("Error in making string: ", e); //logs 'ReferenceError: asdfasfasf is not defined'
}
