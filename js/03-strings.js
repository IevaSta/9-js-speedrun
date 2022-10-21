/*
STRINGS

kabutes, backtick'as

teksto simboliu kiekis: .length

*/

// back slash panaudojimas
const a = "dvigubos kabutes (\")"
console.log(a);

// Client Ieva is 88 years old.
const cName = 'Ieva';
const age = 88;
const sentence = 'Client ' + cName + ' is ' + age + ' years old.';
console.log(sentence);

// backtick panaudojimas
const sentence2 = `Client ${cName} is ${age} years old.`
console.log(sentence2);

const n1 = 7;
const n2 = 5;
const ats = `${n1} + ${n2} = ${n1 + n2}`;
console.log(ats);

// .length()

const abc = 'abcde\'ghfkgch\\gchf\\\\d';
const abcDydis = abc.length;
console.log(abc);
console.log(abcDydis);
