import { useEffect } from 'react';
import './App.css';
import Todos from './components/todos/Todos';
import { data } from "./Data"

function App() {
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [])
  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;
