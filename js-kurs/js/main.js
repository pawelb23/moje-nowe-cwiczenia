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

var c = (a + b)/b;
console.log(c);

var liczbyIlitery = ['abc', [2, 3, 5, 7], 'def', 3, 'LITERY']
//W console.log --- cztery w zwykłym nawiasie przed nawiasem kwadratowym z cyframi oznacza cztery elementy wewnątrz kwadratowego nawiasu. Cały ten nawias zostanie odczytany jako jeden element (tak naprawdę --- co można zobaczyć później w console.log --- dodając numer indeksu, który ma nasz wewnętrzny nawias)

console.log(liczbyIlitery);

console.log((liczbyIlitery[1]) + ' --- Właśnie tak dodajemy treść!!!');