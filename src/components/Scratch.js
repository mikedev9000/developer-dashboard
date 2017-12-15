import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
const d = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100}
];


function sinHelper(progress, min, max) {
  var height = max - min;

  return height * Math.sin(progress * Math.PI) + min;
}

function sinHelperWithNoise(progress, min, max, noise) {
  return sinHelper(progress, min - (Math.random() * noise), max + (Math.random() * noise));
}

const data = [];

for(var i = 0; i < 100; i++) {
  data.push({ name: i,
    valueA: sinHelperWithNoise(i / 100, 0, 100, 10),
    valueB: sinHelperWithNoise(i / 100, -100, 200, 100)
  });
}

export default () => (
  <LineChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid strokeDasharray="3 3"/>
    <Tooltip/>
    <Legend />
    <Line type="monotone" dataKey="valueA" stroke="#8884d8" activeDot={{r: 8}}/>
    <Line type="monotone" dataKey="valueB" stroke="#bbbbbb" activeDot={{r: 8}}/>
  </LineChart>
);
