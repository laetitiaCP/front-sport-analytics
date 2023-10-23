import useFetch from "../Hooks/useFetch";
import dataActivity from "../Data/dataActivity.json";
import dataAverageSession from "../Data/dataAverageSessions.json";
import dataPerformance from "../Data/dataPerformance.json";
import dataUsers from "../Data/dataUsers.json";

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
    return !isLoading && parFunctionToFormat(data.data);
}

export function getDataFromMock(parId, parFunctionToFormat, parType) {

    switch (parType) {
        case "Activity":
            if (parId === "12") {
                return parFunctionToFormat(dataActivity[0]);
            } else {
                return parFunctionToFormat(dataActivity[1]);
            }

        case "AverageSession":
            if (parId === "12") {
                return parFunctionToFormat(dataAverageSession[0]);
            } else {
                return parFunctionToFormat(dataAverageSession[1]);
            }


        case "Performance":
            if (parId === '12') {
                return parFunctionToFormat(dataPerformance[0]);
            } else {
                return parFunctionToFormat(dataPerformance[1]);
            }

        case "User":
            if (parId === "12") {
                return parFunctionToFormat(dataUsers[0]);
            } else {
                return parFunctionToFormat(dataUsers[1]);
            }
        default:
            return;
    }
}

