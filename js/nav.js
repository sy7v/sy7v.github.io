window.nav = {
    brand: `sy7vain`,
    burger: [
        {
            text: page.home.title,
            href: js.string.slugify(page.home.title)
        },
        {
            text: page.documentation.title,
            href: js.string.slugify(page.documentation.title)
        },
        {
            text: page.about.title,
            href: js.string.slugify(page.about.title)
        }
    ],
    footer: {
        textLinks: [
            {
                text: `Hosted on GitHub Pages`,
                href: `https://pages.github.com`
            }
        ],
        iconLinks: [
            {
                text: `Github`,
                href: `https://github.com/sy7vain/sy7vain.github.io`,
                src: `images/iconmonstr-github.png`
            },
            {
                text: `Spotify`,
                href: `https://open.spotify.com`,
                src: `images/iconmonstr-spotify.png`
            }
        ]
    }
}
