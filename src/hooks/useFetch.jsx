import axios from "axios";
import React, { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([] || {});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(url)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => setError(err));
    }, [url]);

    return {
        data,
        error,
        loading,
    };
};

export default useFetch;
