window.template = {
    nav: {
        burger: {
            link: `
                <a href="__href__"
                    class="btn-w btn-p"
                    onclick="dispatch.event('Click Header', 'Burger, '__text__')"
                >__text__</a>
            `
        },
        footer: {
            text: `
                <a class="foot-l"
                    target="_blank"
                    href="__href__"
                    onclick="dispatch.event('Click Footer', 'Text', '__text__')"
                >__text__</a>
            `,
            icon: `
                <a target="_blank"
                    href="__href__"
                    onclick="dispatch.event('Click Footer', 'Icon', '__text__')">
                    <img class="foot-i icon"
                        src="__src__"
                        alt="__text__"
                    />
                </a>
            `
        }
    },
    content: {
        card: {
            container: `
                <section class="sect-c">
                    <h2>${page.home.title}</h2>
                    <div class="cards">
                        __cards__
                    </div>
                </section>
            `,
            element: {
                main: `
                    <div class="card">
                        <div class="card-t">__header__</div>
                        <div class="card-c">
                            __links__
                        </div>
                    </div>
                `,
                sub: `
                    <a class="link" target="_blank" href="__href__"
                        onclick="dispatch.event('Click Page', 'Card link', __label__)"
                    >__text__</a>
                `
            }
        },
        bullet: `
            <section class="sect-b">
                <h2>${page.documentation.title}</h2>
                <br />
                <div id="balls">
                    <div class="ball-l">
                        <a target="_blank"
                            href="${page.documentation.bullets.a.href}"
                            onclick="dispatch.event('Click Page', 'Bullet', page.documentation.bullets.a.text)"
                        ><span class="ball">${page.documentation.bullets.a.text}</span></a>
                    </div>
                    <div class="ball-l">
                        <a target="_blank"
                            href="${page.documentation.bullets.b.href}"
                            onclick="dispatch.event('Click Page', 'Bullet', page.documentation.bullets.b.text)"
                        ><span class="ball">${page.documentation.bullets.b.text}</span></a>
                        <a target="_blank"
                            href="${page.documentation.bullets.c.href}"
                            onclick="dispatch.event('Click Page', 'Bullet', page.documentation.bullets.c.text)"
                        ><span class="ball">${page.documentation.bullets.c.text}</span></a>
                    </div>
                    <div class="ball-l">
                        <a target="_blank"
                            href="${page.documentation.bullets.d.href}"
                            onclick="dispatch.event('Click Page', 'Bullet', page.documentation.bullets.d.text)"
                        ><span class="ball">${page.documentation.bullets.d.text}</span></a>
                        <a target="_blank"
                            href="${page.documentation.bullets.e.href}"
                            onclick="dispatch.event('Click Page', 'Bullet', page.documentation.bullets.e.text)"
                        ><span class="ball">${page.documentation.bullets.e.text}</span></a>
                        <a target="_blank"
                            href="${page.documentation.bullets.f.href}"
                            onclick="dispatch.event('Click Page', 'Bullet', page.documentation.bullets.f.text)"
                        ><span class="ball">${page.documentation.bullets.f.text}</span></a>
                    </div>
                </div>
                <br />
                <a target="_blank"
                    href="${page.documentation.cta.href}"
                    class="btn-w btn-p btn btn-x"
                    onclick="dispatch.event('Click Page', 'Button', page.documentation.cta.text)"
                >${page.documentation.cta.text}</a>
            </section>
        `,
        about: `
            <section class="sect-b">
                <h2>${page.about.title}</h2>
                <div class="text txt-2">
                    <p>${page.about.main.body}</p>
                </div>
                <a class="link"
                    target="_blank"
                    href="${page.about.hosting.href}"
                    onclick="dispatch.event('Click Page', 'Link', page.about.hosting.text)"
                >${page.about.hosting.text}</a>
                <div class="intersection"></div>
                <h2 class="title-p">${page.about.sub.header}</h2>
                <iframe class="tub" src="${page.about.sub.video}" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <div class="intersection"></div>
                <a target="_blank"
                    class="btn-w btn-p btn btn-o"
                    href="${page.about.sub.cta.href}"
                    onclick="dispatch.event('Click Page', 'Button', page.about.sub.cta.text)"
                >${page.about.sub.cta.text}</a>
            </section>
        `,
        notFound: `
            <section class="sect-c">
                <h2>${page.notFound.header}</h2>
                <br />
                <a class="link" target="_blank" href="${page.notFound.link.href}"
                    onclick="dispatch.event('Click Page', 'Link', page.notFound.link.text)"
                >${page.notFound.link.text}</a>
            </section>
        `
    }
}
