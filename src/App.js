import React, {useReducer} from 'react';
import {intialState, reducer} from './reducers/reducer'
import './App.css';
import TodoList from './components/ToDoComponents/TodoList'

function App() {
  const [state, dispatch] = useReducer(reducer, intialState)
  return (
    <div className="App">
      <h1>still works</h1>
      <TodoList />
    </div>
  );
}

export default App;
