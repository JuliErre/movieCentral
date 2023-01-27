import axios from 'axios';
import React,{useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([] || {});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(url);
            setData(response.data);
            console.log(response.data)
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

   useEffect(() => {
        fetchData();
    }, [url]);

    return {
        data,
        error,
        loading,
    };
}

export default useFetch