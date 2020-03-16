import React,{useState} from 'react'
import {connect} from  'react-redux'
import { increase, decrease,reset,openModal } from '../store/actions'
const Counter = (props) =>
{
   
 
    //use Hook :useState
    //const [counter, setCounter] = useState(0)

    // const count = (props.state.count)
    // const count = props.count
    //const{count,name,dispatch} =props
    const { count, name, increase, decrease, reset ,openModal} = props

    return (
        <section className="section">
            <h2 className="section-title">{name}</h2>
       
            <p className="counter">{count}</p> 
            <div className="buttons">
                <button type="button" className="btn" onClick={increase}>Increment</button>
                <button type="button" className="btn" onClick={reset}>Reset</button>
                <button type="button" className="btn" onClick={decrease}>Decrement</button>
            </div>
             </section>
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
        increase: () => dispatch(increase()),
        decrease: () => dispatch(decrease()),
        reset: () =>
        {
            dispatch(reset());
            dispatch(openModal(true,"Am a modal", "Counter has been reset"))
        } ,
      
       
      
        
    }
}

//HHO where it get component 
export default connect(mapStateToProps,mapDispatchToProps)(Counter)