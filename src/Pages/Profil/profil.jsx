import Header from "../../Components/Header/header";
import NavBarAside from "../../Components/NavBarAside/navBarAside";
import "./profil.scss";
import {useParams} from "react-router-dom";
import BarCharts from "../../Components/BarCharts/barCharts";
import LineChartComponent from "../../Components/LineChartComponent/lineChartComponent";
import RadarChartComponent from "../../Components/RadarChart/radarChartComponent";
import RadialBarChartComponent from "../../Components/RadialBarChartComponent/radialBarChartComponent";
import Card from "../../Components/Card/card";
import {GetData} from "../../webService/webService";
import {
    formatDataActivity,
    formatDataAverageSession,
    formatDataPerformance,
    formatDataUser
} from "../../webService/formatData";

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


    const dataActivity = GetData(id.id, formatDataActivity, "/activity");
    const dataAverageSession = GetData(id.id, formatDataAverageSession, "/average-sessions");
    const dataPerformanceApi = GetData(id.id, formatDataPerformance, "/performance");
    const dataUser = GetData(id.id, formatDataUser, "");
    if (dataUser[0]) {
        firstName = dataUser[0].userInfos.firstName;
        numberCalories = dataUser[0].keyData.calorieCount;
        numberProteins = dataUser[0].keyData.proteinCount;
        numberCarbohydrates = dataUser[0].keyData.carbohydrateCount;
        numberLipids = dataUser[0].keyData.lipidCount;
    }

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
}

export default Profil;