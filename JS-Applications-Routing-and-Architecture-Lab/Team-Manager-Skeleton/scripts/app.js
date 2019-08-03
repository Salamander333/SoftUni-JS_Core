const app = Sammy('#main', function () {
    this.use('Handlebars', 'hbs');

    this.get('#/home', homeController.getHome);
    this.get('#/about', homeController.getAbout);
    
    this.get('#/login', userController.getLogin);
    this.get('#/register', userController.getRegister);

    this.post('#/login', userController.postLogin);
    this.post('#/register', userController.postRegister);
});

(() => {
    app.run('#/home');
})();