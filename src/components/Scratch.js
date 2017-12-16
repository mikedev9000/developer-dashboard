import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceArea } from 'recharts';
import data from '../data/table-data';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';


const getAxisYDomain = (from, to, ref, offset) => {
  const refData = data.slice(from - 1, to);
  let [bottom, top] = [refData[0][ref], refData[0][ref]];
  refData.forEach(d => {
    if (d[ref] > top) top = d[ref];
    if (d[ref] < bottom) bottom = d[ref];
  });

  return [(bottom | 0) - offset, (top | 0) + offset]
};

class Scratch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: data,
      left: 'dataMin',
      right: 'dataMax',
      refAreaLeft: '',
      refAreaRight: '',
      top: 'dataMax+1',
      bottom: 'dataMin-1',
      top2: 'dataMax+20',
      bottom2: 'dataMin-20',
      animation: true
    }
  }

  zoom() {
    let { refAreaLeft, refAreaRight, data } = this.state;

    if (refAreaLeft === refAreaRight || refAreaRight === '') {
      this.setState(() => ({
        refAreaLeft: '',
        refAreaRight: ''
      }));
      return;
    }

    // xAxis domain
    if (refAreaLeft > refAreaRight)
      [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    // yAxis domain
    const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, 'temperature', 1);
    const [bottom2, top2] = getAxisYDomain(refAreaLeft, refAreaRight, 'foo', 50);

    this.setState(() => ({
      refAreaLeft: '',
      refAreaRight: '',
      data: data.slice(),
      left: refAreaLeft,
      right: refAreaRight,
      bottom, top, bottom2, top2
    }));
  };

  zoomOut() {
    const { data } = this.state;
    this.setState(() => ({
      data: data.slice(),
      refAreaLeft: '',
      refAreaRight: '',
      left: 'dataMin',
      right: 'dataMax',
      top: 'dataMax+1',
      bottom: 'dataMin',
      top2: 'dataMax+50',
      bottom: 'dataMin+50'
    }));
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;

    this.gridApi.sizeColumnsToFit();
  }

  render() {

    const { data, barIndex, left, right, refAreaLeft, refAreaRight, top, bottom, top2, bottom2 } = this.state;

    return (
      <div>

        <a
          href="javascript: void(0);"
          className="btn update"
          onClick={this.zoomOut.bind(this)}
        >
          Zoom Out
        </a>

        <LineChart width={800} height={150} data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          syncId="foo"

          onMouseDown={(e, o) => this.setState({ refAreaLeft: e.activeTooltipIndex })}
          onMouseMove={(e) => this.state.refAreaLeft && this.setState({ refAreaRight: e.activeTooltipIndex })}
          onMouseUp={this.zoom.bind(this)}

        >
          <XAxis dataKey="timestamp"
            domain={[left, right]}
             />

          <YAxis

            domain={[bottom, top]}
            type="number"
            yAxisId="1"
          />
          <YAxis
            orientation="right"

            domain={[bottom2, top2]}
            type="number"
            yAxisId="2"
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />


          <Line yAxisId="1" type='natural' dataKey='temperature' stroke='#8884d8' animationDuration={300} />
          <Line yAxisId="2" type='natural' dataKey='foo' stroke='#82ca9d' animationDuration={300} />

          {
            (refAreaLeft && refAreaRight) ? (
              <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} />) : null

          }
        </LineChart>
        <LineChart width={800} height={150} data={data}
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
        <div style={{ height: 300 }} className="ag-theme-fresh">
          <AgGridReact
            // properties
            rowData={data}

            // events
            onGridReady={(params) => this.onGridReady(params)}

            enableSorting

            onRowSelected={(e) => console.log(e)}

          >

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
