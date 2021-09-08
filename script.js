// Utility functions
const isNotNull = (str) => {
    if(str !== null) {
        return true;
    } else {
        return false;
    }
}

const hasRightLength = (str) => {
    if( str.length < 9) {
        return true;
    } else {
        return false;
    }
}

const hasUpperCaseCharacter = (str) => {
    return str.toLowerCase() != str;
};

const hasLowerCaseCharacter = (str) => {
    return str.toUpperCase() != str;
};

const hasDigit = (str) => {
    return /\d/.test(str);
};

const minimumConditionsReached = conditions => {
    // conditions is an array of booleans
    const trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};


// "Outer" function
const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};

// console.log(verifyPassword('Henkiehenkie'))
// console.log(verifyPassword('henkiehenkie'))

module.exports = {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
};