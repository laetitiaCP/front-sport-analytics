import Header from "../../Components/Header/header";
import NavBarAside from "../../Components/NavBarAside/navBarAside";
import "./profil.scss";
import dataUsers from "../../Data/dataUsers.json";
import dataAverageSessions from "../../Data/dataAverageSessions.json";
import dataPerformance from "../../Data/dataPerformance.json";

import {useParams} from "react-router-dom";
import BarCharts from "../../Components/BarCharts/barCharts";
import LineChartComponent from "../../Components/LineChartComponent/lineChartComponent";
import RadarChartComponent from "../../Components/RadarChart/radarChartComponent";
import RadialBarChartComponent from "../../Components/RadialBarChartComponent/radialBarChartComponent";
import Card from "../../Components/Card/card";
import {GetDataActivity, GetDataAverageSessions} from "../../webService/webService";

function Profil() {
    const id = useParams("id");
    const user = dataUsers.find(locUser => locUser.id === parseInt(id.id));
    const firstName = user.userInfos.firstName;
    const averageSession = dataAverageSessions.find(locAverage => locAverage.userId === user.id);
    const performance = dataPerformance.find(locPerformance => locPerformance.userId === user.id);

    const dataActivityApi = GetDataActivity(id.id);
    //const dataAverageApi = GetDataAverageSessions(id.id);


    console.log(dataActivityApi)
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
                        <BarCharts data={dataActivityApi} />
                    </article>
                    <article className="lineRadarChart">
                        <LineChartComponent data={averageSession.sessions} />
                        <RadarChartComponent data={performance} />
                        <RadialBarChartComponent data={user} />
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