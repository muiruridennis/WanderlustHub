import React, { useState } from 'react';
import { Box, Select, MenuItem, Paper } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ExpenseDonutChart = () => {
  const expensesData = [
    {
      month: 'January',
      expenses: [
        { category: 'Accommodation', cost: 500.00 },
        { category: 'Transportation', cost: 300.00 },
        { category: 'Meals', cost: 200.00 },
        { category: 'Entertainment', cost: 150.00 },
        { category: 'Miscellaneous', cost: 100.00 }
      ],
    },
    {
      month: 'February',
      expenses: [
        { category: 'Accommodation', cost: 267.00 },
        { category: 'Transportation', cost: 346.00 },
        { category: 'Meals', cost: 900.00 },
        { category: 'Entertainment', cost: 324.00 },
        { category: 'Miscellaneous', cost: 100.00 }
      ],
    },
    {
      month: 'March',
      expenses: [
        { category: 'Accommodation', cost: 500.00 },
        { category: 'Transportation', cost: 300.00 },
        { category: 'Meals', cost: 200.00 },
        { category: 'Entertainment', cost: 150.00 },
        { category: 'Miscellaneous', cost: 100.00 }
      ],
    },
    {
      month: 'April',
      expenses: [
        { category: 'Accommodation', cost: 700.00 },
        { category: 'Transportation', cost: 300.00 },
        { category: 'Meals', cost: 400.00 },
        { category: 'Entertainment', cost: 150.00 },
        { category: 'Miscellaneous', cost: 100.00 }
      ],
    },
    {
      month: 'May',
      expenses: [
        { category: 'Accommodation', cost: 290.00 },
        { category: 'Transportation', cost: 300.00 },
        { category: 'Meals', cost: 200.00 },
        { category: 'Entertainment', cost: 350.00 },
        { category: 'Miscellaneous', cost: 10.00 }
      ],
    },
    {
      month: 'June',
      expenses: [
        { category: 'Accommodation', cost: 456.00 },
        { category: 'Transportation', cost: 234.00 },
        { category: 'Meals', cost: 124.00 },
        { category: 'Entertainment', cost: 78.00 },
        { category: 'Miscellaneous', cost: 400.00 }
      ],
    },
  ];
  const firstMonth = expensesData.length > 0 ? expensesData[0].month : '';

  const [selectedMonth, setSelectedMonth] = useState(firstMonth); // State to hold the selected month

  // Handle month selection
  const handleMonthSelect = (event) => {
    setSelectedMonth(event.target.value);
  };

  // Find the selected month's expenses
  const selectedMonthExpenses = expensesData.find(expenses => expenses.month === selectedMonth);

  // Calculate total cost for the selected month
  const totalExpenseCost = selectedMonthExpenses
    ? selectedMonthExpenses.expenses.reduce((total, expense) => total + parseFloat(expense.cost), 0)
    : 0;

  // Colors for the pie chart segments
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF99C3', '#8884D8', '#82CA9D', '#FF9F45', '#FFCD58', '#FF8300'];

  return (
    <Box component={Paper} elevation={2}
      sx={{ position: "relative" }}
    >
      <Select value={selectedMonth} onChange={handleMonthSelect} displayEmpty
        sx={{
          position: "absolute", right: "5%", top: "15%", zIndex: 1000, // Set a higher zIndex value
        }}
      >
        <MenuItem value="">
          <em>Select a month</em>
        </MenuItem>
        {expensesData.map((expenses) => (
          <MenuItem key={expenses.month} value={expenses.month}>
            {expenses.month}
          </MenuItem>
        ))}
      </Select>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            dataKey="cost"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label={(entry) => `${entry.category} (${((entry.cost / totalExpenseCost) * 100).toFixed(2)}%)`}
            data={selectedMonthExpenses ? selectedMonthExpenses.expenses : []}
          >
            {selectedMonthExpenses?.expenses.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ExpenseDonutChart;
