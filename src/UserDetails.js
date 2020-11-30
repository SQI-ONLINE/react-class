import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
    
function UserDetails(){
    const {name} = useParams();
    const history = useHistory();
    history.push('/users');
    return (
    <>

    </>
    )

}

export default UserDetails;