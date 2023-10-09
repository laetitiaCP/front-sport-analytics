import iconCalories from "../../Images/icon-calories.png";
import iconProteines from "../../Images/icon-protein.png";
import iconGlucides from "../../Images/icon-glucid.png";
import iconLipides from "../../Images/icon-fat.jpg";
import "./card.scss";

function Card({type, number}) {
    let svg = "";

    switch (type) {
        case "Calories":
            svg = iconCalories;
            break;
        case "Proteines":
            svg = iconProteines;
            break;
        case "Glucides":
            svg = iconGlucides;
            break;
        case "Lipides":
            svg = iconLipides;
            break;
        default:
            svg = "";
    }

    return (
        <div className="card">
            <img className="card__icon" src={svg} alt="icône"/>
            <div className="card__texts">
                <span className="card__texts__number">
                    {number}
                    {type === "Calories" ? "kCal" : "g"}
                </span>
                <span className="card__texts__calories">{type}</span>
            </div>
        </div>
    )
}

export default Card;