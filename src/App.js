import React, {useReducer} from 'react';
import {intialState, reducer} from './reducers/reducer'
import './App.css';
import TodoList from './components/ToDoComponents/TodoList';
import TodoForm from './components/ToDoComponents/TodoForm';

function App() {
  const [state, dispatch] = useReducer(reducer, intialState)
  // console.log(state)
  // console.log(state.todoItems)
  return (
    <div className="App">
      <h1>still works</h1>
      <TodoList propsPassedToToDoList = {state.todoItems}/>
      <TodoForm />
    </div>
  );
}

export default App;
