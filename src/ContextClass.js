import React, { useState, useRef, useEffect } from 'react';

let MyContext = React.createContext();
const ContextClass = () => {
    let [names, setNames] = useState([]);
    let inputContainer = useRef(null);

    useEffect(() => {
        focusInput();
    })

    const focusInput = () => {
        inputContainer.current.focus();
    }
    const addUser = (e) => {
        e.preventDefault();
        let name = inputContainer.current.value;
        console.log(name);
        setNames([...names, name]);
        console.log(names);
    }

    const removeUser = (index) => {
        setNames(names.filter((each, i) => i !== index));
    }

    return (
        <>
            <MyContext.Provider value={{ removeUser }}>
                <div className="container bg-danger">
                    <div className="row">
                        <div className="col-6 mt-5 text-center mb-5 border-right">
                            <form>
                                <input ref={inputContainer} className="form-control mb-3 w-50 mx-auto" />
                                <button className="btn btn-primary" onClick={addUser}>Add Name</button>
                            </form>
                        </div>
                        <div className="col-6 mt-5 mb-5 pl-3">
                            <ListComponent nameArr={names} removeUser={removeUser} />
                        </div>
                    </div>
                </div>
            </MyContext.Provider>
        </>
    )
}

const ListComponent = (props) => {
    let { nameArr, removeUser } = props;
    return (
        <>
            <h3 className="text-white">My List</h3>
            {nameArr.map((name, index) => {
                return <SingleName key={index} name={name} id={index} removeUser={removeUser} />
            })}
        </>
    )
}

const SingleName = (props) => {
    let { removeUser } = React.useContext(MyContext);
    let { name, index } = props;
    return (
        <>
            <div className="p-2 text-white">
                <span>{name}</span>
                <button className="btn btn-sm btn-primary float-right" onClick={() => removeUser(index)}>
                    Delete
                </button>
            </div>
        </>
    )
}

export default ContextClass;