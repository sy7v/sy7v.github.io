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
        let i = 0, notFound = true;
        while (i < pages.length) {
            if (js.string.slugify(pages[i].title) === location.hash) {
                notFound = false;
                ui.setContent(
                    dynamic.content.getHTML(pages[i]),
                    pages[i].title
                ); break
            } i++
        }
        if (notFound) {
            // TODO: flash message
            console.log('wrong')
        }
    },
    run: () => {
        app.route();
        window.onhashchange = app.route
    }
}

app.start()
