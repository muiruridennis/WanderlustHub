
import { Paper } from '@mui/material';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FinanceLineGraph = () => {
    const generateRandomAmount = () => {
        return Math.floor(Math.random() * 10000 + 500) + '.00'; // Generating random amounts
    };

    const incomeData = [];
    const expensesData = [];

    // Generate data for March to December
    for (let month = 3; month <= 12; month++) {
        const monthStr = month < 10 ? '0' + month : month.toString();

        incomeData.push({ date: `2023-${monthStr}-01`, amount: `$${generateRandomAmount()}` });

        // Matching date with income date
        expensesData.push({ date: `2023-${monthStr}-01`, amount: `$${generateRandomAmount()}` });
    }

    const lineGraphData = incomeData.map(incomeEntry => {
        const matchingExpense = expensesData.find(expenseEntry => expenseEntry.date === incomeEntry.date);

        return {
            date: incomeEntry.date,
            income: parseFloat(incomeEntry.amount.replace('$', '')),
            expenses: matchingExpense ? parseFloat(matchingExpense.amount.replace('$', '')) : 0,
        };
    });

    return (
        <Paper>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={lineGraphData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="income" stroke="#8884d8" name="Income" />
                    <Line type="monotone" dataKey="expenses" stroke="#82ca9d" name="Expenses" />
                </LineChart>
            </ResponsiveContainer>
        </Paper>
    );
};

export default FinanceLineGraph;

