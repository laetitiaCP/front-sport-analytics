import Header from "../../Components/Header/header";
import NavBarAside from "../../Components/NavBarAside/navBarAside";
import "./profil.scss";
import {useParams} from "react-router-dom";
import BarCharts from "../../Components/BarCharts/barCharts";
import LineChartComponent from "../../Components/LineChartComponent/lineChartComponent";
import RadarChartComponent from "../../Components/RadarChart/radarChartComponent";
import RadialBarChartComponent from "../../Components/RadialBarChartComponent/radialBarChartComponent";
import Card from "../../Components/Card/card";
import {GetData, getDataFromMock} from "../../webService/webService";
import {
    formatDataActivity,
    formatDataAverageSession,
    formatDataPerformance,
    formatDataUser
} from "../../webService/formatData";
import Erreur404 from "../Page404/Erreur404";

/**
 * Profile page
 * @returns {JSX.Element} return profile page
 * @constructor
 */
function Profil() {
    const id = useParams("id");
    let firstName = "";
    let numberCalories;
    let numberProteins;
    let numberCarbohydrates;
    let numberLipids;

    let dataActivity;
    let dataAverageSession;
    let dataPerformanceApi;
    let dataUser;

    // switch to false to use API data
    const isDataMocked = false;

    if (isDataMocked) {
        dataActivity = getDataFromMock(id.id, formatDataActivity, "Activity")
        dataAverageSession = getDataFromMock(id.id, formatDataAverageSession, "AverageSession");
        dataPerformanceApi = getDataFromMock(id.id, formatDataPerformance, "Performance");
        dataUser = getDataFromMock(id.id, formatDataUser, "User");
    } else {
        dataActivity = GetData(id.id, formatDataActivity, "/activity");
        dataAverageSession = GetData(id.id, formatDataAverageSession, "/average-sessions");
        dataPerformanceApi = GetData(id.id, formatDataPerformance, "/performance");
        dataUser = GetData(id.id, formatDataUser, "");
    }
    if (dataUser[0]) {
        firstName = dataUser[0].userInfos.firstName;
        numberCalories = dataUser[0].keyData.calorieCount;
        numberProteins = dataUser[0].keyData.proteinCount;
        numberCarbohydrates = dataUser[0].keyData.carbohydrateCount;
        numberLipids = dataUser[0].keyData.lipidCount;
    }

    if (id.id === "12" || id.id === "18") {
        return (
            <div>
                <Header />
                <main className="main">
                    <NavBarAside />
                    <div className="profil">
                        <section className="profil__welcome">
                            <h1 className="profil__title">
                                Bonjour
                                <span className="profil__name">{firstName}</span>
                            </h1>
                            <h2 className="profil__text">Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
                        </section>
                        <section className="data-container">
                            <div className="charts-container">
                                <article className="charts-container__barchart">
                                    <BarCharts data={dataActivity} />
                                </article>
                                <article className="charts-container__other">
                                    <LineChartComponent data={dataAverageSession} />
                                    <RadarChartComponent data={dataPerformanceApi} />
                                    <RadialBarChartComponent data={dataUser} />
                                </article>
                            </div>
                            <div className="cards">
                                <Card type="Calories" number={numberCalories}/>
                                <Card type="Proteines" number={numberProteins}/>
                                <Card type="Glucides" number={numberCarbohydrates}/>
                                <Card type="Lipides" number={numberLipids}/>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        );
    } else {
        return <Erreur404 />
    }

}

export default Profil;