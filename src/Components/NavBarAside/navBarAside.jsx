import icon1 from "../../Images/icon1.svg";
import icon2 from "../../Images/icon2.svg";
import icon3 from "../../Images/icon3.svg";
import icon4 from "../../Images/icon4.svg";
import "./navBarAside.scss";

/**
 * Side navigation bar component
 * @returns {JSX.Element} return side bar component
 * @constructor
 */
function NavBarAside() {
    return (
        <div className="navBar">
            <div className="navBar__logos">
                <img src={icon1} alt="icone 1" />
                <img src={icon2} alt="icone 2" />
                <img src={icon3} alt="icone 3" />
                <img src={icon4} alt="icone 4" />
            </div>
            <small className="navBar__text">Copyrigth, SportSee 2020</small>
        </div>
    )
}

export default NavBarAside;