import React from 'react';
import Counter from './components/Counter'
import Modal from './components/Modal'
import Users from './components/Users'
import store from './store/store'
import './App.css';
import {Provider} from 'react-redux'
function App() {
  return (
    <Provider store={store}>
        <Users/>
        <Counter status="Counter App" />
        <Modal />
      
      </Provider>
     
  );
}

export default App;


