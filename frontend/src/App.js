import logo from './logo.svg';
import './App.css';
import { ToDoList } from './components/ToDo-List/ToDoList'
import { ToDoInput } from './components/ToDoInput/ToDoInput';
function App() {
  return (
    <div className="App">
      <ToDoInput/>
      <ToDoList />
    </div>
  );
}

export default App;
