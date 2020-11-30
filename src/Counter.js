import React from 'react';

const Counter = (props) => {
    let {count} = props;
    return (
        <>
            <p className="display-4 mb-3 text-center">{count}</p>
        </>
    )
}

export default Counter;