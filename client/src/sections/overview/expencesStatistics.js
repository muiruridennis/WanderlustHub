import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Typography, Box, Paper } from '@mui/material';

const expenseData = [
  { month: 'January', category: 'Accommodation', value: 1200 },
  { month: 'January', category: 'Transportation', value: 800 },
  { month: 'January', category: 'Food', value: 500 },
  { month: 'February', category: 'Accommodation', value: 1000 },
  { month: 'February', category: 'Transportation', value: 600 },
  { month: 'February', category: 'Food', value: 300 },
  { month: 'March', category: 'Accommodation', value: 1500 },
  { month: 'March', category: 'Transportation', value: 700 },
  { month: 'March', category: 'Food', value: 400 },
  // Add more data for other months and categories
];

const colors = ['#22A699', '#FF8042', '#FFBB28']; // Add more colors if needed

const ExpenseStatisticsChart = () => {
  // Get unique months from the expenseData
  const months = [...new Set(expenseData.map((data) => data.month))];

  // Create a custom data structure with the total values for each month and category
  const modifiedData = expenseData.reduce((acc, data) => {
    const { month, category, value } = data;
    if (!acc[category]) {
      acc[category] = { category };
    }
    acc[category][month] = value;
    return acc;
  }, {});

  // Convert the modified data object into an array of objects
  const chartData = Object.values(modifiedData);

  return (
    <Paper elevation={3} sx={{padding:2}}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Expense Statistics
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
      <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }} />

          {months.map((month, index) => (
            <Bar key={month} dataKey={month} fill={colors[index % colors.length]} barSize={30} animationDuration={600}/>
          ))}
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default ExpenseStatisticsChart;


