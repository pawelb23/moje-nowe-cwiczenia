'use strict';

//var poczatekZero = document.getElementById("wynik").value = "";

//console.log('czy działa');
function dzial(btn) {

    var index = 0;
    
    var tablicaZera = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    
    var tablicaZnakow = [".",]

    if (btn == "=") {
        //        wynik równania
        document.getElementById("wynik").value = eval(document.getElementById("wynik").value);

    }

    //    if (btn == "%") {
    //
    //            document.getElementById("wynik").value = eval(document.getElementById("wynik").value / 100 * document.getElementById("wynik").value);
    //
    //        
    //    } 
    else if (btn == "del") {

        document.getElementById("wynik").value = "";
        
//               console.log(document.getElementById("wynik").value.charAt(index));

    }
    
          else if (document.getElementById("wynik").value.charAt(0) == "0" && document.getElementById("wynik").value.charAt(1) ) {
              
           for (var i = 0; tablicaZera.length > i; i++) {
               
        if (tablicaZera[i] == document.getElementById("wynik").value.charAt(1)) {
               
             document.getElementById("wynik").value = i; 
            
            // zamiast powyższego wiersza może też tu być wiersz poniżej, w tym konkretnym przypadku to będzie dokładnie to samo
            
//            document.getElementById("wynik").value = tablicaZera[i];
               
//               document.getElementById("wynik").value.charAt(1);
               
//               console.log("działa");
        }
               
             }
              
           }
    
//       else if (document.getElementById("wynik").value.charAt(0) == "0" && document.getElementById("wynik").value.charAt(1) ) {
//              
//           for (var j = 0; tablicaZnakow.length > j; j++) {
               
//            else if (document.getElementById("wynik").value.charAt(index + 1) == "1") {         
//                
//            console.log(document.getElementById("wynik").value.charAt(index));
//    
//            document.getElementById("wynik").value.charAt(index).innerHTML = ""
//    
//            }

    //        if (document.getElementById("wynik").value = "0") {
    //            
    //            
    //            
    //        }


    //    else if (btn === "%") { procent

    //    } 

    //    else if (btn === "*") { zmiana "*" na "x"

    //    }

    //    blokada zera 

    //    usuwanie zera z pierwszego miejsca

    //    blokada kilku znaków pod rząd
    
    else {

        document.getElementById("wynik").value += btn;

    }
}

var dzielenieWynik = 0.08 * 9;

console.log(dzielenieWynik);