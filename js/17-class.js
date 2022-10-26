/*
CLASS {}: savybiu ir metodu junginys/grupe.
savybes - kintamieji (info);
metodai - funkcionalumas;

Klases - receptura;
Objektas - pagal receptura pagamintas konkretus/apciuopiamas dalykas;
*/

class Bankomatas {
    constructor(street, color) {
        this.gatve = street;
        this.spalva = color;
        this.turnedOn = false;
        this.pinigu = 0;
    }

    switchOn() {
        this.turnedOn = true;
        console.log(`${this.gatve}: bankomatas ijuntas.`);
    }

    switchOff() {
        this.turnedOn = false;
        console.log(`${this.gatve}: bankomatas isjuntas.`);
    }

    cashIn(money) {
        if (!this.turnedOn) {
            console.log('Negali inesti, nes bankomatas neijungtas.');
            return;
        }
        if (typeof money !== 'number'
            || !isFinite(money)) {
            console.log('ERROR: inesami ne pinigai.');
            return;
        }
        if (money <= 0) {
            console.log('ERROR: minusiniu pinigu nera');
            return;
        }

        this.pinigu += money;
        console.log(`${this.gatve}: inesta ${money} pinigu.`);
    }

    cashOut(money) {
        if (!this.turnedOn) {
            console.log('Negali issigryninti, nes bankomatas neijungtas.');
            return;
        }
        if (typeof money !== 'number'
            || !isFinite(money)) {
            console.log('ERROR: isgryninami ne pinigai.');
            return;
        }
        if (money <= 0) {
            console.log('ERROR: minusiniu pinigu nera');
            return;
        }
        if (money > this.pinigu) {
            console.log(`ERROR: ${money} per didele suma, bankomate tiek pinigu nera`);
            return;
        }

        this.pinigu -= money;
        console.log(`${this.gatve}: isgryninta ${money} pinigu.`);
    }
}

const bankomatas1 = new Bankomatas('Didzioji g. 2', 'red');
// console.log(bankomatas1);
// console.log(bankomatas1.gatve);

const bankomatas2 = new Bankomatas('Mazoji g. 3', 'blue');
// console.log(bankomatas2);
// console.log(bankomatas2.spalva);



bankomatas1.switchOn();
// bankomatas1.switchOff();


bankomatas1.cashIn(5);
bankomatas1.cashIn(5);
bankomatas1.cashIn(5);
console.log(bankomatas1);
bankomatas1.switchOff();
bankomatas1.switchOn();
bankomatas1.cashOut(5);
// bankomatas1.cashOut(20);
console.log(bankomatas1);

console.log(bankomatas1.pinigu);


