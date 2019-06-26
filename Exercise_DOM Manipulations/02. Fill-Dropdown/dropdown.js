function addItem() {
    let newText = document.getElementById("newItemText");
    let newValue = document.getElementById("newItemValue");
    let result = document.createElement("option");

    result.textContent = newText.value;
    result.value = newValue.value;

    let select = document.getElementById("menu");
    select.appendChild(result);

    newText.value = "";
    newValue.value = "";
}