const express = require("express");
const { getToken, getTweets, filterTweets } = require("./twitter");
const app = express();
const PORT = 8080;
app.use(express.static("./ticker"));
//==========With only 1 token==============
// app.get("/data.json", (req, res) => {
//     getToken()
//         .then((bearerToken) => getTweets(bearerToken))
//         .then((tweets) =>{
//             const filteredTweets = filterTweets(tweets);
//             res.json(filteredTweets);
//         })
//         .catch((err) => {
//             console.log("Something went wrong in having the Tweets: ", err);
//             return res.sendStatus(500);
//         });
// });

//=============With 3 sources==============

app.get("/data.json", (req, res) => {
    getToken()
        .then((bearerToken) => {
            return Promise.all([
                getTweets(bearerToken, "bbcworld"),
                getTweets(bearerToken, "nytimes"),
                getTweets(bearerToken, "newyorker"),
            ]);
        })
        .then((allThetweets) => {
            // console.log("all the tweets", allThetweets);
            //alltweets is an array with 3 arrays of each source
            const bbcTweets = allThetweets[0];
            const nytimesTweets = allThetweets[1];
            const newyorkerTweets = allThetweets[2];

            //#1 I should merge all this arrays in one
            //1st option is concat()
            // const mergedTweets= bbcTweets.concat(nytimesTweets,newyorkerTweets)
            //2nd option is spread operator
            const mergedTweets = [
                ...bbcTweets,
                ...nytimesTweets,
                ...newyorkerTweets,
            ];

            //#2 sort the tweets in reverse chronological order

            mergedTweets.sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at);
            });

            const filteredTweets = filterTweets(mergedTweets);
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
