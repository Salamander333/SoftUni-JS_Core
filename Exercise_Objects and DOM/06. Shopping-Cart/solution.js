function solve() {
   let addButton = document.getElementsByClassName('add-product');
   let checkoutButton = document.getElementsByClassName('checkout')[0].addEventListener('click', checkout);
   for (let i = 0; i < addButton.length; i++) {
      addButton[i].addEventListener('click', addProduct);
   }

   let textArea = document.getElementsByTagName('textarea')[0];
   let moneyNeeded = 0;
   let items = [];
   let result = '';

   function addProduct() {
      let product = this.parentNode.parentNode;
      let name = product.getElementsByClassName('product-title')[0].textContent;
      let price = +product.getElementsByClassName('product-line-price')[0].textContent;
      result += (`Added ${name} for ${price.toFixed(2)} to the cart.\n`);
      moneyNeeded += +price;
      items.push(name);
      textArea.value = result;
   }

   function checkout() {
      result += (`You bought ${items.join(', ')} for ${moneyNeeded.toFixed(2)}.`);
      let buttons = document.getElementsByTagName('button');
      for (let button of buttons) {
         button.disabled = true;
     }
      textArea.value = result;
   }
}