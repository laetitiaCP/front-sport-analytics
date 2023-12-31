import {
    CartesianGrid,
    LineChart, Tooltip, XAxis, YAxis, Line, ResponsiveContainer
} from "recharts";
import "./lineChartComponent.scss";
import {useState} from "react";

/**
 * LineChart component
 * @param {Array<Object>} parData data for lineChart
 * @returns {JSX.Element} return <div> with LineChart
 * @constructor
 */
function LineChartComponent(parData) {
    const [perc, setPerc] = useState();
    const [mouseOn, setMouseOn] = useState(false);

    /**
     * customized event handler of mousemove in this chart.
     * @param hoveredData data event
     */
    const onMouseMove = (hoveredData) => {

        if (hoveredData && hoveredData.activePayload) {
            const hoveredX = hoveredData.activePayload[0].payload.day;
            const index = (parData.data).findIndex((d) => d.day === hoveredX);
            const percentage = (((parData.data).length - index - 1) * 100) / ((parData.data).length - 1);

            setPerc(100 - percentage);
            setMouseOn(true);
        }
    };

    /**
     * customized event handler of mouseleave in this chart.
     */
    const onMouseOut = () => {
        setMouseOn(false);
        setPerc(0);
    };

    return (
        <div className="lineChart">
            <ResponsiveContainer>
                <LineChart
                    width={300}
                    height={263}
                    data={parData.data}
                    onMouseMove={onMouseMove}
                    onMouseOut={onMouseOut}
                >
                    <defs>
                        <linearGradient id="colorBackground" x1="0%" y1="0" x2="100%" y2="0" >
                            <stop offset="0%" stopColor="rgba(255, 0, 0)" />
                            { perc !== undefined &&
                                <stop offset={`${perc-4}%`} stopColor="rgba(255, 0, 0)" />
                            }
                            { mouseOn === false
                                ? <stop offset={"100%"} stopColor="rgba(255, 0, 0)" />
                                : <stop offset={"100%"} stopColor="rgba(112, 0, 0)" />
                            }
                        </linearGradient>
                    </defs>
                    <CartesianGrid
                        vertical={false}
                        horizontal={false}
                        fill="url(#colorBackground)"
                    />
                    <svg className="lineChart__title">
                        <text x="10" y="30" fill="white" opacity="70%" >Durée moyenne des</text>
                        <text x="10" y="50" fill="white" opacity="70%" >sessions</text>
                    </svg>
                    <XAxis dataKey="day" tick={<CustomTick />} tickSize={0} axisLine={false} padding={{left:10, right:10}} />
                    <YAxis domain={["dataMin-25", "dataMax+15"]} hide={true}/>
                    <Tooltip content={<CustomTooltip payload={parData} />}/>
                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        stroke="white"
                        strokeWidth={3}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineChartComponent;

/**
 * Customize tooltip
 * @param {Array<Object>} payload data
 * @returns {JSX.Element} return <div> with custom tooltip
 * @constructor
 */
const CustomTooltip = ({payload}) => {
    if (payload[0] !== undefined) {
        const duration = payload[0].payload.sessionLength + "min";

        return (
            <div className="tooltip-lineChart">
                <span>{duration}</span>
            </div>
        )
    }
}

/**
 * Customize tick
 * @param {int} x placement tick XAxis
 * @param {int} y placement tick YAxis
 * @param {Array<Object>} payload
 * @returns {JSX.Element} return custom tick
 * @constructor
 */
const CustomTick = ({x, y, payload}) => {
    return (
        <g className="custom-tick" transform={`translate(${x},${y})`}>
            <text x={0} y={-30} dy={16} fill="#FFFFFF" opacity="0.5" fontSize={12} >
                {payload.value}
            </text>
        </g>
    )
}