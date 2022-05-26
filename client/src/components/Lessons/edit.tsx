import Def from '../default'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
const React = require('react')

export default function EditForm (data) {
    let { id } = useParams()
    let navigate = useNavigate()
    const handleSubmit = (e) => {
      navigate(`/lessons/${id}`)
    }
    const [lesson, setLesson ] = useState({})
    useEffect(() => {
        fetch(`/lessons/${id}`)
            .then((res) => res.json())
            .then((lesson) => setLesson(lesson))
    })
    return (
      <Def>

        <main>

          <form onSubmit={handleSubmit} method="POST" action={`/lessons/${id}?_method=PUT`}>
  
            <div className="row">
      
                <div className="form-group col-sm-6">
          
                    <label htmlFor="subject">Lesson Subject</label>
                    
                    <input 
                        className="form-control" 
                        id="title" 
                        name="title" 
                        defaultValue={lesson.title} 
                        required />
                </div>
      
                <div className="form-group col-sm-6">
          
                    <label htmlFor="title">Lesson Title</label>
          
                    <input 
                        className="form-control" 
                        id="topic" 
                        name="topic" 
                        defaultValue={lesson.topic} 
                        required />

                </div>
                
                <div className="form-group col-sm-6">
          
                    <label htmlFor="title">Creator</label>
          
                    <input 
                        className="form-control" 
                        id="creator" 
                        name="creator" 
                        defaultValue={lesson.creator} 
                        required />

                </div>

                <div className="form-group col-sm-6">
          
                    <label htmlFor="title">Contains React?</label>
          
                    <input 
                        className="form-control" 
                        id="hasReact" 
                        name="hasReact" 
                        value={lesson.hasReact} 
                        required />

                </div>

                <div className="form-group col-sm-6">
          
                    <label htmlFor="title">Contains Mongo?</label>
          
                    <input 
                        className="form-control" 
                        id="hasMongo" 
                        name="hasMongo" 
                        value={lesson.hasMongo} 
                        required />

                </div>

                <div className="form-group col-sm-6">
          
                    <label htmlFor="title">Contains Express?</label>
          
                    <input 
                        className="form-control" 
                        id="hasExpress" 
                        name="hasExpress" 
                        value={lesson.hasExpress} 
                        required />

                </div>

                <div className="form-group col-sm-6">
          
                    <label htmlFor="title">Content</label>
          
                    <input 
                        className="form-control" 
                        id="content" 
                        name="content" 
                        defaultValue={lesson.content} 
                        required />

                </div>
            

            </div>
            <button type='Submit' >Submit</button>
          </form>
                
        </main>
        
      </Def>
    )
}