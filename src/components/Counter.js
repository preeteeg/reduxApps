import React,{useState} from 'react'
import {connect} from  'react-redux'
import { INCREASE, DECREASE,RESET } from '../store/actions'
const Counter = (props) =>
{
    const{count,name,dispatch} =props
  // const count = (props.state.count)
    //use Hook :useState
    const [counter, setCounter] = useState(0)
    return (
        <div className="container">
           <h1>{name}</h1>
            <p className="counter">{count}</p> 
            <div className="buttons">
                <button type="button" className="btn" onClick={()=>dispatch({type:INCREASE})}>Increment</button>
                <button type="button" className="btn" onClick={() => dispatch({ type: RESET })}>Reset</button>
                <button type="button" className="btn" onClick={() => dispatch({ type: DECREASE })}>Decrement</button>
            </div>
        </div>
    )
}


function mapStateToProps(state)
{
    return { count:state.count,name:state.name}
}



//HHO where it get component 
export default connect(mapStateToProps)(Counter)