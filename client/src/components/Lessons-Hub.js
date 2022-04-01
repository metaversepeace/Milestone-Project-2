import Def from './default'
const React = require('react')

export default function LessonHub() {
    const prevClick = () => {
        console.log('Previous Button Clicked')
    }
    const nextClick = () => {
        console.log('Next Button Clicked')
    }
    return (
       <Def>
           <main className='lesson-main'>
               <h1 style={{textAlign: 'center'}}>ALL YOUR LESSONS BELONG TO US!</h1>
               <div>
                   <img style={{width: '20vw', marginLeft: '40vw'}} src="https://cdn.vox-cdn.com/thumbor/LkWqXsl11wI-1gU9OnoflNoWDVI=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22309695/all_your_base_are_belong_to_us.jpg" alt="Unknown Warlock" />
               </div>
               <div className='ui-container'>
                   <div className='user-info'>
                       <img className='avatar-img' src='./Images/person.svg'/>
                       <p>user info goes here</p>
                        <div className='xp-bar'>
                           <img src='./Images/XP-Bar.png' />
                        </div>
                   </div>
                   <form className='subject-select'>
                       <label htmlFor='subject'>Subject</label>
                       <select id='subject' name='subject'>
                           <option value='React'>API's</option>
                           <option value='React'>React</option>
                           <option value='React'>SQL</option>
                       </select>
                   </form>
               </div>
               <div style={{margin: 'auto', textAlign: 'center'}}>
                    <button onClick={prevClick} className='prev-btn'>
                            <img className='prev-btn-img' src='./Images/caret-left.svg' />
                    </button>
                    <div className='lesson-container'>
                            <a href="/Lesson-view">
                                <div style={{display: 'inline-blocks'}}>
                            <img className='lesson-img' src='./Images/mongoDB.png'></img>
                            </div>
                            </a>
                            <a href="/Lesson-view">
                            <img className='lesson-img' src='./Images/express.png'></img>
                            </a>
                            <a href="/Lesson-view">
                            <img className='lesson-img' src='./Images/react.png'></img>
                            </a>
                            <a href="/Lesson-view">
                            <img className='lesson-img' src='./Images/node.png'></img>
                            </a>
                    </div>
                    <button onClick={nextClick} className='next-btn'>
                            <img className='next-btn-img' src='./Images/caret-right.svg' />
                    </button>
                </div>
           </main>
       </Def>
   )
}
