import React from 'react';
import { Link } from 'react-router-dom'

function Error(){
    return (
        <>
            <p className="p-5 h4">
                You landed on the wrong side of our application... It appears that you missed your way while trying to find your way inside this dungeon... We empathize with you as you might not be able to find your way back, such a pity... 
            </p>
            <div>
                <Link to="/" className="btn btn-danger btn-block">Go back Home</Link>
            </div>
            
        </>
    )
}

export default Error;