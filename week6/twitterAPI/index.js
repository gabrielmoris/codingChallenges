const express = require("express");
const { getToken, getTweets, filterTweets } = require("./twitter");
const app = express();
const PORT = 8080;
app.use(express.static("./ticker"));

app.get("/data.json", (req, res) => {
    // console.log("client requested data.json");

    //we need 4 things now
    //1. get the token
    getToken((err, bearerToken) => {
        // console.log("We have a Token: ", bearerToken);
        if (err) {
            console.log("Something went wrong in having the token");
            return res.sendStatus(500);
        }
        //2 make a request for the tweets using that token
        getTweets(bearerToken, (err, tweets) => {
            if (err) {
                console.log("Something went wrong in having the Tweets");
                return res.sendStatus(500);
            }
            //3 filter the tweets from last step
            
            const filteredTweets = filterTweets(tweets);
            // console.log(filteredTweets);
            //4 send back the filtered tweets
            res.json(filteredTweets);
        });
    });
});
app.listen(PORT, () => {
    console.log(
        `Twitter API Ticker is listenning 👂)))\n\nHERE------>   http://localhost:${PORT}`
    );
});
