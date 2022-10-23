function tusciaFunkcija() {
    return false;
}

console.log(tusciaFunkcija());

/*su testais, kurie leistu dauginti tik skaicius */

function daugyba(a, b) {
    if (typeof a !== 'number') {
        return 'Pirmas parametras turi buti skaicius.';
    }

    if (isNaN(a)) {
        return 'Pirmas parametras turi buti tikras skaicius.';
    }

    if (typeof b !== 'number') {
        return 'Antras parametras turi buti skaicius.';
    }

    if (isNaN(b)) {
        return 'Pirmas parametras turi buti tikras skaicius.';
    }

    return a * b;
}

console.log('skaiciai:', daugyba(3, 8));
console.log('skaicius ir string:', daugyba(7, 'string'));
console.log('skaicius ir tuscias string:', daugyba(7, ''));
console.log('skaicius ir boolean:', daugyba(7, true));
console.log('booleanai:', daugyba(false, true));
console.log('skaicius ir objektas tuscias:', daugyba(7, []));
console.log('skaicius ir objektas netuscias:', daugyba(7, [1, 2, 3]));
