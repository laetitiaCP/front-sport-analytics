import Header from "../../Components/Header/header";
import NavBarAside from "../../Components/NavBarAside/navBarAside";
import "./home.scss";

export default function Home () {
    return (
        <div>
            <Header />
            <main className="main">
                <NavBarAside />
                <section>
                    En construction
                </section>
            </main>
        </div>
    );
}