import React, { useState, useEffect, useReducer } from 'react';
import reducer from './2-reducer'
const ReducerClass = () => {


    // let [userArr, setUserArr] = useState([]);

    let [name, setName] = useState("");
    let [isMessageOpen, setIsMessageOpen] = useState(false);
    // let [info, setInfo] = useState("")

    //IMPLEMENTING USE REDUCER
    let defaultState = { userArr: [], name: "", isMessageOpen: false, };



    let [state, dispatch] = useReducer(reducer, defaultState);

    const handleChange = (e) => {
        let value = e.target.value;
        dispatch({ type: "UPDATE_NAME", payload: value })
        // setName(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({ type: "ADD_USER", payload: state.name });

        // setInfo("Added a new user")
    }

    const closeMessage = () => {
        dispatch({ type: "CLOSE_MESSAGE" })
    }

    // const myStyle = { visibility: "visible" }
    return (
        <>
            <p className="text-center display-4">Reducer Class</p>
            <div className="container">
                <div className="row">
                    <div className="col-10 rounded mx-auto col-md-4">
                        <form onSubmit={handleSubmit}>
                            {/* {isMessageOpen ? <Info /> : ''} */}
                            {state.isMessageOpen && <Info close={closeMessage} />}
                            <input onChange={handleChange} className="mb-3 form-control" value={state.name} />
                            <button type="submit" className="btn-primary btn btn-block">Save</button>
                        </form>
                    </div>
                    <div className="p-3 shadow rounded col-10 col-md-4">
                        {
                            state.userArr.map((each, i) => (
                                <div className="mb-2">{each}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
};

const Info = ({ close }) => {
    useEffect(() => {
        setTimeout(() => {
            close();
        }, 3000)
    })
    return (
        <p>Added User Successfully</p>
    )
}
export default ReducerClass;