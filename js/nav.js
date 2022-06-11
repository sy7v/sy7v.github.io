window.nav = {
    brand: `sy7v`,
    burger: (function(links = []) {
        pages.forEach((page) => {
            links.push({
                text: page.title,
                href: js.string.slugify(page.title)
            })
        }); return links
    }()),
    footer: {
        textLinks: [
            {
                text: `Hosted on GitHub Pages`,
                href: `https://pages.github.com`
            },
            {
                text: `Open Spotify`,
                href: `https://open.spotify.com`,
            }
        ],
        iconLinks: [
            {
                text: `Github`,
                href: `https://github.com/sy7v/sy7v.github.io`,
                src: `images/iconmonstr-github.png`
            },
            {
                text: `LinkedIn`,
                href: `https://www.linkedin.com/in/sy7v`,
                src: `images/iconmonstr-linkedin.png`
            }
        ]
    }
}
