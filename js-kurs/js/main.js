'use strict';

console.log('czy działa');

var a = 5;
a += 90;

console.log(a);

a++;
console.log(a);

var b = 4;
b++;
console.log(b);

var c = (a + b) / b;
console.log(c);

var liczbyIlitery = ['abc', [2, 3, 5, 7], 'def', 3, 'LITERY']
//W console.log --- cztery w zwykłym nawiasie przed nawiasem kwadratowym z cyframi oznacza cztery elementy wewnątrz kwadratowego nawiasu. Cały ten nawias zostanie odczytany jako jeden element (tak naprawdę --- co można zobaczyć później w console.log --- dodając numer indeksu, który ma nasz wewnętrzny nawias)

console.log(liczbyIlitery);

console.log((liczbyIlitery[1][2]) + ' --- Właśnie tak dodajemy treść!!! Super sprawa - pierwszy nawias wskaże nam nawias kwadratowy z cyframi, zaś drugi - wyszuka nam konkretnej cyfry w tym nawiasie kwadratowym z cyframi!!! :)');

//===================================

console.log('============================');

var autka = ['Maluch', 'Duży Fiat', 'Polonez', 'Żuk', 'Syrenka', 'Warszawa'];

autka.push('Trabant');

var autkoZpushem = 'Trabant';

for (var i = 0; i <= 6; i++) {
    if (i == 4) {
        console.log('Ten samochód kojarzy się z Warszawą --- ' + autka[i]);
    } else if (i == 5) {
        console.log('Bardzo dobra nazwa --- ' + autka[i]);
    } else if (autka == autkoZpushem) {
        console.log('Do tego auta użyłem push-a --- ' + autka[i]);
    } else {
        console.log('Legenda PRL-u --- ' + autka[i]);
    }
}

console.log('============ Poniżej wypisane są wszystkie autka (z uwzględnieniem push-a) ============');

console.log(autka);

console.log('============================');

var cyfraLiczba = 99;
while (cyfraLiczba >= 0) {
    console.log('100 razy w dół!');
    cyfraLiczba--;
}