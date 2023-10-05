import {useEffect, useState} from "react";
import axios from "axios";

function useFetch(url, requestInit = {}) {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect( () => {
        const controller = new AbortController();
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
        }
        fetchData();
        return () => {
            controller?.abort();
            mounted = false;
        }
    }, [url, requestInit]);
    console.log(data)
    return { data, isLoading, error };
}

export default useFetch;