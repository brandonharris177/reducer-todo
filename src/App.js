import React, {useReducer} from 'react';
import {intialState, reducer} from './reducers/reducer'
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, intialState)
  return (
    <div className="App">
      <h1>still works</h1>
    </div>
  );
}

export default App;
