import { useState, useEffect } from 'react';
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
        <LessonHub />
      </header>
    </div>
  );
}

export default App;