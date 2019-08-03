function attackEvents() {
    const btn = document.getElementById('btnLoadTowns');
    btn.addEventListener('click', load);

    function load() {
        const towns = document.getElementById('towns').value.split(', ');

        const template = document.getElementById('towns-template').innerHTML;
        const compile = Handlebars.compile(template);
        const context = {
            towns
        };

        const x = document.getElementById('root');
        x.innerHTML = compile(context);
    }
}

attackEvents();