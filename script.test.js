const functions = require('./script.js')

// 1) password shorter/longer than 9 characters
test('password is shorter than 9 characters', () => {
    expect(functions.hasRightLength('HenkHenk')).toBeTruthy(); //truthy
})

test('password is not shorter than 9 characters', () => {
    expect(functions.hasRightLength('HenkHenkHenk')).toBeFalsy(); //falsy
})

// 2) password is not null / is null
test('password is not null', () => {
    expect(functions.isNotNull('henkie1')).toBeTruthy(); //truthy
})

test('password is null', () => {
    expect(functions.isNotNull(null)).toBeFalsy(); //falsy
})

// 3) password has 1 or more uppercases
test('password has 1 or more uppercases', () => {
    expect(functions.hasUpperCaseCharacter('HenkHenk')).toBeTruthy(); //truthy
})

test('password has no uppercases', () => {
    expect(functions.hasUpperCaseCharacter('henkhenk')).toBeFalsy(); //falsy
})

// 4) password has 1 or more lowercases
test('password has 1 or more lowercases', () => {
    expect(functions.hasLowerCaseCharacter('HaLLO')).toBeTruthy(); //truthy
})

test('password has no lowercases', () => {
    expect(functions.hasLowerCaseCharacter('HALLO')).toBeFalsy(); //falsy
})

// 5) password has 1 or more numbers
test('password has 1 or more numbers', () => {
    expect(functions.hasDigit('henkie1')).toBeTruthy(); //truthy
})

test('password has no numbers', () => {
    expect(functions.hasDigit('henkie')).toBeFalsy(); //falsy
})



//main function tests ----------------------------------------

// testing verifyPassword function
test('all conditions for password are met', () => {
    expect(functions.verifyPassword('henkie1')).toBeTruthy(); //truthy
})

test('all conditions for password are met', () => {
    expect(functions.verifyPassword('Henkie1henkie')).toBeTruthy(); //truthy
})

test('not all conditions for password are met', () => {
    expect(functions.verifyPassword('henkiehenkie')).toBeFalsy(); //falsy
})

test('not all conditions for password are met', () => {
    expect(functions.verifyPassword('')).toBeFalsy(); //falsy
})


