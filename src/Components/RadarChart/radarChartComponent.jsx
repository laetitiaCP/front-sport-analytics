import {RadarChart, PolarGrid, PolarAngleAxis, Radar} from "recharts";
import "./radarCharComponent.scss";
function RadarChartComponent(parData) {
console.log(parData)
    const data = [
        {
            kind: 'cardio',
            12: 80,
            18: 200,
        },
        {
            kind: 'energy',
            12: 120,
            18: 240,
        },
        {
            kind: 'endurance',
            12: 140,
            18: 80,
        },
        {
            kind: 'strength',
            12: 50,
            18: 80,
        },
        {
            kind: 'speed',
            12: 200,
            18: 220,
        },
        {
            kind: 'intensity',
            12: 90,
            18: 110,
        },
    ];
            return (
                <div className="radarChart">
                    <RadarChart outerRadius={100}
                                width={300}
                                height={300}
                                data={data}
                    >
                        <PolarGrid gridType="polygon" radialLines={false} />
                        <PolarAngleAxis dataKey="kind" />
                        <Radar  dataKey="12" stroke="#8884d8" fill="#FF0101" fillOpacity={0.7} />
                    </RadarChart>
                </div>
            );


}

export default RadarChartComponent;