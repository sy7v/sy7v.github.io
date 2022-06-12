window.dispatch = {
    recipient: {
        set: () => {

            // TODO: add analytics solutions

        },
        get: () => {

            // TODO: add analytics solutions

        }
    },
    view: (title) => {

        // TODO: add analytics solutions

    },
    event: (action, category, label, onclick) => {

        // TODO: add analytics solutions

        if (onclick && onclick === 'origin') {
            window.location.replace(document.location.origin)
        }
    }
}
