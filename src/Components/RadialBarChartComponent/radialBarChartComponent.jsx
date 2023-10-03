import {RadialBar, RadialBarChart} from "recharts";
import "./radialBarChartComponent.scss";

function RadialBarChartComponent({data}) {
    console.log(data)
    let score = (data.score) * 100;
    const locdata = [
        {
            score: score,
            fill:"#FF0000"
        }
    ];
    console.log(data)
    return (
        <div className="radialBarChart">
            <RadialBarChart
                width={500}
                height={300}
                data={locdata}

                innerRadius="90%"
                outerRadius="105%"
            >
                <RadialBar
                    minAngle={90}
                    dataKey="score"
                />
                <svg>
                    <text x="100" y="50">Score</text>
                    <text x="250" y="100">{score} %</text>
                    <text x="250" y="120">de votre</text>
                    <text x="250" y="140">objectif</text>
                </svg>
            </RadialBarChart>
        </div>
    )
}

export default RadialBarChartComponent;