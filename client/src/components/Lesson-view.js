import Def from './default'
import LessonsHub from './Lessons-Hub'
const React = require('react')

export default function Lesson () {
   return (
       <Def>
           <main>
               <h1>This is the {lesson.title} Lesson!</h1>
               <div>
                   <img src="/images/hatCard.jpg" alt="Unknown Warlock" />
                   <div>
                   Photo by <a href="'https://unsplash.com/@ah1?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'">Amirhossein Hasani</a> on <a href="https://unsplash.com/s/photos/magician?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                   </div>
               </div>
               <img src={lesson.image} alt={lesson.title} />
            
               <p>
                   {lesson.content}
               </p>
                
               <a href={`/games/${game.id}/show`}><button>Try A Drill?</button></a>   
               
           </main>
       </Def>
   )
}