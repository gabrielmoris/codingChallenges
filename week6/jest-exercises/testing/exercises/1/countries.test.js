const { find } = require("./countries");

test("When find is passed an empty string, it returns an empty array", () => {
    expect(find("")).toEqual([]);
});

test("The array that it returns contains no more than four matches", () => {
    expect(find("a").length).toBe(4);
});

test("The search is case insensitive", () => {
    expect(find("AlBaNiA")).toEqual(["Albania"]);
});

test("If there are no matching countries, an empty array is returned", () => {
    expect(find("Spanien").length).toBe(0);
});
