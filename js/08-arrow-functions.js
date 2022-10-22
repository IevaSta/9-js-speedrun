const pirmas = 7;
const antras = 5;

//iprasta fukcija
function suma (a , b) {
return a+b;
}

const r1 = suma(pirmas, antras);
console.log(r1);


//kontamajam priskirta anonimine funkcija
const atimtis = function (a , b) {
    return a-b;
    }
    
const r2 = atimtis(pirmas, antras);
console.log(r2);

//awwor funkcija   function --->  =>
const dalyba = (a , b) => {
    return a/b;
    }
    
const r3 = dalyba(pirmas, antras);
console.log(r3);

//awwor funkcija   function --->  =>
//jei logikos bloke {} yra tik 1 procedura, galime nerasyti {} ir return
const daugyba = (a , b) => a*b;    
    
const r4 = daugyba(pirmas, antras);
console.log(r4);

//awwor funkcija   function --->  =>
//jei parametru bloke () yra tik 1 parametras, galime nerasyti ()
const kvadratu = a => a*a;    
    
const r5 = kvadratu(pirmas);
console.log(r5);