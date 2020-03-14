import React from 'react';
import Counter from './components/Counter'
import store from './store/store'
import './App.css';
import {Provider} from 'react-redux'
function App() {
  return (
       <Provider store={store}>
        <Counter status="Counter App"  />
      </Provider>
     
  );
}

export default App;


