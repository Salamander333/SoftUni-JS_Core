function solve() {
  let text = document.getElementById('input').textContent;
  let sentences = text.split(/[.]\s*/);
  let outputElement = document.getElementById('output');

  let lastP = false;

  while (sentences.length > 0) {
    let paragraph = [];

    for (let i = 0; i < 3; i++) {
      paragraph.push(sentences.shift());
      
      if (sentences.length == 0) {
        lastP = true;
        break;
      }
    }

    let p = document.createElement('p');
    p.textContent = paragraph.join('. ');
    if (!lastP) {
      p.textContent += '.';
    }
    outputElement.appendChild(p);
  }
}