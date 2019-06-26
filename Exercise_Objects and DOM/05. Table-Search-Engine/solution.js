function solve() {
   let body = document.getElementsByTagName('tbody')[0];
   let cells = body.getElementsByTagName('td');

   let searchButton = document.getElementById('searchBtn').addEventListener('click', onclick)

   function onclick() {
      clear();
      let textField = document.getElementById('searchField');
      for(let cell of cells) {
         let cellText = cell.textContent.toLowerCase();
         if (cellText.match(textField.value.toLowerCase()) && textField.value !== '') {
            cell.parentElement.className = 'select'
         }
      }
      textField.value = '';
   }
   
   function clear() {
      let allSelected = document.getElementsByClassName('select');
      for (let i = 0; i < allSelected.length; i++) {
         allSelected[i].className = '';
      }
   }
}