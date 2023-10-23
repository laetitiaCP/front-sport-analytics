/**
 * Formats data to use it in the BarChart
 * @param {Array<Object>} parData data must be formatted
 * @returns {Array<Object>} return data formatted for use in barchart
 */
export function formatDataActivity(parData) {
    let locReturnedData = [];
    if (parData) {
        (parData.sessions).forEach( (session, index) => {
            locReturnedData.push({"day": index + 1, "kilogram":session.kilogram, "calories":session.calories})
        })
    }
    return locReturnedData;
}

/**
 * Formats data to use it in the LineChart
 * @param {Array<Object>} parData data must be formatted
 * @returns {Array<Object>} return data formatted for use in linechart
 */
export function formatDataAverageSession(parData) {
    let locReturnedData = [];
    let mapWeek = new Map([
        [1,"L"], [2,"M"], [3,"M"], [4,"J"], [5,"V"], [6,"S"], [7,"D"]
    ]);
    if (parData) {
        (parData.sessions).forEach( (session) => {
            locReturnedData.push({
                "day": mapWeek.get(session.day),
                "sessionLength": session.sessionLength,
            });
        });
    }
    return locReturnedData;
}

/**
 * Formats data to use it in the RadarChart component
 * @param {Array<Object>} parData data must be formatted
 * @returns {Array<Object>} return data formatted for use in radarchart
 */
export function formatDataPerformance(parData) {
    let locReturnedData = [];
    let mapKind = new Map([
        [1,"Cardio"], [2,"Energie"], [3,"Endurance"], [4,"Force"], [5,"Vitesse"], [6,"Intensité"]
    ]);
    if (parData) {
        (parData.data).forEach( (perf) => {
            locReturnedData.push({
                "kind": mapKind.get(perf.kind),
                "value": perf.value,
            });
        });
    }
    return locReturnedData;
}

/**
 * Formats data to use it in the Cards
 * @param  {Array<Object>} parData data must be formatted
 * @returns {Array<Object>} return data formatted for use in card
 */
export function formatDataUser(parData) {
    let locReturnedData = [];
    if (parData) {
        let calorie = new Intl.NumberFormat("en-IN").format(parData.keyData.calorieCount);
        locReturnedData= [
            {
            "id": parData.id,
            "userInfos": {
                "firstName": parData.userInfos.firstName,
                "lastName": parData.userInfos.lastName,
                "age": parData.userInfos.age
            },
            "score": parData.score * 100 || parData.todayScore * 100,

            "keyData": {
                "calorieCount": calorie,
                "proteinCount": parData.keyData.proteinCount,
                "carbohydrateCount": parData.keyData.carbohydrateCount,
                "lipidCount": parData.keyData.lipidCount
            }
        }
        ];
    }
    return locReturnedData;
}



