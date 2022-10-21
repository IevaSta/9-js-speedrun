/*
for - ciklas/loop

loop: for, while, for-in, for-of, foreach...

*/

const pazymiai = [10, 2];
let suma = 0;

/*
ciklas prasideda su reiksme nulis: let i=0;
nurodome kiek kartu turi suktis: i<5;
kokiu zingsniu daryti cikla: i++;
*/

for (let i=0; i< pazymiai.length; i++) {

    const pazymys = pazymiai [i];
    suma += pazymys;
}

const vidurkis = suma / pazymiai.length;
console.log(vidurkis);