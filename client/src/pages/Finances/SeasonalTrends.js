import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { transactionsData } from '../../Constants/DummyData';
import { Typography } from '@mui/material';

function SeasonalTrends() {
  // Map months to their revenue totals
  const monthlyRevenue = transactionsData.reduce((revenueMap, transaction) => {
    const { date, amount } = transaction;
    const month = new Date(date).getMonth();
    const revenue = parseFloat(amount.replace('$', ''));

    if (revenueMap[month]) {
      revenueMap[month] += revenue;
    } else {
      revenueMap[month] = revenue;
    }

    return revenueMap;
  }, new Array(12).fill(0));

  // Format the data for the chart
  const chartData = monthlyRevenue.map((revenue, month) => ({
    month: new Date(0, month).toLocaleString('default', { month: 'short' }),
    revenue,
  }));

  return (
    <div>
      <Typography variant="h6">Seasonal Trends</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
      {/* Display other seasonal trends analysis components */}
    </div>
  );
}

export default SeasonalTrends;
