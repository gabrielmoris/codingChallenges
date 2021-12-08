const { getAlbumNames } = require("./albums");
const spotify = require("./spotify");

jest.mock("./spotify");

test("album names are in alphabetical order", () => {

    spotify.search.mockResolvedValue(
        
    )

    return getAlbumNames("meat loaf").then((albumNames) => {
        expect(albumNames).toEqual(albumNames.slice().sort());
    });
});
