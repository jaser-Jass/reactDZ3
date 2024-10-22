import logo from './logo.svg';
import './App.css';
import ParentCounter from './components/parent';
import InputForm from './components/form';
import BasicButtonGroup from './components/manu';
import HoverRating from './components/rating';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      
      <TemperatureConverter/>
      <TodoList/>
    </div>
  );
}

export default App;
