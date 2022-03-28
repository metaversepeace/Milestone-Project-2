import Def from './default'
const React = require('react')

export default function Error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <img src="/images/404Wizard.jpg" alt="A Sneaky Wizard" />
                <p>A wizard must have stolen this page! Sorry!</p>
                   <div>
                   Photo by <a href="https://unsplash.com/@chaseelliottclark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chase Clark</a> on <a href="https://unsplash.com/s/photos/evil-wizard?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                   </div>
            </main>
        </Def>
    )
}