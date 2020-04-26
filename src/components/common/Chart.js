import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import React from "react";


export default function Chart(props) {
    let data = props.data;
    return (
        <LineChart width={600} height={260} data={data} margin={{top: 5, right: 5, bottom: 5, left: 0}}>
            <Line type="monotone" dataKey="Deg" stroke="#8884d8"/>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
            <XAxis dataKey="name"/>
            <YAxis type="number" domain={['dataMin - 1', 'dataMax']} />
            <Tooltip active={true} />
        </LineChart>
    );
}


