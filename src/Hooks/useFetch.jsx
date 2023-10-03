import {useEffect, useState} from "react";
import axios from "axios";

function useFetch(parId, parTypeData) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const client = axios.create({
        baseURL: "http://localhost:3000/user/"
    });
    let locPartURL = "";
    if (parTypeData === undefined) {
        locPartURL = parId
    } else  {
        locPartURL = parId + "/" + parTypeData ;
    }

    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await client.get(locPartURL);
                setData(response.data);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [client]);
    console.log(data)
    return { data, loading, error };
}

export default useFetch;