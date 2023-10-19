import handyman from "../../Images/handyman.jpg";
import "./pageConstruction.scss";

/**
 * Page in construction component
 * @param {string} section name of the page under construction
 * @returns {JSX.Element} return <div> with title and image
 * @constructor
 */
function PageConstruction({section}) {
    return (
        <div className="construct">
            <h1 className="construct__title">Page {section} en construction</h1>
            <img className="construct__image" src={handyman} alt="bricoleur"/>
        </div>
    )
}

export default PageConstruction;