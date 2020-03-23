console.log(`ES6(JS6) - szkolenie`);

console.log(``);

// let i const
// Słowo kluczowe let pozwala deklarować zmienne. W odróżnieniu od wysłużonego var (var jest ograniczany tylko przez funkcje i przez to są problemy z zasięgiem),
// let przestrzega zakresu (kontekstu), w którym tworzymy zmienną; const jest bardzo
// podobne z tym, że raz przypisanej wartości nie można zmienić (czyli const to stała wartość, której nie można zmienić).
// let i const mają zasięg blokowy czyli są widoczne tylko wewnątrz swojego bloku.
// Bloki oznaczamy klamrami {} czyli np. function () {}  czy  if () {}  lub  for () {}

console.log(`Przykład 1`);

if (true) {

    var zmiennaTypuVar = 10;

    let zmiennaTypuLet = 30;

    const zmiennaTypuConst = 50;

}

console.log(`Zmienna typu "var" po za blokiem jest widoczna i jej wartość wynosi --- ` + zmiennaTypuVar); //w konsoli bedzie widoczny wynik

// console.log(zmiennaTypuLet); //w konsoli nie zobaczymy wyniku, gdyż po za blokiem (ograniczonym klamrami) zmienna typu let czy const jest niewidoczna

// console.log(zmiennaTypuConst); //w konsoli nie zobaczymy wyniku, gdyż po za blokiem (ograniczonym klamrami) zmienna typu let czy const jest niewidoczna

console.log(``);

//==================

console.log(`Przykład 2`);

if (true) {

    let zmiennaTypuLet = 100;

    console.log(`Zmienna typu "let" w bloku ma wartość --- ` + zmiennaTypuLet);

    zmiennaTypuLet = 150;

    console.log(`Nadpisana wartość dla zmiennej typu "let" w bloku, teraz wynosi --- ` + zmiennaTypuLet);

}

console.log(``);

//==================

console.log(`Przykład 3`);

if (true) {

    const zmiennaTypuConst = 70;

    console.log(`Zmienna typu "const" w bloku ma wartość --- ` + zmiennaTypuConst);

    // zmiennaTypuConst = 75;   
    //Jeżeli będziemy chcieli zmienić wartość zmiennej typu const, czyli odkomentujemy powyższą zmienną i przypiszemy jej nową wartość w konsoli zobaczymy automatycznie błąd, gdyż zmienna typu const ma jedną stałą wartość, której później już nie można zmieniać. 

}

console.log(``);

//===================