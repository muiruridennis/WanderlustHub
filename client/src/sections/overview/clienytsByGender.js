import { Card } from '@mui/material';
import React from 'react'
import {
    PieChart,
    Pie,
    Legend,
    Cell,
    ResponsiveContainer,
    Label
} from 'recharts';

const data01 = [
    { name: "Expenses", value:70 },
    { name: "Profits", value: 23 },
    { name: "Loses", value: 1 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const Bullet = ({ backgroundColor, size }) => {
    return (
      <div
        className="CirecleBullet"
        style={{
          backgroundColor,
          width: size,
          height: size
        }}
      ></div>
    );
  };
  
  const CustomizedLegend = (props) => {
    const { payload } = props;
    return (
      <ul className="LegendList">
        {payload.map((entry, index) => (
          <li key={`item-${index}`}>
            <div className="BulletLabel">
              <Bullet backgroundColor={entry.payload.fill} size="10px" />
              <div className="BulletLabelText">{entry.value}</div>
            </div>
            <div style={{ marginLeft: "20px" }}>{entry.payload.value}</div>
          </li>
        ))}
      </ul>
    );
  };
  
  const CustomLabel = ({ viewBox, labelText, value }) => {
    const { cx, cy } = viewBox;
    return (
      <g>
        <text
          x={cx}
          y={cy}
          className="recharts-text recharts-label"
          textAnchor="middle"
          dominantBaseline="central"
          alignmentBaseline="middle"
          fontSize="15"
        >
          {labelText}
        </text>
        <text
          x={cx}
          y={cy + 20}
          className="recharts-text recharts-label"
          textAnchor="middle"
          dominantBaseline="central"
          alignmentBaseline="middle"
          fill="#0088FE"
          fontSize="26"
          fontWeight="600"
        >
          {value}
        </text>
      </g>
    );
  };
function ClienytsByGender({ sx }) {
    return (
        <Card sx={sx}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data01}
                        dataKey="value"
                        cx={200}
                        cy={200}
                        innerRadius={80}
                        outerRadius={100}
                    >
                        {data01.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                        <Label
                            content={<CustomLabel labelText="Finance" value={1} />}
                            position="center"
                        />
                    </Pie>
                    <Legend content={<CustomizedLegend />} />
                </PieChart>
            </ResponsiveContainer>
        </Card>
    )
}

export default ClienytsByGender
