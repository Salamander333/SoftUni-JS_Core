function create(words) {
   let content = document.getElementById("content");

   for(let word of words) {
      let result = document.createElement("div");
      let text = document.createElement("p");
      text.textContent = word;
      text.style.display = "none";
      result.appendChild(text);
      result.addEventListener('click', (x) => x.target.firstChild.style.display = "block");
      content.appendChild(result);
   }
}