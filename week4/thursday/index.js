//index
// const o = require("./index.js")
const url = require("url");
module.exports.infoUrl = function (url) {
    const myUrl = new URL(url);
    console.log("The protocol is: ", myUrl.protocol);
    console.log("The host is: ", myUrl.host);
    console.log("The hostname is: ", myUrl.hostname);
    console.log("The port is: ", myUrl.port);
    console.log("The pathname is: ", myUrl.pathname);
    console.log("The query is: ", myUrl.search);
    console.log("The value of the a parameter is: ", myUrl.searchParams[0]);
    console.log("The value of the b parameter is: ", myUrl.searchParams[1]);
};

// console.log("url: ",url);
// console.log("url.parse(): ", url.parse("https://www.someWebsite.com/someInformation?scroll=infinite"))
// const myUrl = new URL(
//     "https://www.someWebsite.com/someInformation?scroll=infinite"
// );
// console.log("url.parse(): ", myUrl)
