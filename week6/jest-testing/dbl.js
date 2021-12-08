module.exports.dbl = function (n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(n)) {
                reject("bad number cannot double");
            } else {
                resolve(n * 2);
            }
        }, 2000);
    });
};
