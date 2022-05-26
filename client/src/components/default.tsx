import { Link } from 'react-router-dom'
const React = require('react')


export default function Def(html) {
    return (
            <>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/games">Games</Link>
                        </li>
                        {/* <li>
                            <Link to="/places/new">Add Caster</Link>
                        </li> */}
                        <li>
                            <Link to="/lessons">Lessons</Link>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </>
    )
}
