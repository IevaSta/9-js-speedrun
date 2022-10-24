function tusciaFunkcija() {
    return false;
}

console.log(tusciaFunkcija());
console.log('----------------');

/*su testais, kurie leistu dauginti TIK SKAICIUS */

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
// console.log('skaicius ir string:', daugyba(7, 'string'));
// console.log('skaicius ir tuscias string:', daugyba(7, ''));
// console.log('skaicius ir boolean:', daugyba(7, true));
// console.log('booleanai:', daugyba(false, true));
// console.log('skaicius ir objektas tuscias:', daugyba(7, []));
// console.log('skaicius ir objektas netuscias:', daugyba(7, [1, 2, 3]));
console.log('----------------');


/*SKAITMENU KIEKIS*/

function numSize(num) {
    if (typeof num !== 'number'
        //|| isNaN(num) - nereikalingas, nes prigauna isFinite
        || !isFinite(num)) { //ne baigtinis
        return 'ERROR: netinkamas tipas.'
    }


    const numAsString = '' + num;
    let size = numAsString.length;

    if (num % 1 !== 0) {
        size--;
    }

    if (num < 0) {
        size--;
    }

    return size;
}

console.log(numSize('asd'));
console.log(numSize(NaN));
console.log(numSize(Infinity));
console.log(numSize(12345));
console.log(numSize(3.14));
console.log('----------------');



/*DIDZIAUSIAS SKAICIUS*/
function bigNum(list) {
    if (typeof list !== 'object') {
        return 'ERROR: netinkamas tipas'
    }
    if (list.length === 0) {
        return 'ERROR: sarasas negali buti tuscias'
    }

    let biggestNumber = list[0];

    for (let i = 0; i < list.length; i++) {
        const number = list[i];
        if (number > biggestNumber) {
            biggestNumber = number;
        }
    }


    return biggestNumber;
}

console.log(bigNum([1, 23, 4]));
console.log(bigNum([-1, -23, -4]));
console.log(bigNum([]));
console.log(bigNum('testas'));