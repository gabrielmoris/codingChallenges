const { TestWatcher } = require("@jest/core");
const { dbl } = require("./dbl");

//dbl returns argument times 2
//in async I have to return and use promisified way to call the function ( .then(value of response)=>{})
test("dbl returns argument times 2 when i passed a num", () => {
    return dbl(8).then((resVal) => {
        expect(resVal).toBe(16);
    });
});

//dbl returns "bad number cannot double"
test('dbl rejects with "bad number cannot double" if a NaN is passed', ()=>{
    return dbl("cupcake").catch(err =>{
        expect(err).toBe("bad number cannot double");
    })
});