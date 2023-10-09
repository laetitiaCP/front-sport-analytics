import Header from "../../Components/Header/header";
import NavBarAside from "../../Components/NavBarAside/navBarAside";
import PageConstruction from "../../Components/pageConstruction/pageConstruction";

function Communaute() {
    return (
        <div>
            <Header />
            <main className="main">
                <NavBarAside />
                <PageConstruction section='"Communauté"' />
            </main>
        </div>
    );
}

export default Communaute;