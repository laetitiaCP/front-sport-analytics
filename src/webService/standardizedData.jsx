import WebService from "./webService";

/**
 * Formate les données pour qu'elles soient utilisables en l'état pour le BarChart
 * @param parData
 * @returns {*[]}
 */
export function getStandardizedDataActivity(parData) {
    let locReturnedData = [];
    if (parData.data) {
        (parData.data.sessions).map ( (session, index) => {
            locReturnedData.push({"day": index + 1, "kilogram":session.kilogram, "calories":session.calories})
        })
    }
    return locReturnedData;
}

export function getStandardizedDataAverage(parData) {
    console.log(parData)
}



