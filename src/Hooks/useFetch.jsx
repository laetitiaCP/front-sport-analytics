import {useEffect, useState} from "react";
import axios from "axios";

/**
 * Customized hook to use fetch and load data
 * @param {string} url api url
 * @returns {{isLoading: boolean, data: {JSON}, error: boolean}}
 */
function useFetch(url) {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect( () => {
        if (!url) {
            return;
        }
        let mounted = true;
        async function fetchData() {
            if (mounted) setIsLoading(true);
            axios
                .get(url)
                .then((response) => {
                    if (mounted) setData(response.data);
                })
                .catch((err) => {
                    if (mounted) setError(err);
                })
                .finally(() => {
                    if (mounted) setIsLoading(false);
                });
            return true;
        }
        fetchData();
        return () => {
            mounted = false;
        }
    }, [url]);

    return { data, isLoading, error };
}

export default useFetch;