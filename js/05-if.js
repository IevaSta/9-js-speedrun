/*
if

Sablonai:
if () {}
if () {} else {}
if () {} else if {}
if () {} else if {} else {}
if () {} else if {} ... else if {} else {}

Palyginimo operatoriai:
- visi >, <, <=, >=, ==, !=, ===, !==
- naudotini >, <, <=, >=, ===, !==
- NEnaudotini ==, !=  (patikrina reiksme, nepatikrina tipo)

*/

const a =77;
const b=55;

if (a>b) {
console.log('A yra daugiau uz b');
} else {
console.log('A nera daugiau uz b');
}


const day = 6;

if (day === 6) {
    console.log('sestadienis');
} else if ( day === 7) {
    console.log('sekmadienis');
} else {
 console.log('darbo diena');
}

//nestinimas

const akiuSpalva = 'ruda';

if (akiuSpalva === 'zalia') {
    console.log('zaliaakis');
} else {
    if (akiuSpalva === 'melyna') {
    console.log('melynakis');
    } else {
        console.log('akys nei zalios, nei melynos');
    }
}