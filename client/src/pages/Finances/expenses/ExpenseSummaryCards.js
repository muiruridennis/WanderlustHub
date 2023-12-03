import React from 'react';
import { Card, CardContent, Grid, Typography, Badge } from '@mui/material';

const ExpenseSummaryCards = ({ expensesData }) => {
    // Calculate total expenses
    const totalExpenses = expensesData.reduce((total, expense) => total + parseFloat(expense.amount), 0);

    // Calculate average expense per category
    const categories = {};
    expensesData.forEach((expense) => {
        if (categories[expense.category]) {
            categories[expense.category].total += parseFloat(expense.amount);
            categories[expense.category].count++;
        } else {
            categories[expense.category] = {
                total: parseFloat(expense.amount),
                count: 1,
            };
        }
    });
    const averageExpensePerCategory = Object.entries(categories).map(([category, data]) => ({
        category,
        average: data.total / data.count,
    }));
    const approvedExpenses = expensesData.filter((expense) => expense.status === 'Approved');
    const unapprovedExpenses = expensesData.filter((expense) => expense.status !== 'Approved');

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
                <Card sx={{
                    bgcolor: "#B4F1F1",
                    height: { xs: 'auto', md: 170 },
                }}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Total Expenses
                        </Typography>
                        <Typography variant="h4">${totalExpenses.toFixed(2)}</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <Card
                    sx={{
                        bgcolor: "#FFC0DB",
                        height: { xs: 'auto', md: 170 },
                    }}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Average Expense per Category
                        </Typography>
                        {averageExpensePerCategory.length > 0 ? averageExpensePerCategory.map((data) => (
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
                            Approved / Unapproved Expenses
                        </Typography>
                        {approvedExpenses.length > 0 ?
                            <Badge badgeContent={approvedExpenses.length} color="error" sx={{ marginRight: '1rem' }}>
                                <Typography><span style={{ color: "blue", fontWeight: "bold" }}>Approved</span> </Typography></Badge> :
                            <Typography><span style={{ color: "blue", fontWeight: "bold" }}>Approved</span>: None </Typography>

                        }
                        {approvedExpenses.length > 0 ?
                            <Badge badgeContent={unapprovedExpenses.length} color="error" sx={{ marginRight: '1rem' }}>
                                <Typography><span style={{ color: "blue", fontWeight: "bold" }}>Un approved</span> </Typography></Badge> :
                            <Typography><span style={{ color: "blue", fontWeight: "bold" }}>Unupproved</span>: None </Typography>

                        }

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default ExpenseSummaryCards;
