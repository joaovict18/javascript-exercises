const reverseString = function(string) {
    let splitString = string.split('');

    // line above caused a bug because it had only string.length, but the real string length is from the length of it until itself minus 1
    const STRING_LENGTH = string.length - 1;
    let reversedString = "";

    for (let i=STRING_LENGTH; i>=0; i--) {
        reversedString += splitString[i];
    }

    // return reversedString properly
    return reversedString;
};

// shows the return value
console.log(reverseString("Hello, World!"));

// Do not edit below this line
module.exports = reverseString;
