const headlines = require("./headlines");
const twApi = require("./twApi");
//I am making a fake copy of the export object of the module i pass to jest.
jest.mock("./twApi");

test("headlines filter our tweets what do not have exactly one link", () => {
    twApi.getTweets.mockResolvedValue([
        {
            entities: {
                urls: [
                    { url: "this will not make it out" },
                    {
                        url: "of the filter because this has two objects in the urls array",
                    },
                ],
            },
            full_text: "This is some full text I will never see",
        },
        {
            entities: { urls: [{ url: "www.spiced-academy.com" }] },
            full_text: "Hello",
        },
        {
            entities: { urls: [] },
            full_text: "This is some full text I will never see",
        },
    ]);
    return headlines().then((tweets) => {
        console.log("tweets inside the then of moveHeadlines test", tweets);
        expect(tweets.length).toBe(1);
        expect(tweets[0]).toEqual({
            text: "Hello",
            href: "www.spiced-academy.com",
        });
    });
});
