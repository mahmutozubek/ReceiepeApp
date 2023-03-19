import { useState, useEffect } from 'react';
import axios from "axios";

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {

        try {

            const { data: responseData } = await axios.get(url);
            setLoading(false);
            setData(responseData);

        } catch (err) {
            setLoading(false);
            setError(err.message);
        }
       
      }

    useEffect(() => {
        fetchData();
        
    }, [])

    return { data, loading, error };
}

export default useFetch;