const React = require('react')

function Def(html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Casters</a>
                        </li>
                        <li>
                            <a href="/places/new">Add Caster</a>
                        </li>
                        <li>
                            <a href="/lessons">Lessons</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def