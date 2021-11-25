//index.js

// console.log("hello NodeJS you are cool");

// console.log("__dirname: ", __dirname); //console.log absolute path where this module is running in

// console.log("__filename: ", __filename); // absolute path to the folder including the file itself where this module is running in

// // PROCESS OBJECT

// console.log("process.argv: ", process.argv[0]);

// //MODULE

// console.log("module: ", module);
// //every module has an exports object, and this is where we add things to make them accesible across modules
// console.log("module.exports: ", module.exports)

// //OUR VERY FIRST OWN MODULE
// const starSwift = require("./starSwift");
// console.log("****** index.js, starSwift: ", starSwift);

// starSwift.sayHello()
// console.log(starSwift.starSwiftify("ONION"))

// //CORE NODE MODULES

// const os = require("os");
// console.log("os: ",os) //logs a big object with all the information about my OS
// console.log("os.platform: ",os.platform(), " home directory: ", os.homedir())

// const url = require("url");
// console.log("url: ",url);
// console.log("url.parse(): ", url.parse("https://www.someWebsite.com/someInformation?scroll=infinite"))
// const myUrl = new URL(
//     "https://www.someWebsite.com/someInformation?scroll=infinite"
// );
// console.log("url.parse(): ", myUrl)

// // THIRD PARTY PACKAGES

const { cyanBright } = require("chalk");
const chalk = require("chalk");
// console.log(chalk.red("HELLO DUDE!!"))
// console.log(chalk.magentaBright("ONION 🧅"))

// //EVENTS EMITERS
// //this events go after iWantAMuffin
// process.on("beforeExit", function () {
//     console.log("just about to exit the process");
// });

// //MY OWN EVENT

// process.on("iWantAMuffin", function () {
//     console.log("I wanr a muffin 🧁...");
// });

// //in order to trigger an event, we need to emit it
// setTimeout(() => {
//     process.emit("iWantAMuffin");
// }, 2000);

// //almost everything in NODE is asynchronous

// const fs = require("fs");
// //passing with correct filepath
// fs.readdir(__dirname, (err, content) => {
//     if (err) {
//         console.log(
//             chalk.red("something went wrong reading this directory", err)
//         );
//     }
//     console.log("content: ", content);
// });
// //passing it with wrong filepath
// fs.readdir(`${__dirname}/somethingThatDoesNotExist`, (err, content) => {
//     if (err) {
//         console.log(
//             chalk.red("something went wrong reading this directory", err)
//         );
//     }
//     console.log("content: ", content);
// });

//asynchronsity

function getUser(cb) {
    setTimeout(() => {
        const user = {
            name: "Gabriel",
            secretPowers: "play trumpet",
            lovesNode: true,
        };
        console.log("User has now value:", user);
        if (Math.floor(Math.random() * 3) === 2) {
            cb(new Error("no user data found sryyyyyyy!"));
        } else {
            cb(null, user);
        }
        //returns user;
    }, 5000);
}

// const myUserData = getUser();
function callBackForGetUser(err, val) {
    if (err) {
        console.log("something went wrong with the user: ", err);
    } else {
        console.log(
            "I am the callback passed to getUSer and I will have the user dara: ",
            val
        );
    }
}
getUser(callBackForGetUser);
