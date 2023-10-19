import useFetch from "../Hooks/useFetch";

/**
 * API call to get data
 * @param {int} parId id user
 * @param {{arg0:JSON}} parFunctionToFormat function to format data
 * @param {string} parUrl url depends data to fetch
 * @returns {false| Array<Object>} call function to format data and return formatted data
 * @constructor
 */
export function GetData(parId, parFunctionToFormat, parUrl) {
    const URL = "http://localhost:3000/user/" + parId + parUrl;
    const response= useFetch(URL);
    const {data, isLoading, error} = response;
    if (error) {
        console.log(error)
        return [];
    }
    return !isLoading && parFunctionToFormat(data);
}

