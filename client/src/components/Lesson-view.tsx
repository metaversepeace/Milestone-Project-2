import Def from './default'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
const React = require('react')

export default function Lesson () {
    let { id } = useParams()
    const [lesson, setLesson ] = useState({})
    useEffect(() => {
        fetch(`/lessons/${id}`)
            .then((res) => res.json())
            .then((lesson) => setLesson(lesson))
    })

   return (
       <Def>
           <main className='lesson-view'>
               <h1>This is the {lesson.topic} module!</h1>
               <div>
                   {/*lesson here*/}
               </div>
               <img src={lesson.image} alt={lesson.topic} />
            
               <p>
                   {lesson.content}
               </p>

                <Link to={`/lessons/${id}/edit`}>
                    <button>Edit</button>    
                </Link>

               {/* <a href={`/games/${game.id}/show`} className='btn-primary'><button>Try A Drill?</button></a>    */}
               
           </main>
       </Def>
   )
}