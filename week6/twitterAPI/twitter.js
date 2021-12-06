const secrets = require("./secrets");
// const { Key, Secret } = require("./secrets");
// console.log("secrets: ", Key);
const https = require("https");

module.exports.getToken = function gettoken(callbackGetToken) {
    //this function will obtain the bearerToken from Twitter
    const creds = `${secrets.Key}:${secrets.Secret}`;
    // console.log("Creds: ", creds);
    const encodedCreds = Buffer.from(creds).toString("base64");
    // console.log("Encoded creds: ", encodedCreds);
    const options = {
        host: "api.twitter.com",
        path: "/oauth2/token",
        method: "POST",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };

    //this is the function that will run when twitter API answers my request
    function reqCallback(response) {
        // console.log("response.statusCode: ", response.statusCode);
        if (response.statusCode != 200) {
            console.log(
                "Something went wrong in the authorization with Twitter API"
            );
            callbackGetToken(response.statusCode);
        }
        //If i am here i have the token to obtain from the body
        let body = "";
        response.on("data", (chunk) => {
            body += chunk;
        });
        response.on("end", () => {
            // console.log("body: ", body);
            const parsedBody = JSON.parse(body);
            // console.log("ParsedBody: ", parsedBody);
            callbackGetToken(null, parsedBody.access_token);
        });
    }
    const req = https.request(options, reqCallback);
    req.end("grant_type=client_credentials");
};

module.exports.getTweets = function getTweets(bearerToken, callbackGetTweets) {
    //this function gets the tweets from Twitter API
    const optionsGet = {
        host: "api.twitter.com",
        path: "/1.1/statuses/user_timeline.json?screen_name=nytimes&tweet_mode=extended",
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
        //If i am here i have the tweets to obtain from the body?
        let body = "";
        responseTweets.on("data", (chunk) => {
            body += chunk;
        });
        responseTweets.on("end", () => {
            // console.log("Tweets: ", body);
            let tweets;
            try {
                tweets = JSON.parse(body);
                // console.log(tweets);
            } catch (e) {
                console.log("ERROR parsing TWEETS: ", e);
            }

            callbackGetTweets(null, tweets);
        });
    }
    const reqTweets = https.request(optionsGet, reqCallbackTweets);
    reqTweets.end();
};

module.exports.filterTweets = function filterTweets(tweets) {
    //this function will filter/cleanup the response we receiverd from Twitter
    //and narows down that data to what our client side actually needs( only an href and linktext)
    let dataTweets = [];
    for (let i = 0; i < tweets.length; i++) {
        if (tweets[i].entities.urls.length === 1) {
            let tweetsText = tweets[i].full_text;
            let tweetsUrl = tweets[i].entities.urls[0].url;
            tweetsText = tweetsText.replace(tweetsUrl, "");
            let eachTweet = {
                text: tweetsText,
                url: tweetsUrl,
            };
            dataTweets.push(eachTweet);
        }
    }


    return dataTweets;
};
