import React from 'react';
import './Chart.css';
import {LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, YAxis} from 'recharts';
function Chart(props) {
    const data = [
        {
            name: '0',
            'Active User': 0,

        },
        {
            name: 'Jan',
            'Active User': 7000,

        },
        {
            name: 'Feb',
                'Active User': 2000,

        },
        {
            name: 'Mar',
            'Active User': 3500,

        },
        {
            name: 'Apr',
            'Active User': 1000,

        },{
            name: 'May',
            'Active User': 4000,

        },{
            name: 'Jun',
            'Active User': 6500,

        },
        {
            name: 'Jul',
            'Active User': 5500,

        },
        {
            name: 'Aug',
            'Active User': 4000,

        },
        {
            name: 'Sep',
            'Active User': 5000,

        },
        {
            name: 'Oct',
            'Active User': 1000,

        },
        {
            name: 'Nov',
            'Active User': 1900,

        },
        {
            name: 'Dec',
            'Active User': 9000,

        },




    ];

    return (
       <>
       <div className="chart">
             <h3 className="chartTitle">Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                   <Line type="monotone" dataKey="Active User" stroke="#5550bd"/>
                     <Tooltip/>
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
                </LineChart>
            </ResponsiveContainer>
       </div>
       </>
    );
}

export default Chart;