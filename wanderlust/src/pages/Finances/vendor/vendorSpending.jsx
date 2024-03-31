
import React, { useState } from 'react';
import {
    Typography,
    Select,
    MenuItem,
    Box,
    IconButton

} from '@mui/material';
import PaidIcon from '@mui/icons-material/Paid';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const spendingData = [
    {
        month: "Jan",
        spending: [
            { date: 2, spent: 455 },
            { date: 5, spent: 978 },
            { date: 8, spent: 900 },
            { date: 13, spent: 1566 },
            { date: 18, spent: 1245 },
            { date: 26, spent: 600 },
        ],
    },
    {
        month: "Feb",
        spending: [
            { date: 5, spent: 800 },
            { date: 20, spent: 1000 },
        ],
    },
];


const months = [
    { value: 'Jan', label: 'January' },
    { value: 'Feb', label: 'February' },
    { value: 'Mar', label: 'March' },
    { value: 'Apr', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'Jun', label: 'June' },
    // ... add more months
];
const VendorMonthlySpending = () => {
    const [selectedMonth, setSelectedMonth] = useState('Jan'); // Default selected month

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    const selectedMonthData = spendingData.find(data => data.month === selectedMonth);
    const spendingChartData = selectedMonthData ? selectedMonthData.spending : [];

    return (
        <Box sx={{ background: '#f5f5f5', padding: '16px', borderRadius: '4px' }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Vendor Monthly Spending
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginRight: 4, marginLeft: 4 }}>
                <IconButton size="large" color='primary'>
                    <PaidIcon fontSize="large" />
                </IconButton>
                <Select
                    value={selectedMonth}
                    onChange={handleMonthChange}
                    label="Select Month"
                >
                    {months.map((month) => (
                        <MenuItem key={month.value} value={month.value}>
                            {month.label}
                        </MenuItem>
                    ))}
                </Select>
            </Box>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={spendingChartData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }} />
                    <Legend />
                    <Area
                        key={selectedMonth}
                        type="monotone"
                        dataKey="spent" 
                        stackId="1"
                        fill="#22A699"
                        stroke="#22A699"
                        strokeWidth={2}
                        dot={{ r: 5 }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default VendorMonthlySpending;
