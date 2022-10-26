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

/*
OBJECT
*/