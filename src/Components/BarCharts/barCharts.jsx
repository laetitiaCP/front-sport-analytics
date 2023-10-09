import "./barCharts.scss";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend, ResponsiveContainer,
} from "recharts";

/**
 * Component BarChart
 * @param data
 * @returns {JSX.Element}
 * @constructor
 */
function BarCharts({data}) {
    const CustomName = ({name}) => {
        return <span className="custom-name">{name}</span>
    }

    return (
        <div className="barChart">
            <ResponsiveContainer >
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 10,
                        left: 30,
                        bottom: 5
                    }}
                >
                    <svg className="barChart__title">
                        <text x="30" y="40">Activité quotidienne</text>
                    </svg>
                    <CartesianGrid
                        strokeDasharray="2 2" //largeur pointillés lignes grid
                        vertical={false}
                        horizontal={true}
                    />
                    <XAxis
                        dataKey="day"
                        padding={{ left: 8, right: 8}}
                        scale={"point"}
                    />
                    <YAxis
                        yAxisId="calories"
                        dataKey="calories"
                        axisLine={false}
                        type="number"
                        domain={[0,"dataMax+20"]}
                        hide={true}
                    />
                    <YAxis
                        yAxisId="kilogram"
                        dataKey="kilogram"
                        axisLine={false}
                        tickLine={false} // pour enlever trait à côté du nombre des ordonnées
                        type="number"
                        tickCount={3} // nombre de valeurs sur les ordonnées
                        domain={["dataMin-2","dataMax+1"]}
                        orientation="right"
                        tickMargin={30}
                    />
                    <Tooltip content={<CustomTooltip payload={data}/>} />

                    <Legend verticalAlign="top"  align="right" iconType="circle" height={80} wrapperStyle={{top:20}}/>
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="black" barSize={5} radius={[10, 10, 0, 0]} name={<CustomName name="Poids (kg)" />} />
                    <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={5} radius={[10, 10, 0, 0]} name={<CustomName name="Calories (kCal)" />}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BarCharts;

/**
 * return a custom tooltip
 * @param payload
 * @returns {JSX.Element}
 * @constructor
 */
const CustomTooltip = ({payload}) => {
    if (payload.length !== 0) {
        const weight = payload[0].payload.kilogram + "kg";
        const calories = payload[0].payload.calories + "Kcal";

        return (
            <div className="tooltip">
                <p>{weight}</p>
                <p>{calories}</p>
            </div>
        )
    }
}