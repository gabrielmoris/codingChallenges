const express = require("express");
const { getToken, getTweets, filterTweets } = require("./twitter");
const app = express();
const PORT = 8080;
app.use(express.static("./ticker"));

app.get("/data.json", (req, res) => {
    getToken()
        .then((bearerToken) => getTweets(bearerToken))
        .then((tweets) =>{
            const filteredTweets = filterTweets(tweets);
            res.json(filteredTweets);
        })
        .catch((err) => {
            console.log("Something went wrong in having the Tweets: ", err);
            return res.sendStatus(500);
        });
});

app.listen(PORT, () => {
    console.log(
        `Twitter API Ticker is listenning 👂)))\n\nHERE------>   http://localhost:${PORT}`
    );
});
