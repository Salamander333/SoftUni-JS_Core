function solve() {
  let generateButton = document.getElementsByTagName('button')[0].addEventListener('click', generate);

  let buyButton = document.getElementsByTagName('button')[1].addEventListener('click', buy);
  let boxes = document.getElementsByTagName('input');
  for(let box of boxes) {
    box.disabled = false;
  }

  function generate() {
    let furniture = document.getElementById('exercise').getElementsByTagName('textarea')[0];
    if (furniture.value !== '') {
      let furnitureJSON = JSON.parse(furniture.value);
      let table = document.getElementsByClassName('table')[0];
      for(let f of furnitureJSON) {
        let templateObject = table.getElementsByTagName('tbody')[0];
        templateObject = templateObject.cloneNode(true);
        templateObject.children[0].children[0].innerHTML = `<img src="${f.img}">`;
        templateObject.children[0].children[1].innerHTML = `<p>${f.name}</p>`;
        templateObject.children[0].children[2].innerHTML = `<p>${f.price}</p>`;
        templateObject.children[0].children[3].innerHTML = `<p>${f.decFactor}</p>`;
        templateObject.children[0].children[4].innerHTML = `<input type="checkbox">`;
        table.appendChild(templateObject);
      }
    }function solve() {
      let inputTextArea = document.querySelector('textarea');
      let productsTable = document.querySelector('tbody');
   
      let generateButton = document.querySelector('button');
      generateButton.addEventListener('click', function () {
          let object = JSON.parse(inputTextArea.value);
  // creates new row
          let newTrElement = document.createElement('tr');
          productsTable.appendChild(newTrElement)
   
  // creates a cell for the image
          let imageTd = document.createElement('td');
          let image = document.createElement('img');
          image.src = object[0].img;
          imageTd.appendChild(image);
   
          newTrElement.appendChild(imageTd);
   
  //creates a cell for the name
          let nameTd = document.createElement('td');
          let name = document.createElement('p');
          name.textContent = object[0].name;
          nameTd.appendChild(name);
   
          newTrElement.appendChild(nameTd);
   
  //creates a cell for the price
          let priceTd = document.createElement('td');
          let price = document.createElement('p');
          price.textContent = object[0].price;
          priceTd.appendChild(price);
   
          newTrElement.appendChild(priceTd);
   
  //creates a cell for the decFaftor
          let decfacTd = document.createElement('td');
          let decfact = document.createElement('p');
          decfact.textContent = object[0].decFactor;
          decfacTd.appendChild(decfact);
   
          newTrElement.appendChild(decfacTd);
   
  //creates a checkable checkbox..the default one isn`t
          let checkBoxTd = document.createElement('td');
          let checkBox = document.createElement('input');
          checkBox.type = 'checkbox';
          checkBox.disabled = false;
          checkBoxTd.appendChild(checkBox);
   
          newTrElement.appendChild(checkBoxTd);
      })
   
   
      let buyButton = document.querySelectorAll('button')[1];
   
      buyButton.addEventListener('click', function () {
          let allTr = document.querySelectorAll('tr');
          let allFurniture = [];
          let allDecFacts = 0;
          let totalPrice = 0;
          for(let i = 2;i < allTr.length;i++){
              let currentCheckBox = allTr[i].querySelector('input');
              if(currentCheckBox.checked){
                  allFurniture.push(allTr[i].children[1].textContent);
                  allDecFacts += +allTr[i].children[3].textContent;
                  totalPrice += +allTr[i].children[2].textContent;
              }
          }
   
          let averageDecFact = allDecFacts / allFurniture.length;
   
          document
              .getElementsByTagName('textarea')[1]
              .value =
              "Bought furniture: " +
              allFurniture.join(', ') +
              "\nTotal price: " +
              totalPrice.toFixed(2) +
              "\nAverage decoration factor: " +
              averageDecFact;
      })
   
  }
  }

  function buy() {
      boxes = document.getElementsByTagName('input');
      let checkedBoxes = [];
      for(let box of boxes) {
        if (box.checked) {
          checkedBoxes.push(box.parentElement.parentElement);
        }
      }

      let names = [];
      let totalPrice = 0;
      let totalDecFactor = [];

      for(let furniture of checkedBoxes) {
        names.push(furniture.children[1].children[0].textContent);
        totalPrice += +furniture.children[2].children[0].textContent;
        totalDecFactor.push(+furniture.children[3].children[0].textContent);
      }

      let sum = 0;
      for (let i = 0; i < totalDecFactor.length; i++) {
        sum += +totalDecFactor[i];
      }
      let averageDecFactor = (sum / totalDecFactor.length);

      let result = document.getElementsByTagName('textarea')[1];
      result.value = `Bought furniture: ${names.join(', ')}\n` + `Total price: ${totalPrice.toFixed(2)}\n` + `Average decoration factor: ${averageDecFactor}`;
      console.log(document.querySelectorAll('tbody tr'))
  }
}