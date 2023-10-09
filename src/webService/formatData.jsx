/**
 * Formate les données pour qu'elles soient utilisables en l'état pour le BarChart
 * @param parData
 * @returns {*[]}
 */
export function formatDataActivity(parData) {
    let locReturnedData = [];
    if (parData.data) {
        (parData.data.sessions).forEach( (session, index) => {
            locReturnedData.push({"day": index + 1, "kilogram":session.kilogram, "calories":session.calories})
        })
    }
    return locReturnedData;
}

/**
 * Formate les données pour qu'elles soient utilisables pour le lineChart
 * @param parData
 * @returns {*[]}
 */
export function formatDataAverageSession(parData) {
    let locReturnedData = [];
    let mapWeek = new Map([
        [1,"L"], [2,"M"], [3,"M"], [4,"J"], [5,"V"], [6,"S"], [7,"D"]
    ]);
    if (parData.data) {
        (parData.data.sessions).forEach( (session) => {
            locReturnedData.push({
                "day": mapWeek.get(session.day),
                "sessionLength": session.sessionLength,
            });
        });
    }
    return locReturnedData;
}

export function formatDataPerformance(parData) {
    let locReturnedData = [];
    let mapKind = new Map([
        [1,"Cardio"], [2,"Energie"], [3,"Endurance"], [4,"Force"], [5,"Vitesse"], [6,"Intensité"]
    ]);
    if (parData.data) {
        (parData.data.data).forEach( (perf) => {
            locReturnedData.push({
                "kind": mapKind.get(perf.kind),
                "value": perf.value,
            });
        });
    }
    return locReturnedData;
}

export function formatDataUser(parData) {
    let locReturnedData = [];
    if (parData.data) {
        let calorie = new Intl.NumberFormat("en-IN").format(parData.data.keyData.calorieCount);
        locReturnedData= [
            {
            "id": parData.data.id,
            "userInfos": {
                "firstName": parData.data.userInfos.firstName,
                "lastName": parData.data.userInfos.lastName,
                "age": parData.data.userInfos.age
            },
            "score": parData.data.score * 100 || parData.data.todayScore * 100,

            "keyData": {
                "calorieCount": calorie,
                "proteinCount": parData.data.keyData.proteinCount,
                "carbohydrateCount": parData.data.keyData.carbohydrateCount,
                "lipidCount": parData.data.keyData.lipidCount
            }
        }
        ];
    }
    return locReturnedData;
}



