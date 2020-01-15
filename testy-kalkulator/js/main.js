'use strict';
//console.log('czy działa');
var mainContainer = document.getElementById('container');

var allButtonsClassForEvent = document.getElementsByClassName('all-buttons-event');

var screenInput = document.getElementById('wynik');

var delButton = document.querySelector('button.del');

var procentButton = document.querySelector('button.procent');

for (var i = 0; allButtonsClassForEvent.length > i; i++) {

allButtonsClassForEvent[i].addEventListener("click", kalkulatorPraca);

//    console.log('działa');
    
}

function kalkulatorPraca() {
    
    console.log('działa');
    
 if (delButton) {
     console.log('działa');
     screenInput.value = 0;
     
 }
    
   else if (this.procentButton) {
        
        screenInput.value = '%';
        
    }
    
}



//mainContainer.addEventListener('click', kalkulatorPraca);
