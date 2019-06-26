function solve() {
   let allCards = document.getElementsByTagName('img');

   let firstSelected = false;
   let firstCardResult;
   let secondSelected = false;
   let secondCardResult;

   for(let card of allCards) {
      card.addEventListener('click', onclick);
   }

   function onclick() {
      let result = document.getElementById('result');
      let cradName = this.name;

      if (this.parentElement.id === 'player1Div' && !firstSelected) {
         this.src = 'images/whiteCard.jpg';

         result.children[0].textContent = cradName;
         firstSelected = true;
         firstCard = this;
         firstCardResult = this.name;
      }
      else if (this.parentElement.id === 'player2Div' && !secondSelected) {
         this.src = 'images/whiteCard.jpg';

         result.children[2].textContent = cradName;
         secondSelected = true;
         secondCard = this;
         secondCardResult = this.name;
      }

      if (firstSelected && secondSelected) {
         if (+firstCard.name >= +secondCard.name) {
            firstCard.style.border = '2px solid green';
            secondCard.style.border = '2px solid red';
         }
         else {
            firstCard.style.border = '2px solid red';
            secondCard.style.border = '2px solid green';
         }

         let history = document.getElementById('history');
         let result = document.getElementById('result');
         let x = result.cloneNode(result);
         history.textContent += (`[${firstCardResult} vs ${secondCardResult}] `);
         firstSelected = false;
         secondSelected = false;
         result.children[0].textContent = '';
         result.children[2].textContent = '';
      }
   }
}