import React,{useState} from 'react'

const Counter = (props) =>
{
  const count = (props.state.count)
    //use Hook :useState
    const [counter, setCounter] = useState(0)
    return (
        <div className="container">
           <h1>Counter</h1>
            <p className="counter">{count}</p> 
            <div className="buttons">
                <button type="button" className="btn" onClick={()=>setCounter(counter+1)}>Increment</button>
                <button type="button" className="btn" onClick={()=>setCounter(0)}>Reset</button>
                <button type="button" className="btn" onClick={()=>setCounter(counter-1)}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter