function solve() {
  let tagElements = document.getElementsByTagName('a');
  
  for (let tagElement of tagElements) {
      tagElement.addEventListener('click', onclick);
  }

  function onclick() {
    let element = this.parentNode.children[1];
    let elementText = element.textContent;
    elementText = elementText.split(' ');
    let count = +elementText[1];
    count++;

    element.textContent = elementText[0] + " " + count + " " + elementText[2];
  }
}