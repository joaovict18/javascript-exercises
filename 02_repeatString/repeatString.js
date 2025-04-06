const repeatString = function(word, times) {
    string = ""
    if (times == 0 || times > 0) {
        for (let i=0; i<times; i++) {
            string += word
        }
    }
    else {
        string = "ERROR"
    }
    return string
}

// Do not edit below this line
module.exports = repeatString;
