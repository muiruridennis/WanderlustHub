// import React from 'react';
// import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
// import { Paper, Typography } from '@mui/material';

// const revenueData = [
//   { name: 'Tour 1', revenue: 2500, profit: 800 },
//   { name: 'Tour 2', revenue: 1800, profit: 600 },
//   { name: 'Tour 3', revenue: 3200, profit: 1000 },
//   // Add more data for other tours or packages
// ];

// const RevenueProfitAnalysis = () => {
//   return (
//     <Paper elevation={3} sx={{padding:3}}>
//       <Typography variant="h6" sx={{ marginBottom: 2 }}>
//         Revenue and Profit Analysis
//       </Typography>
//       <ResponsiveContainer width="100%" height={300}>
//         <PieChart>
//           <Pie
//             data={revenueData}
//             dataKey="revenue"
//             nameKey="name"
//             cx="50%"
//             cy="50%"
//             outerRadius={80}
//             fill="#22A699"
//           >
//             {revenueData.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={getColor(index)} />
//             ))}
//           </Pie>
//           <Legend />
//         </PieChart>
//       </ResponsiveContainer>
//     </Paper>
//   );
// };

// const getColor = (index) => {
//   const colors = ['#22A699', '#3E97D1', '#F06C9B', '#FFD166', '#6A0572'];
//   return colors[index % colors.length];
// };

// export default RevenueProfitAnalysis;
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Paper, Typography } from '@mui/material';

const revenueData = [
  { name: 'Tour 1', revenue: 2500, profit: 800 },
  { name: 'Tour 2', revenue: 1800, profit: 600 },
  { name: 'Tour 3', revenue: 3200, profit: 1000 },
  // Add more data for other tours or packages
];

const RevenueProfitAnalysis = () => {
  // Calculate total revenue and profit
  const totalRevenue = revenueData.reduce((total, data) => total + data.revenue, 0);
  const totalProfit = revenueData.reduce((total, data) => total + data.profit, 0);

  return (
    <Paper elevation={3} sx={{ padding: 3 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Revenue and Profit Analysis
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart animationBegin={500} animationDuration={1000}>
          <Pie
            data={revenueData}
            dataKey="revenue"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#22A699"
            label={({ percent }) => `${(percent * 100).toFixed(2)}%`} // Display percentage label
          >
            {revenueData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(index)} />
            ))}
          </Pie>
          <Legend />
          <Tooltip formatter={(value) => `$${value}`} /> // Format tooltip values as dollars
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
};

const getColor = (index) => {
  const colors = ['#22A699', '#3E97D1', '#F06C9B', '#FFD166', '#6A0572'];
  return colors[index % colors.length];
};

export default RevenueProfitAnalysis;


