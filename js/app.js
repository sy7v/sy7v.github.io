window.app = {
    start: () => {
        ui.setNav();
        boot.script.waitLoad(0,
            dispatch.getRecipient,
            app.run,
            true
        )
    },
    route: () => {
        switch (location.hash) {
            case '':
            case '#home':
            case js.string.slugify(page.home.title):
                ui.setContent(dynamic.content.getHome(), page.home.title);
                    break;
            case js.string.slugify(page.documentation.title):
                ui.setContent(template.content.bullet, page.documentation.title);
                    break;
            case js.string.slugify(page.about.title):
                ui.setContent(template.content.about, page.about.title);
                    break;
            default:
                ui.setContent(template.content.notFound, page.notFound.title)
        }
    },
    run: () => {
        app.route();
        window.onhashchange = app.route
    }
}

app.start()
