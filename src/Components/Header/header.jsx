import logo from "../../Images/logo_SportSee.svg";
import {Link} from "react-router-dom";
import "./header.scss";

/**
 * Header component with navigation links
 * @returns {JSX.Element} return <div> with the Header
 * @constructor
 */
function Header() {
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="logo sportSee"/>
            <ul className="header__links">
                <li className="header__link"><Link to="/">Accueil</Link></li>
                <li className="header__link"><Link to="/">Profil</Link></li>
                <li className="header__link"><Link to="/reglages">Réglages</Link></li>
                <li className="header__link"><Link to="/communaute">Communauté</Link></li>
            </ul>
        </div>
    );
}

export default Header;