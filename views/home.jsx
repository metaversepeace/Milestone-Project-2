const React = require('react')
const Def = require('./default')

function home () {
   return (
       <Def>
           <main>
               <h1>BEWARE, I AM SINNISTAR! THIS IS THE HOME PAGE VIEW!</h1>
               <div>
                   <img src="/images/hatCard.jpg" alt="Unknown Warlock" />
                   <div>
                   Photo by <a href="'https://unsplash.com/@ah1?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'">Amirhossein Hasani</a> on <a href="https://unsplash.com/s/photos/magician?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                   </div>
               </div>
               <a href="/places">
                   <button className="btn-primary">Places Page</button>
               </a>
           </main>
       </Def>
   )
}

module.exports = home