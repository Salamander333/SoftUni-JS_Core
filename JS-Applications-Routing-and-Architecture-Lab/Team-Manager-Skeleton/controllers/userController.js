const userController = function() {
    const getRegister = function(context) {
        context.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs",
            registerForm: "./templates/register/registerForm.hbs"
        }).then(function() {
            this.partial("./templates/register/registerPage.hbs")
        });
    };

    const getLogin = function(context) {
        context.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs",
            loginForm: "./templates/login/loginForm.hbs"
        }).then(function() {
            this.partial("./templates/login/loginPage.hbs")
        });
    }

    const postLogin = function(context) {
        auth.login(context.username, context.password);
    };

    const postRegister = function(context) {
        auth.register(context.params.username, context.params.password, context.params.repeatPassword)
        .then(helper.handler)
        .then(function(data) {
            auth.saveSession(data);
            context.redirect("#/home");
        });
    };

    return {
        getRegister,
        getLogin,
        postRegister,
        postLogin
    }
}();