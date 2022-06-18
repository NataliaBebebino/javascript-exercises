const removeFromArray = function(originalArray, ...excludedArray) {
    let modifiedArray = [];

    originalArray.forEach(element => {
        if (!excludedArray.includes(element)) {
            modifiedArray.push(element);
        }
    });

    return modifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
