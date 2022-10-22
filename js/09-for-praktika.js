/*
Suskaiciuoti, ka gausime susumavus skaicius intervale tarp (imtinai):
0...0
0...4
0...100
574...815
-50...50
-70...30
*/

function sumaIntervale (nuo, iki) {
    let suma = 0;
    for (let i=nuo; i<=iki; i++) {
        suma += i;
        }
        return suma;
}
 console.log(sumaIntervale (0, 1));






 /*
 panaudojant cikla perrasiti tekstinio tipo kintamuju reiksmes is kito galo
 */


//SUVOKIMUI
function reverseString (text) {
    
    let reverse = '';
    const indeksas = text.length -1;
    
for (let i=0; i<text.length; i++) {
    const positionReverse = indeksas - i;
    const letterReverse = text[positionReverse]
    reverse += letterReverse;
}

return reverse;
}

console.log(reverseString('abcdef'));

//SPRENDIMAS nr 1

function reverseString2 (text) {
    
    let reverse = '';
    
for (let i=0; i<text.length; i++) {
    reverse = text[i] + reverse;
}

return reverse;
}

console.log(reverseString2('abcdef'));

//SPRENDIMAS nr 2 (nuo iki panaudojamas)

function reverseString3 (text) {
    
    let reverse = '';
    
for (let i=text.length-1; i>=0; i--) {
    reverse += text[i];
}

return reverse;
}

console.log(reverseString3('abcdef'));






 /*
 suskaiciuoti, kiek nurodytame intervale yra skaiciu, kurie dalijasi be liekanos is 3, 5 ir 7 atskirai:
 0-11

 rezulata pateikti tokiu formatu:
 -Skaičių intervale tarp a ir b, besidalijančių be liekanos iš c yra x vienetai.
 */


 function liekana (nuo, iki, daliklis) {

    let count = 0;

    for (let i = nuo; i <= iki; i++) {
        if (i % daliklis === 0) {
            count++;
        }
}
 
return `Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${count} vienetai.`;

 }
 console.log(liekana (0,11,3));
 console.log(liekana (0,11,5));
 console.log(liekana (0,11,7));
