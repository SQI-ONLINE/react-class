import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
    let [data, setData] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    const getUserList = async () => {
        let response = await fetch(url);
        let data = await response.json();
        if (response.status == 200) {
            setData(data)
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getUserList();
    }, [])

    return { data, isLoading }
}

export default useFetch;