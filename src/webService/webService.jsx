import useFetch from "../Hooks/useFetch";
/**
 * Récupère data activity avec l'id de l'utilisateur
 * @param parId
 * @returns {*}
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

