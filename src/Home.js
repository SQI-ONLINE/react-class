import React from 'react';
import Counter from './Counter';
import Control from './Control';

function Home() {
    let [count, setCount] = React.useState(0);
    let [name, setName] = React.useState({});
    let increase = () => {
        setCount(count + 1)
    }

    let decrease = () => {
        setCount(count - 1)
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4 text-center mx-auto">
                        <p className="display-4">HOME PAGE IS HERE</p>
                        <Counter count={count} />
                        <p className="display-1">{count}</p>
                        <Control increase={increase} decrease={decrease} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;