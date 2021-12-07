const secrets = require("./secrets");
// const { Key, Secret } = require("./secrets");
// console.log("secrets: ", Key);
const https = require("https");
const util = require("util");

//==========getToken promisified================
module.exports.getToken = util.promisify(getToken);

function getToken(callbackGetToken) {
    const creds = `${secrets.Key}:${secrets.Secret}`;

    const encodedCreds = Buffer.from(creds).toString("base64");

    const options = {
        host: "api.twitter.com",
        path: "/oauth2/token",
        method: "POST",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };

    function reqCallback(response) {
        if (response.statusCode != 200) {
            console.log(
                "Something went wrong in the authorization with Twitter API"
            );
            callbackGetToken(response.statusCode);
        }

        let body = "";
        response.on("data", (chunk) => {
            body += chunk;
        });
        response.on("end", () => {
            const parsedBody = JSON.parse(body);

            callbackGetToken(null, parsedBody.access_token);
        });
    }
    const req = https.request(options, reqCallback);
    req.end("grant_type=client_credentials");
}
//==============================================
//===============getTweets promisified =========
module.exports.getTweets = util.promisify(getTweets);

function getTweets(bearerToken, tweetSource, callbackGetTweets) {
    const optionsGet = {
        host: "api.twitter.com",
        path: `/1.1/statuses/user_timeline.json?screen_name=${tweetSource}&tweet_mode=extended`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${bearerToken}`,
        },
    };
    function reqCallbackTweets(responseTweets) {
        if (responseTweets.statusCode != 200) {
            console.log("Something went wrong reqesting Tweets");
            callbackGetTweets(responseTweets.statusCode);
        }

        let body = "";
        responseTweets.on("data", (chunk) => {
            body += chunk;
        });
        responseTweets.on("end", () => {
            let tweets;
            try {
                tweets = JSON.parse(body);
            } catch (e) {
                console.log("ERROR parsing TWEETS: ", e);
            }

            callbackGetTweets(null, tweets);
        });
    }
    const reqTweets = https.request(optionsGet, reqCallbackTweets);
    reqTweets.end();
}
//==============================================
module.exports.filterTweets = function filterTweets(tweets) {
    let dataTweets = [];
    for (let i = 0; i < tweets.length; i++) {
        if (tweets[i].entities.urls.length === 1) {
            let tweetsText = tweets[i].full_text;
            let tweetsUrl = tweets[i].entities.urls[0].url;
            let tweetsSource = tweets[i].user.name;

            tweetsText = tweetsText.replace(tweetsUrl, "");
            let eachTweet = {
                text: `${tweetsSource}: ${tweetsText}`,
                url: tweetsUrl,
            };
            dataTweets.push(eachTweet);
        }
    }

    return dataTweets;
};
