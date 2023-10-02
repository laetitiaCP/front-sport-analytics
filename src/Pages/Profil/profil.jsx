import Header from "../../Components/Header/header";
import NavBarAside from "../../Components/NavBarAside/navBarAside";
import "./profil.scss";
import dataUsers from "../../Data/dataUsers.json";
import dataActivity from "../../Data/dataActivity.json";
import dataAverageSessions from "../../Data/dataAverageSessions.json";
import dataPerformance from "../../Data/dataPerformance.json";

import {useParams} from "react-router-dom";
import BarCharts from "../../Components/BarCharts/barCharts";
import LineChartComponent from "../../Components/LineChartComponent/lineChartComponent";
import RadarChartComponent from "../../Components/RadarChart/radarChartComponent";


function Profil() {
    const id = useParams("id");
    const user = dataUsers.find(locUser => locUser.id === parseInt(id.id));
    const firstName = user.userInfos.firstName;
    const activity = dataActivity.find(locActivity => locActivity.userId === user.id);
    const averageSession = dataAverageSessions.find(locAverage => locAverage.userId === user.id);
    const performance = dataPerformance.find(locPerformance => locPerformance.userId === user.id);

    console.log(averageSession)
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
                    <article>
                        <BarCharts data={activity.sessions} />
                    </article>
                    <article className="lineRadarChart">
                        <LineChartComponent data={averageSession.sessions} />
                        <RadarChartComponent data={performance} />
                    </article>
                </section>
            </main>
        </div>
    );
}

export default Profil;