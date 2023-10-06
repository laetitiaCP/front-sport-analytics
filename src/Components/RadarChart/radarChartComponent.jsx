import {RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer} from "recharts";
import "./radarCharComponent.scss";

/**
 * component qui renvoie un RadarChart
 * @param parData
 * @returns {JSX.Element}
 * @constructor
 */
function RadarChartComponent(parData) {
    return (
        <div className="radarChart">
            <ResponsiveContainer>
                <RadarChart outerRadius={60}
                            width={240}
                            height={250}
                            data={parData.data}
                >
                    <PolarGrid gridType="polygon" radialLines={false} />
                    <PolarAngleAxis dataKey="kind" dy={7} tickSize={15} tick={{fill:"white", fontSize:15}}/>
                    <Radar  dataKey="value" stroke="#8884d8" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default RadarChartComponent;