import React, { useState, useEffect }from 'react'
import {AreaChart,  Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart } from "recharts";
import Form from "./form/expenseform"

const expenses = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
  ];

function Expenses({title, aspect}) {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    // <div className="chart">
    //   <div className="title">{title}</div>
    //   <ResponsiveContainer width="100%" aspect={aspect}>
    //     <AreaChart
    //       width={530}
    //       height={250}
    //       data={expenses}
    //       margin={{ top: 10, right: 30, left: 30, bottom: 0 }}
    //     >
    //       <defs>
    //         <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
    //           <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
    //           <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
    //         </linearGradient>
    //       </defs>
    //       <XAxis dataKey="name" stroke="gray" />
    //       <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
    //       <Tooltip />
    //       <Area
    //         type="monotone"
    //         dataKey="Total"
    //         stroke="#8884d8"
    //         fillOpacity={1}
    //         fill="url(#total)"
    //       />
    //     </AreaChart>
    //   </ResponsiveContainer>
    // </div>
    <Form/>
  )
}

export default Expenses