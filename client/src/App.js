import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Error404 from './components/error404';
import GamesHub from './components/Games-Hub';
import Home from './components/Home';
import LessonHub from './components/Lessons-Hub';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/lessons')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='*' element={<Error404 />}/>
          <Route path='/' element={<Home />} />
          <Route path='/lessons' element={<LessonHub />} />
          <Route path='/games' element={<GamesHub />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;