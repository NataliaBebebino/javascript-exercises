const repeatString = function(string, number) {
    if (number < 0) {
        return "ERROR";
    }

    let message = "";

    for (let index = 0; index < number; index++) {
        message += string;
    }
    return message;
};

// Do not edit below this line
module.exports = repeatString;
