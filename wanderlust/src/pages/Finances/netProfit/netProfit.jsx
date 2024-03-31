import React from 'react';
import {
    Typography,
    Grid,
    Paper,
    Divider,

} from '@mui/material';
import { calculateNetProfit, calculateGrossProfit, NetProfitPerMonth, calculateNetProfitMargin, calculateOperatingProfit } from "../calculations.js"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ProfitSummaryCards from "./profitSummaryCards";
import Insight from './insight.jsx';

const NetProfit = () => {
   
    const grossProfit = calculateGrossProfit();
    const netProfit = calculateNetProfit();
    const netProfitForMonths = NetProfitPerMonth();
    const netProfitMargin = calculateNetProfitMargin();
    const operatingProfit = calculateOperatingProfit();

    return (
        <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Net Profit</Typography>
            <Divider sx={{ my: 2 }} />

            <ProfitSummaryCards
                grossProfit={grossProfit}
                netProfit={netProfit}
                netProfitMargin={netProfitMargin}
                operatingProfit={operatingProfit}
            />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>

                    <div style={{ background: '#f5f5f5', padding: '16px', borderRadius: '4px' }}>
                        <Typography variant="h6" sx={{ marginBottom: 2 }}>
                            Net Profit Trends
                        </Typography>
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={netProfitForMonths} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                                <YAxis tick={{ fontSize: 12 }} />
                                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }} />
                                <Area type="monotone" dataKey="netProfit" fill="#22A699" stroke="#22A699" strokeWidth={2} dot={{ r: 5 }} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </Grid>
                <Grid item xs={12} md={12}>
                   <Insight/>
                </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Grid container spacing={2}>

                <Grid item xs={12} md={6}>
                    {/* Expense Breakdown */}
                    {/* Implement your expense breakdown component here */}
                </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />




            {/* Notes or Insights */}
            {/* Implement a textarea or input for adding notes/insights */}

            {/* Export Functionality */}
            {/* Implement export functionality here (e.g., export as PDF/CSV) */}
        </Paper>
    );
};

export default NetProfit;
