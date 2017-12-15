import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

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
    valueB: i % 8 !== 0 && sinHelperWithNoise(i / 100, -100, 200, 100),
    valueC: i % 8 !== 0 && sinHelperWithNoise(i / 100, -100, 200, 1000)
  });
}

export default () => (
  <div>
    <LineChart width={600} height={300} data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}
              syncId="foo">
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Legend />
      <Line connectNulls={true} type="monotone" dataKey="valueA" stroke="#8884d8" activeDot={{r: 8}}/>
      <Line connectNulls={true} type="monotone" dataKey="valueB" stroke="#bbbbbb" activeDot={{r: 8}}/>
    </LineChart>
    <LineChart width={600} height={300} data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}
              syncId="foo">
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Legend />
      <Line connectNulls={true} type="monotone" dataKey="valueC" stroke="#8884d8" activeDot={{r: 8}}/>
      <Line connectNulls={true} type="monotone" dataKey="valueB" stroke="#bbbbbb" activeDot={{r: 8}}/>
    </LineChart>
  </div>
);
