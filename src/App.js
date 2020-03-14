import React from 'react';
import Counter from './components/Counter'
import store from './store/store'
import './App.css';

function App() {
  return (
    <div className="App">
       <Counter state={store.getState()} />
    </div>
  );
}

export default App;


