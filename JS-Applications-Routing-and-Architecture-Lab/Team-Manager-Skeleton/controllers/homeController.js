const homeController = function() {

    const getHome = function(context) {
        context.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs"
        }).then(function() {
            this.partial("./templates/home/home.hbs")
        });
    };

    const getAbout = function(context) {
        context.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs"
        }).then(function() {
            this.partial("./templates/about/about.hbs");
        });
    };

    return {
        getHome,
        getAbout
    }
}();