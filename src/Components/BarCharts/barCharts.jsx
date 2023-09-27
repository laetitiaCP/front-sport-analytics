import "./barCharts.scss";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

/**
 * Component BarChart
 * @param data
 * @returns {JSX.Element}
 * @constructor
 */
function BarCharts({data}) {
    console.log(data)
    return (
        <div>
            <BarChart
                width={1000}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5
                }}
            >

                <CartesianGrid
                    strokeDasharray="2 2" //largeur pointillés lignes grid
                    vertical={false}
                    horizontal={true}
                />
                <XAxis dataKey="day" padding={{ left: 0, right: 0}} />
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
                />

                <Tooltip />
                <Legend />
                <Bar yAxisId="kilogram" dataKey="kilogram" fill="black" barSize={5} radius={[10, 10, 0, 0]}/>
                <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={5} radius={[10, 10, 0, 0]}/>
            </BarChart>
        </div>
    )
}

export default BarCharts;