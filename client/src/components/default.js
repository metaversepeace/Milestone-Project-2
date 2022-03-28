const React = require('react')

export default function Def(html) {
    return (
            <>
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
            </>
    )
}
