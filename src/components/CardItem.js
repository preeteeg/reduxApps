import React from 'react'
import { MdList, MdViewDay, MdViewQuilt } from 'react-icons/md';
import
{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const CartItem = () =>
{
    return (
        <Router>
            <div className="cardwrapper">
                <Link to="/users">
                    <div className="items">
                        <div className="icon-wrapper">
                            <MdList />
                        </div>
                        <div className="project-name">
                            <p>Monster List using redux-thunk</p>
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


        </Router>


    )
}

export default CartItem