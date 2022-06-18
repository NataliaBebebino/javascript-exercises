const reverseString = function(string) {
    let reversedString = "";
    let stringLength = string.length;

    for (let index = stringLength-1; index >= 0; index--) {
        reversedString += string[index];
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
