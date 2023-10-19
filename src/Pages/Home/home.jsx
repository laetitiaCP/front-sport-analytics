import Header from "../../Components/Header/header";
import NavBarAside from "../../Components/NavBarAside/navBarAside";
import Fsport from "../../Images/Fsport.png";
import Hsport from "../../Images/Hsport.png";

import {Link} from "react-router-dom";

import "./home.scss";

/**
 * Home page
 * @returns {JSX.Element} return home page
 * @constructor
 */
export default function Home () {
    return (
        <div>
            <Header />
            <main className="main">
                <NavBarAside />
                <section className="welcome">
                    <h1>Bienvenue</h1>
                    <ul>
                        <li>
                            <img src={Hsport} alt="homme qui fait du sport"/>
                            <Link to={"/12/profil"}>
                                Karl
                            </Link>
                        </li>
                        <li>
                            <img src={Fsport} alt="femme qui fait du sport"/>
                            <Link to={"/18/profil"}>
                                Cécilia
                            </Link>
                        </li>

                    </ul>
                </section>
            </main>
        </div>
    );
}