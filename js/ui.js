window.ui = {
    setNav: () => {
        document.querySelector('header h1').innerHTML = nav.brand;
        dynamic.nav.setBurger();
        dynamic.nav.setFooter()
    },
    setContent: (html, title) => {
        document.title = title;
        document.querySelector('#container').innerHTML = html;
        window.scrollTo(0, 0);
        dispatch.view(title)
    }
}
