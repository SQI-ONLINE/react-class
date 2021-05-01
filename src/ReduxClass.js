import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const ReduxClass = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    const decrease = () => {
        dispatch({ type: 'DECREASE' })
    }

    return (
        <>
            <div className="text-center mt-5">
                <p className="display-4">Counter: {counter}</p>
                <input className="form-control w-25 mx-auto mb-3" placeholder="Increment Value" type="number" />
                <button className="btn btn-primary mr-3" onClick={() => dispatch({ type: 'INCREASE' })}>Increase</button>
                <button className="btn btn-danger" onClick={decrease}>Decrease</button>
            </div>
        </>
    )
}

export default ReduxClass;