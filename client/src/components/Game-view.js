import Def from './default'
import GamesHub from './Games-Hub'
const React = require('react')

export default function Game () {
   return (
       <Def>
           <main>
               <h1>This is the {game.title} Game!</h1>
               <div>
                   <img src="/images/hatCard.jpg" alt="Unknown Warlock" />
                   <div>
                   Photo by <a href="'https://unsplash.com/@ah1?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'">Amirhossein Hasani</a> on <a href="https://unsplash.com/s/photos/magician?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                   </div>
               </div>
               <img src={game.image} alt={game.title} />
            
               <div>
                   {game.content}
               </div>
                
               <a href={`/lessons/${lesson.id}/show`}><button>Need Another Lesson?</button></a>   
               
           </main>
       </Def>
   )
}