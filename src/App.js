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

  return (
    <div className="App">
      <h1>still works</h1>
      <TodoList propsPassedToToDoList={state.todoItems} toggleToDo ={toggleToDo}/>
      <TodoForm addToDoPassedToForm= {addToDo}/>
    </div>
  );
}

export default App;
