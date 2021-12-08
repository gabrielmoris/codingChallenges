const { getAlbumNames } = require("./albums");
const spotify = require("./spotify");

jest.mock("./spotify");

test("album names are in alphabetical order", () => {
    spotify.search.mockResolvedValue({
        albums: {
            items: [{ name: "a" }, { name: "d" }, { name: "c" }],
        },
    });

    return getAlbumNames("meat loaf").then((albumNames) => {
        console.log(albumNames.slice().sort());
        expect(albumNames).toEqual(albumNames.slice().sort());
    });
});
