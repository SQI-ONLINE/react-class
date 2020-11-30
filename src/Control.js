import React from 'react';

const Control = (props) => {
    // const james4G = (name) => {
    //     alert(name)
    // }
    let {increase, decrease} = props;
    return (
        <>
            <button className="btn btn-primary mr-3" onClick={increase}>Increase</button>
            <button className="btn btn-danger" onClick={decrease}>Decrease</button>
        </>
    )
}

export default Control;
