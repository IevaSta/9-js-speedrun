/*
NUMBER
*/
console.log('---------NUMBER---------');
console.log((651651).toString()); //sutekstina
console.log('' + 651651); //sutekstina 
console.log((3.1415).toFixed(0)); //kiek norisi skaiciu po kablelio + suapvalina + GRAZINA STRINGA
console.log(parseFloat('17.53')); // pavercia skaiciumi
console.log(parseInt('17.53')); // pavercia sveikuoju skaiciumi, nesuapvalina
console.log(+'17.53'); //konvertuoja i skaiciu

console.log('_____Math class_____');
console.log(Math.PI)
console.log(Math.abs(-7))
console.log(Math.round(1.5))
console.log(Math.floor(1.5))
console.log(Math.ceil(1.5))
console.log(Math.random()) // [0...1)
console.log(Math.min(-1, 5, 6, 8)) //nepriima masyvo, priima tik skaicius
console.log(Math.max(-1, 5, 6, 8))

/*
STRING
*/
console.log('---------STRING---------');
console.log('Labas rytas, Op!'.length);
console.log('Labas rytas, Op!'.includes('y')); // ar yra substringas
console.log('Labas rytas, Op!'.includes('rytas '));
console.log('Labas rytas, Op!'.indexOf('a')); //kur stringe yra substringas ir randa artimiausia varianta
console.log('Labas rytas, Op!'.split(' ')); //per tarpa kerpa ir eliminuoja ta simboli
console.log('Labas rytas, Op!'.slice(6, 11));
console.log('Labas rytas, Op!'.toLowerCase());
console.log('Labas rytas, Op!'.toUpperCase());
console.log('    Labas     rytas,      Op!    '.trimStart());
console.log('    Labas     rytas,      Op!    '.trimEnd());
console.log('    Labas     rytas,      Op!    '.trim());
console.log('Labas rytas, Op!'.replace('rytas', 'vakaras')); //replace dirba tik viena karta
console.log('Labas rytas, Op!'.replaceAll('a', '_')); //keicia visus
console.log('Labas rytas, Op!'.replace(/a/g, '_')); //keicia visus su regex

/*
BOOLEAN
*/
console.log(true.toString()); // :)

/*
ARRAY
*/
const rytas = ['Labas', 'rytas', 'Op'];
console.log(rytas.join(' '));
console.log(rytas.includes('a')); //nera kaip pilno masyvo elemento
console.log(rytas.includes('rytas')); //yra kaip pilnas masyvo elementas
console.log(rytas.indexOf('a'));
console.log(rytas.indexOf('rytas'));
console.log(rytas.reverse());
console.log(rytas.push('ka tu?')); //unshift(prideda is priekio) -- pop(nuima nuo galo) -- shift (nuima is priekio)

//map, filter, sort, reduce, every, flat, forEach
console.log('map-individualiu reiksmiu konvertavimas');

const marks = [10, 2, 3, 58];
console.log(marks.map(item => item));
console.log(marks.map(item => 2 * item));

console.log('filter');
console.log(marks.filter(item => item));
console.log(marks.filter(item => item > 5));

const letters = ['a', 'b'];
console.log('reduce - sutraukia visas reiksmes i viena reiksme');
console.log(marks.reduce((total, item) => total + item, 0));
console.log(letters.reduce((total, item) => total + item));


console.log('sort');
console.log(marks.sort((a, b) => a - b));
console.log(marks.sort((a, b) => b - a));

console.log(letters.sort());
console.log(letters.sort().reverse());

console.log('flat');
const matrix = [
    [1, [10, 20], 2],
    [2, 3]
]
console.log(matrix.flat());

console.log('... - spread operator');
console.log(Math.min(1, 2, -5, 6));

const minMax = [1, 5, -4, 3];
console.log(Math.min(...minMax));


/*
OBJECT - neturi metodu
*/
console.log('---------OBJECT---------');

const person = {
    name: 'Petras',
    age: 99,
    isMarried: true
}

console.log(person.age);
console.log(person['age']);

console.log('automatinis objekto VISU raktazodziu istraukimas');
const personKeys = Object.keys(person)
console.log(personKeys);

console.log('automatinis objekto VISU reiksmiu istraukimas');
for (const key of personKeys) {
    console.log(key, ':', person[key]);
};

//FOR-IN -----> ciklas, tik objektams naudojamas
console.log('FOR-IN');
for (const key in person) {
    console.log(key, ':', person[key]);
}

console.log('... - spread operator (naudojimas objekte)');

// console.log({ ...person, car: 'Tesla' });

const newPerson = { ...person, car: 'Tesla' };
console.log(newPerson);




// const a = {
//     a: 'a',
//     b: 'b'
// }

// const b = {
//     b: 'c',
//     d: 'd'
// }

// console.log(Object.assign(a, b));




/*
DESTRUCTURING - destrukturizacimas
*/
console.log('---------DESTRUCTURING---------');

const skaiciai = [10, 2, 8];
const pirmasSkaicius = skaiciai[0];

const [a, b, c] = skaiciai;
console.log(a, b, c);


//destrukturizacimas su objektais
const car = {
    name: 'T',
    model: 'X',
    color: 'red'
}

const { name } = car;
console.log(name);

/*
RANDOM
*/
console.log('---------RANDOM---------');
const random = Math.floor(Math.random() * 10); //nuo 0 iki 9
console.log(random);


console.log('---------RANDOM nuo iki funkcija---------');
function randomF(nuo, iki) {
    return nuo + Math.floor(Math.random() * (iki - nuo + 1));
}

console.log(randomF(5, 9));