import iconCalories from "../../Images/icon-calories.png";
import "./card.scss";

function Card({data}) {
    console.log(data)
    return (
        <div className="card">
            <img src={iconCalories}/>
            <div className="card__texts">
                <span>{data}kCal</span>
                <span>Calories</span>
            </div>
        </div>
    )
}

export default Card;