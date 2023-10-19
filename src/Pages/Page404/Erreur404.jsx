import Header from "../../Components/Header/header";
import NavBarAside from "../../Components/NavBarAside/navBarAside";
import logo from "../../Images/logo_SportSee.svg";
import "./erreur404.scss";

/**
 * Error 404 page
 * @returns {JSX.Element} return error 404 page
 * @constructor
 */
function Erreur404() {

    return (
        <div>
            <Header />
            <main className="main">
                <NavBarAside />
                <div className="container">
                    <img src={logo} alt="logo sportsee"/>
                    <span>Erreur 404, cette page n'existe pas</span>
                </div>
            </main>
        </div>
    );
}

export default Erreur404;