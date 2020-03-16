import React from 'react';
import Counter from './components/Counter'
import Modal from './components/Modal'
import Users from './components/Users'
import CardList from './components/CardList';
import store from './store/store'
import './App.css';
import { Provider } from 'react-redux'
import { MdList, MdViewDay, MdViewQuilt } from 'react-icons/md';

import
{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App()
{
  return (

    <Provider store={store}>
      <Router>
        <div className="cardwrapper">
          <Link to="/users">
            <div className="items">
              <div className="icon-wrapper">
                <MdList />
              </div>
              <div className="project-name">
                <p>Monster List(redux-thunk)</p>
              </div>
            </div>

          </Link>
          <Link to="/counter">
            <div className="items">
              <div className="icon-wrapper">
                <MdViewQuilt />
              </div>
              <div className="project-name">
                <p>Counter App</p>
              </div>
            </div>

          </Link>
          <Link to="/modal">
            <div className="items">
              <div className="icon-wrapper">
                <MdViewDay className="icon-wrapper" />
              </div>
              <div className="project-name">
                <p>Modal popup</p>
              </div>
            </div>

          </Link>


        </div>
        <Switch>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route path="/counter">
            <Counter status="" />
          </Route>
          <Route path="/modal">
            <Modal />
          </Route>
        </Switch>


      </Router>


    </Provider>



  );
}

export default App;


