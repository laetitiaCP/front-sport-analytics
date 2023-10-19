import {PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer} from "recharts";
import "./radialBarChartComponent.scss";

/**
 * RadialBarChart component
 * @param {Array<Object>} data data for the radialbarchart component
 * @returns {JSX.Element} return radialbarchart component
 * @constructor
 */
function RadialBarChartComponent({data}) {

    let score
    if (data.length > 0) {
        score = data[0].score;
    }

    return (
        <div className="radialBarChart">
            <ResponsiveContainer>
                <RadialBarChart
                    width={300}
                    height={263}
                    data={data}
                    innerRadius="70%"
                    outerRadius="90%"
                    barSize={10}
                    startAngle={180}
                    endAngle={-360}
                >
                    <svg>
                        <text className="score" x="40" y="50">Score</text>
                        <circle fill="white" cx="143" cy="130" r={90} />
                        <text className="text" textAnchor="middle">
                            <tspan className="text__pourcent" alignmentBaseline="baseline" x="150" y="120">{score} %</tspan>
                            <tspan className="text__text" alignmentBaseline="baseline" x="150" y="150">de votre</tspan>
                            <tspan className="text__text" alignmentBaseline="baseline" x="150" y="170">objectif</tspan>
                        </text>
                    </svg>
                    <PolarAngleAxis type="number" domain={[0,100]} angleAxisId={0} tick={false} />
                    <RadialBar
                        dataKey="score"
                        angleAxisId={0}
                        minAngle={0}
                        fill="#FF0000"
                        background={true}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default RadialBarChartComponent;