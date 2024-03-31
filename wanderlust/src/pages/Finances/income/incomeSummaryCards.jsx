import React from 'react';
import { Card, CardContent, Grid, Typography, Badge } from '@mui/material';

const IncomeSummaryCards = ({ incomeData }) => {
    // Calculate total income
    const totalIncome = incomeData.reduce((total, income) => total + income.amount, 0);

    // Calculate average income per category
    const categories = {};
    incomeData.forEach((income) => {
        if (categories[income.category]) {
            categories[income.category].total += income.amount;
            categories[income.category].count++;
        } else {
            categories[income.category] = {
                total: income.amount,
                count: 1,
            };
        }
    });
    const averageIncomePerCategory = Object.entries(categories).map(([category, data]) => ({
        category,
        average: data.total / data.count,
    }));
    const receivedIncomes = incomeData.filter((income) => income.status === 'Received');
    const pendingIncomes = incomeData.filter((income) => income.status !== 'Received');

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
                <Card sx={{
                    bgcolor: "#B4F1F1",
                    height: { xs: 'auto', md: 170 },
                }}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Total Income
                        </Typography>
                        <Typography variant="h4">${totalIncome.toFixed(2)}</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <Card
                    sx={{
                        bgcolor: "#FFC0DB",
                        height: { xs: 'auto', md: 190 },
                    }}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Average Income per Category
                        </Typography>
                        {averageIncomePerCategory.length > 0 ? averageIncomePerCategory.map((data) => (
                            <Typography key={data.category}>
                                <span style={{ fontWeight: 'bold', textAlign: "left" }}>{data.category}:</span> ${data.average.toFixed(2)}
                            </Typography>
                        )) :
                            <Typography variant='h6' color="error" sx={{ mt: 4 }}>No data Found</Typography>
                        }

                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
                <Card
                    sx={{
                        bgcolor: "#C1DDFF",
                        height: { xs: 'auto', md: 170 },
                    }}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Received / Pending Incomes
                        </Typography>
                        {receivedIncomes.length > 0 ?
                            <Badge badgeContent={receivedIncomes.length} color="success" sx={{ marginRight: '1rem' }}>
                                <Typography><span style={{ color: "green", fontWeight: "bold" }}>Received</span> </Typography></Badge> :
                            <Typography><span style={{ color: "green", fontWeight: "bold" }}>Received</span>: None </Typography>

                        }
                        {pendingIncomes.length > 0 ?
                            <Badge badgeContent={pendingIncomes.length} color="error" sx={{ marginRight: '1rem' }}>
                                <Typography><span style={{ color: "red", fontWeight: "bold" }}>Pending</span> </Typography></Badge> :
                            <Typography><span style={{ color: "red", fontWeight: "bold" }}>Pending</span>: None </Typography>

                        }

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default IncomeSummaryCards;
