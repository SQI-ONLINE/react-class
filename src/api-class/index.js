import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useFetch from '../hooks/useFetch';

const APIClass = () => {

    const url = 'https://api.github.com/users';

    const { data, isLoading } = useFetch(url, {})

    return (
        <>
            <p className="display-4 text-center">API CLASS</p>

        </>
    )
}

export default APIClass;
