var newVar = 'string';

var getName = newVar.toUpperCase();

console.log(getName);

var regExp = new RegExp('witaj', 'g');

console.log(regExp);

var stringLength = newVar.length;

console.log(stringLength);

var numberRan = Math.random();

var numberRanTwo = Math.floor(numberRan * 4);

console.log(numberRan);

console.log(numberRanTwo);

//-----------------------------------

function show() {

    let args = Array.from(arguments);

    return args;

}

console.log(show(1, 'foo', null));