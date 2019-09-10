import React, {useReducer} from 'react';
import {intialState, reducer} from './reducers/reducer'
import './App.css';
import TodoList from './components/ToDoComponents/TodoList';
import TodoForm from './components/ToDoComponents/TodoForm';

function App() {
  const [state, dispatch] = useReducer(reducer, intialState)
  // console.log(state)
  // console.log(state.todoItems)

  const addToDo = toDo => {
    dispatch({type: "ADD_TODO", payload: toDo})
  }

  const toggleToDo = id => {
    dispatch({type: "TOGGLE_TODO", payload: id})
  }

  const clearCompleted = (event) => {
    event.preventDefault();
    dispatch({type: "CLEAR_COMPLETED"})
}

  return (
    <div className="App">
      <h1>To Do List:</h1>
      <TodoList propsPassedToToDoList={state.todoItems} toggleToDo ={toggleToDo}/>
      <TodoForm addToDoPassedToForm= {addToDo} clearCompleted = {clearCompleted}/>
    </div>
  );
}

export default App;
