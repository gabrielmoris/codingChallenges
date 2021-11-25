let urlInput = process.argv[2];
//index
// const o = require("./index.js")
// o.infoUrl("http://127.0.0.1:8080/test?a=100&b=200")
const url = require("url");
function infoUrl (url) {
    const myUrl = new URL(url);
    console.log("The protocol is: ", myUrl.protocol);
    console.log("The host is: ", myUrl.host);
    console.log("The hostname is: ", myUrl.hostname);
    console.log("The port is: ", myUrl.port);
    console.log("The pathname is: ", myUrl.pathname);
    console.log("The query is: ", myUrl.search);
    // console.log("The value of the a parameter is: ", myUrl.searchParams);
    myUrl.searchParams.forEach((value ,key) => {

      console.log("The value of the "+ key + " parameter is: " + value) ;
    });
};
infoUrl(urlInput);
// console.log("url: ",url);
// console.log("url.parse(): ", url.parse("https://www.someWebsite.com/someInformation?scroll=infinite"))
// const myUrl = new URL(
//     "https://www.someWebsite.com/someInformation?scroll=infinite"
// );
// console.log("url.parse(): ", myUrl)
