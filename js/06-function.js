/*
FUNKCIJA

-return yra statement'as, kuris nurodo kad funkcija uzbaigia darba

*/


/*
visi mokiniai turi tik 4 pazymius ir reikia suskaiciuoti vidurki
*/

const petras = [10, 4, 8, 2];
const maryte = [10, 7, 6, 2];
const jonas = [2, 4, 6, 2];
const ona = [6, 4, 8, 8];

function vidurkis (pazymiuSarasas) {
    let pazymiuSuma = 0;
    pazymiuSuma += pazymiuSarasas[0];
    pazymiuSuma += pazymiuSarasas[1];
    pazymiuSuma += pazymiuSarasas[2];
    pazymiuSuma += pazymiuSarasas[3];


return pazymiuSuma/pazymiuSarasas.length;
}

const petroVidurkis = vidurkis(petras);
console.log('Petras: ', petroVidurkis);

/*
Funkcija gauna teksta ir turi grazinti sakini:
"Vardo pirma raide yra [V] ir vardas sudarytas is [5] raidziu."
*/

function vardoAnalize (a) {
return `Vardo pirma raide yra ${a[0]} ir vardas sudarytas is ${a.length} raidziu.`;
};

const petroVardas = vardoAnalize ('Petras');
console.log(petroVardas);