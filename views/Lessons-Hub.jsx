const React = require('react')
const Def = require('./default')

function lessonHub() {
    const handleClick = () => {
        console.log('Hello World')
    }

   return (
       <Def>
           <main>
               <h1 style={{textAlign: 'center'}}>ALL YOUR LESSONS ARE BELONG TO US!</h1>
               <div>
                   <img style={{width: '20vw', marginLeft: '40vw'}} src="https://cdn.vox-cdn.com/thumbor/LkWqXsl11wI-1gU9OnoflNoWDVI=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22309695/all_your_base_are_belong_to_us.jpg" alt="Unknown Warlock" />
               </div>
               <div className='ui-container'>
                   <div className='user-info'>
                       <img className='avatar-img' src='./assets/person.svg'/>
                       <p>user info goes here</p>
                        <div className='xp-bar'>
                           <img src='./assets/XP-Bar.png' />
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
                    <button onClick={handleClick} className='prev-btn'>
                            <img className='prev-btn-img' src='./assets/caret-left.svg' />
                    </button>
                    <div className='lesson-container'>
                            <a href=''>
                                <div style={{display: 'inline-blocks'}}>
                            <img className='lesson-img' src='./assets/123.svg'></img>
                            </div>
                            </a>
                            <a href=''>
                                <img className='lesson-img' src='./assets/code-slash.svg'></img>
                            </a>
                            <a href=''>
                                <img className='lesson-img' src='./assets/terminal.svg'></img>
                            </a>
                    </div>
                    <button className='next-btn'>
                            <img className='next-btn-img' src='./assets/caret-right.svg' />
                    </button>
                </div>
           </main>
       </Def>
   )
}

module.exports = lessonHub