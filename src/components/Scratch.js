import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import data from '../data/table-data';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';

class Scratch extends React.Component {


  onGridReady(params) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;

    this.gridApi.sizeColumnsToFit();
  }

  render() {
    return (
      <div>
        <LineChart width={400} height={300} data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          syncId="foo">
          <XAxis dataKey="timestamp" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line connectNulls type="monotone" dataKey="temperature" stroke="#8884d8" />
        </LineChart>
        <LineChart width={400} height={300} data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          syncId="foo">
          <XAxis dataKey="timestamp" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line connectNulls type="monotone" dataKey="foo" stroke="#8884d8" />
          <Line connectNulls type="monotone" dataKey="bar" stroke="#bbbbbb" />
        </LineChart>
        <div style={{ height: 115 }} className="ag-theme-fresh">
          <AgGridReact
            // properties
            rowData={data}

            // events
            onGridReady={(params) => this.onGridReady(params)}>

            {/*column definitions */}
            <AgGridColumn field="timestamp"></AgGridColumn>
            <AgGridColumn field="temperature"></AgGridColumn>
            <AgGridColumn field="foo"></AgGridColumn>
            <AgGridColumn field="bar"></AgGridColumn>
          </AgGridReact>
        </div>
      </div>
    );
  }
}

export default Scratch;
