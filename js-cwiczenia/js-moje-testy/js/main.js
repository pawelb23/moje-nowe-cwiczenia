'use strict';

console.log('Hello World!!!');

console.log("");

var testQuerySelector = document.querySelector(".link-test").innerText;

console.log(testQuerySelector);

console.log("");

var testParent = document.getElementById("container-two").parentNode;
//var testParent = document.getElementById("container-two").parentElement;//zwraca to samo co parentNode (powyżej)

console.log(testParent);

console.log("");

var testChildeNode = document.getElementById("container-two").childNodes;

//var testChildeNode = document.getElementById("container-two").childNodes[1]; //Zostanie wyszukany konkretny element

console.log(testChildeNode);

console.log("");

var testChildren = document.getElementById("container-two").children;

console.log(testChildren);

console.log("");

var testFirstChild = document.getElementById("container-two").firstChild;

console.log(testFirstChild);

console.log("");

var testLastChild = document.getElementById("container-two").lastChild;

console.log(testLastChild);

console.log("");

console.log(document.getElementById("link").nextSibling);

console.log("");

console.log(document.getElementById("link").nextSibling.nodeType); //Własność 'nodeType' zwraca typ danego węzła w postaci numeru:

//• 1 – element HTML
//• 2 – atrybut elementu
//• 3 – tekst
//• 8 – komentarz
//• 9 – dokument
//• 10 – dokument definicji

console.log("");

console.log(document.getElementById("link").previousSibling);

console.log("");

var btn = document.createElement("button");// tworzy element <button>

document.querySelector(".link-test").appendChild(btn);//dodajemy wyżej stworzony znacznik jako ostatnie dziecko do podanego węzła

console.log(btn);

console.log("");

var textBtn = document.createTextNode("Click me");// tworzy tekst

btn.appendChild(textBtn);//dodajemy tekst do utworzonego wcześniej buttona

console.log(btn);

console.log("");

var classBtn = document.createAttribute("class");// tworzy atrybut - class

btn.setAttributeNode(classBtn);//ustawiamy class dla buttona, ale bez wartości

classBtn.value = "push-the-button";//doda wartość --- "push-the-button" do class (jeżeli class będzie pusta) stworzonego wcześniej buttona --- jeżeli class będzie zajęta to to utworzy nam 'value="push-the-button"' --- value jest podstawowym atrybutem, więc jeżeli nie przypiszemy tej metody do pustego class to zawsze zapisze się to nam jako value ------- przykład będzie poniżej 'var newTestValue'

console.log(document.querySelector("#container-two span:first-child"));

console.log("");

btn.setAttribute("class", "first-class-test");//dodajemy nową klasę wraz z wartością lub nadpisujemy starą klasę i wartość, jeżeli już jakaś klasa jest (nie musi to być klasa - dowolny atrybut wraz z wartością) --- w tym przykładzie ta klasa i jej wartość nadpiszą --- class="push-the-button", która jest wyżej

document.querySelector(".first-class-test").classList.add("second-class-test");//tak dodamy drugą klasę czyli "second-class-test" do już wcześniej istniejącej

var newTestValue = document.querySelector(".second-class-test").value = "new-test-value";//opisywany wcześniej przykład do value

//document.querySelector("#container-two span:first-child button").removeAttribute("value");//usunie atrybut value z button'a (dodany wcześniej)

//console.log("");

//classAtr.value= "btn"; // ustawia wartość dla atrybutu class

//console.log("");

var comment = document.createComment("To jest nowy komentarz");//tworzy komentarz

document.getElementById("container-two").getElementsByTagName("span")[1].appendChild(comment);
//tak dotarliśmy i wstawiliśmy komentarz w --- div id="container-two" ---> przechodzimy do drugiego span ---> i na końcu (bo mamy appendChild) ustawiamy komentarz

console.log(document.querySelector("#container-two span:nth-child(2)"));//tak docieramy przy użyciu querySelector do np. drugiego dziecka --- div id="container-two" czyli do drugiego span'u

console.log("");

console.log(document.querySelectorAll("#container-two span"));//tak znajdujemy 3 span'y w div'ie id="container-two" --- przy użyciu querySelectorAll

console.log("");

var addCommentToElementP = document.querySelector("#container-two span:last-child p").appendChild(comment);//dodajemy komentarz do p znajdującego się w ostatnim span - div'a id="container-two"

console.log(document.querySelector("#container-two span:last-child"));

console.log("");

var testOuterHtml = document.getElementById("link").outerHTML;

console.log("OuterHTML --- " + testOuterHtml);

console.log("");

var testInnerHtml = document.getElementById("link").innerHTML;

console.log("InnerHTML --- " + testInnerHtml);

console.log("");

console.log(document.querySelector("#sectionFirst a:empty"));//odszukaliśmy pusty element 'a'

console.log("")

var elHtml = '<div id="bloczek" title="To jest tekst w dymku" class="uber-element" style="background-color:#216d4a">Tekst w divie</div>';//stowrzenie elementu w czystym js (chociaż później są problemy z dodaniem go)


document.querySelector("#sectionFirst #parFirst a:last-child").insertAdjacentHTML("afterend", elHtml);//ciekawa metoda insertAdjaentHTML -- warto zapamiętać i sprawdzić

console.log(document.querySelector("#parFirst").childNodes);//wyświetlamy --- div id="parFirst" (w którym jest także utworzony element elHtml)

document.querySelector("#sectionSecond span").innerHTML = 'Ten tekst i znacznik "p" dodaliśmy w elemencie "span" znajdującym się w --- section id="sectionSecond"'//Jeżeli tekst na stronie, kiedy otworzymy zbadaj (w zakładce - elements) nie zmieści się w jednej linii ze znacznikami, to pojawi się zawsze w pazurkach (przynajmniej na chromie)

console.log("");

//Poniżej - przy użyciu removeAttributeNode usuwamy href="#" z ostatniego elementu 'a' znajdującego się w --- <div="parSecond"> 
var weNeedElementA = document.querySelector("#sectionSecond #parSecond a:last-child");//znajdujemy szukany element czyli ostatnie a w div'ie #parSecond 

console.log(weNeedElementA);//tylko sprawdzenie czy działa
//
var weNeedHref = weNeedElementA.getAttributeNode("href");//znajdujemy w wyżej odnalezionym elemencie 'a' - 'href'

var deleteHrefFromA = weNeedElementA.removeAttributeNode(weNeedHref);//usuwamy 'href' z 'a'

console.log("");

//Poniżej - przy użyciu removeChild usuwamy z <div id="parSecond"> element 'p' wraz z jego zawartością czyli usuwamy <p>Całość włącznie ze znacznikiem 'p' zostanie usunięta</p> --- to usuwamy 
var elementPToRemove = document.querySelector("#parSecond p:nth-child(2)");//na początku tworzymy sobie dokładną ścieżkę do elemenut, który chcemy usunąć

document.querySelector("#parSecond").removeChild(elementPToRemove);//tutaj z pomocą var elementPToRemove, który jest odnośnikiem do stworzonej wcześniej ścieżki, usuwamy element 'p' wraz z zawartością

console.log(elementPToRemove);//na końcu wyświetlamy usunięty element

console.log("");

//Inny sposoby na pobieranie, zmienianie, ustawianie wartości atrybutów, np.:
document.getElementById("blink-link").href = "new-href";//zmieni zawartość href z --- href="we-will-change-this-href" --- na --- href="new-href" --- efekt będzie widoczny na stronie (w zakładce elements)

console.log("");

//Możemy także dodawać oraz ustawiać/zmieniać style CSS dla danego elementu za pomocą konstrukcji składni odpowiadającej CSS
//Przykład
document.getElementById( "blink-link" ).style.color = "red";//zmianie ulegnie  <a id="blink-link" href="we-will-change-this-href">Akapit Link 3 - zmienia kolor na czerwony</a>

