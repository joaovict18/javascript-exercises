const repeatString = function(word, n) {
    let string = "";
    for (let i = 0; i < n; i++) {
        string += word;
    }
    return string
};

repeatString("hey", 3)

// Do not edit below this line
module.exports = repeatString;
