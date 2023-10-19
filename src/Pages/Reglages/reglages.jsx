import Header from "../../Components/Header/header";
import NavBarAside from "../../Components/NavBarAside/navBarAside";
import "./reglages.scss";
import PageConstruction from "../../Components/pageConstruction/pageConstruction";

/**
 * Settings page
 * @returns {JSX.Element} return settings page
 * @constructor
 */
function Reglages() {
    return (
        <div>
            <Header />
            <main className="main">
                <NavBarAside />
                <PageConstruction section='"Réglagles"' />
            </main>
        </div>
    );
}

export default Reglages;