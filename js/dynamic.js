window.dynamic = {
    nav: {
        setBurger: () => {
            let links = '';
            nav.burger.forEach((entry) => {
                links += template.nav.burger.link
                    .replace(/__text__/g, entry.text)
                    .replace('__href__', entry.href)
            });
            document.querySelector('#drop-i-c').insertAdjacentHTML('afterbegin', links)
        },
        setFooter: () => {
            let texts = ''
              , icons = ''
              ;
            nav.footer.textLinks.forEach((entry) => {
                texts += template.nav.footer.text
                    .replace(/__text__/g, entry.text)
                    .replace('__href__', entry.href)
            });
            nav.footer.iconLinks.forEach((entry) => {
                icons += template.nav.footer.icon
                    .replace(/__text__/g, entry.text)
                    .replace('__href__', entry.href)
                    .replace('__src__', entry.src)
            });
            document.querySelector('#foot-texts').insertAdjacentHTML('afterbegin', texts);
            document.querySelector('#foot-icons').insertAdjacentHTML('afterbegin', icons)
        }
    },
    content: {
        getHome: () => {
            let cards = '';
            page.home.cards.forEach((entry) => {
                let card = template.content.card.element.main.replace('__header__', entry.header),
                links = '';
                entry.links.forEach((subEntry) => {
                    links += template.content.card.element.sub
                        .replace('__text__', subEntry.text)
                        .replace('__href__', subEntry.href)
                        .replace('__label__', entry.text + ' - ' + subEntry.text)
                });
                cards += card.replace('__links__', links)
            });
            return template.content.card.container.replace('__cards__', cards)
        }
    }
}
