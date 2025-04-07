const reverseString = function (value) {

    let reversedValue = [];

    for (let i=value.length; i>=0; i--) {
        reversedValue.push(value[i])
    }

    return reversedValue.toString().split(",").join("")
}

// shows the return value
console.log(reverseString("Hello, World!"));

// Do not edit below this line
module.exports = reverseString;
