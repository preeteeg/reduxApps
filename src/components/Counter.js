import React,{useState} from 'react'
import {connect} from  'react-redux'
import { INCREASE, DECREASE,RESET,MODAL_OPEN,MODAL_CLOSE } from '../store/actions'
const Counter = (props) =>
{
   
 
    //use Hook :useState
    //const [counter, setCounter] = useState(0)

    // const count = (props.state.count)
    // const count = props.count
    //const{count,name,dispatch} =props
    const { count, name, increase, decrease, reset } = props

    return (
        <div className="container">
           <h1>{name}</h1>
            <p className="counter">{count}</p> 
            <div className="buttons">
                <button type="button" className="btn" onClick={increase}>Increment</button>
                <button type="button" className="btn" onClick={reset}>Reset</button>
                <button type="button" className="btn" onClick={decrease}>Decrement</button>
            </div>
        </div>
    )
}


function mapStateToProps({countState:{count,name}})
{
    return { count:count,name:name}
}

function mapDispatchToProps(dispatch, ownProps)
{
    console.log(ownProps)
    return {
        increase: () => dispatch({ type: INCREASE }),
        decrease: () => dispatch({ type: DECREASE }),
        reset: () => dispatch({ type: RESET }),
    }
}

//HHO where it get component 
export default connect(mapStateToProps,mapDispatchToProps)(Counter)