(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        const template = document.getElementById('cat-template').innerHTML;

        const compiled = Handlebars.compile(template);
        const context = {
            cats: window.cats
        };

        const allCats = document.getElementById('allCats');
        allCats.innerHTML = compiled(context);
    }
})();

function showInfo(id) {
    let x = id.parentElement.childNodes[3].id;
    const infoDiv = document.getElementById(x);
    const infoButton = infoDiv.previousElementSibling;

    if (infoButton.textContent === 'Show status code') {
        infoDiv.style.display = 'block';
        infoButton.textContent = 'Hide status code';

    } else {
        infoDiv.style.display = 'none';
        infoButton.textContent = 'Show status code';
    }
};
