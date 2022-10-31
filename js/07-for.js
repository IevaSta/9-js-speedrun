/*
for - ciklas/loop

loop: for, while, for-of, foreach...
object loop: for-in (ziureti methods.js prie objektu)
*/

const pazymiai = [10, 2];


/*
ciklas prasideda su reiksme nulis: let i=0;
nurodome kiek kartu turi suktis: i<5;
kokiu zingsniu daryti cikla: i++;
*/

//FOR
let sumaFor = 0;
for (let i = 0; i < pazymiai.length; i++) {

    const pazymys = pazymiai[i];
    sumaFor += pazymys;
}

const vidurkisFor = sumaFor / pazymiai.length;
console.log(vidurkisFor);

//WHILE

/* daryk tol, kol tenkinsi salyga i<5
*/

let sumaWhile = 0;
let i2 = 0;

while (i2 < pazymiai.length) {
    const pazymys = pazymiai[i2];
    sumaWhile += pazymys;
    i2++
}

const vidurkisWhile = sumaWhile / pazymiai.length;
console.log(vidurkisWhile);

//FOR OF
/* jei darbas vyksta ne su tusciu masyvu
*/

let sumaForOf = 0;

for (const pazymys of pazymiai) {
    sumaForOf += pazymys;
}

const vidurkisForOf = sumaForOf / pazymiai.length;
console.log(vidurkisForOf);


//FOR EACH - leciausias is visu ciklu
/* sintakse: .forEach(() => {})
() parametrai: reiksmes, indeksai (pozicijos), masyvas
*/

let sumaForEach = 0;
pazymiai.forEach((a) => {
    sumaForEach += a;
});

const vidurkisForEach = sumaForEach / pazymiai.length;
console.log(vidurkisForEach);

