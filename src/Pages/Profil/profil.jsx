import Header from "../../Components/Header/header";
import NavBarAside from "../../Components/NavBarAside/navBarAside";
import "./profil.scss";
import dataUsers from "../../Data/dataUsers.json";
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
function Profil() {
    const id = useParams("id");
    const user = dataUsers.find(locUser => locUser.id === parseInt(id.id));
    const firstName = user.userInfos.firstName;

    const dataActivity = GetData(id.id, formatDataActivity, "/activity");
    const dataAverageSession = GetData(id.id, formatDataAverageSession, "/average-sessions");
    const dataPerformanceApi = GetData(id.id, formatDataPerformance, "/performance");
    const dataUser = GetData(id.id, formatDataUser, "");

    console.log(dataAverageSession)
    return (
        <div>
            <Header />
            <main className="main">
                <NavBarAside />
                <section className="profil">
                    <h1 className="profil__title">
                        Bonjour
                        <span className="profil__name">{firstName}</span>
                    </h1>
                    <h2 className="profil__text">Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
                    <article className="barchart">
                        <BarCharts data={dataActivity} />
                    </article>
                    <article className="lineRadarChart">
                        <LineChartComponent data={dataAverageSession} />
                        <RadarChartComponent data={dataPerformanceApi} />
                        <RadialBarChartComponent data={dataUser} />
                    </article>
                </section>
                <aside>
                    <Card data={user.keyData.calorieCount}/>
                </aside>
            </main>
        </div>
    );
}

export default Profil;