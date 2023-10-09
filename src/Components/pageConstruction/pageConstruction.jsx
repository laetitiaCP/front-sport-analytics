import handyman from "../../Images/handyman.jpg";
import "./pageConstruction.scss";
function PageConstruction({section}) {
    return (
        <div className="construct">
            <h1 className="construct__title">Page {section} en construction</h1>
            <img className="construct__image" src={handyman} alt="bricoleur"/>
        </div>
    )
}

export default PageConstruction;