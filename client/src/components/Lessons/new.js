import Def from '../default'
import { useNavigate } from 'react-router-dom'

const React = require('react')

export default function NewForm () {
    let navigate = useNavigate()
    const handleSubmit = (e) => {
        navigate(`/lessons`)
      }
    return (
        <Def>
          <main>
            <h1>Add a New Lesson</h1>
                <form onSubmit={handleSubmit} method="POST" action="/lessons">
                    <div className="form-group">
                        <label htmlFor="name">Creator</label>
                        <input className="form-control" id="creator" name="creator" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Lesson Subject</label>
                        <input className="form-control" id="subject" name="subject" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="pic">Lesson Title</label>
                        <input className="form-control" id="title" name="title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Lesson Topic</label>
                        <input className="form-control" id="topic" name="topic" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="city">Lesson Image</label>
                        <input className="form-control" id="pic" name="pic" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="state">Contains Express?</label>
                        <input className="form-control" id="hasExpress" name="hasExpress" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">Contains Mongo?</label>
                        <input className="form-control" id="hasMongo" name="hasMongo" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">Contains React?</label>
                        <input className="form-control" id="hasReact" name="hasReact" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">First Published</label>
                        <input className="form-control"value={Date()} id="firstPub" name="firstPub" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">Last Published</label>
                        <input className="form-control" value={Date()} id="lastPub" name="lastPub" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">Lesson Content</label>
                        <input className="form-control" id="content" name="content" />
                    </div>

                        <input className="btn btn-primary" type="submit" value="Add Lesson" />
                </form>
          </main>
        </Def>
    )
}