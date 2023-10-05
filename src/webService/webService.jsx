import useFetch from "../Hooks/useFetch";
import {getStandardizedDataActivity, getStandardizedDataAverage} from "./standardizedData";

/**
 * Récupère data activity avec l'id de l'utilisateur
 * @param parId
 * @returns {*}
 * @constructor
 */
export function GetDataActivity(parId) {
    const URL_ACTIVITY = "http://localhost:3000/user/" + parId + "/activity";
    const response= useFetch(URL_ACTIVITY);
    const {data, isLoading, error} = response;

    if (error) {
        console.log(error)
    }
    return getStandardizedDataActivity(data);
}

export function GetDataAverageSessions(parId) {
    const URL_AVERAGE = "http://localhost:3000/user/" + parId + "/average-sessions";
    const response = useFetch(URL_AVERAGE);
    const {data, isLoading, error} = response;

    if (error) {
        console.log(error)
    }
    return getStandardizedDataAverage(data);
}

