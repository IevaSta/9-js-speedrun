//funkcijos praktika

function letters(text, step) {
    if (typeof text !== 'string') {
        return 'ERROR: Pirmas kintamas turi buti tekstas.'
    }

    if (text === '') {
        return 'ERROR: Tekstas negali buti tuscias.'
    }

    if (typeof step !== 'number'
        || !isFinite(step)
        || step % 1 !== 0) {
        return 'ERROR: Zingsnis turi buti tikras ir sveikasis skaicius.'
    }

    if (step === 0) {
        return 'ERROR: Zingsnis turi buti 0.'
    }

    if (step > text.length) {
        return 'ERROR: Zingsnis negali buti didesnis uz teksto ilgi.'
    }

    let raides = '';

    if (step > 0) {
        for (let i = step - 1; i < text.length; i += step) {
            const raide = text[i];
            raides += raide;
        }
    } else { //SU MINUSINIAIS SKAICIAIS!!!!!
        for (let i = text.length + step; i >= 0; i += step) {
            const raide = text[i];
            raides += raide;
        }
    }
    return raides;
}

// console.log(letters(1532, 2));
// console.log(letters('Asd', 'asd'));
// console.log(letters('Asd', NaN));
// console.log(letters('Asd', Infinity));
// console.log(letters('Asd', 1.5));
// console.log(letters('Asd', 0));
// console.log(letters('', 8));
// console.log('---------------');
console.log(letters('abcdefg', 2));
console.log(letters('abcdefg', -2));
