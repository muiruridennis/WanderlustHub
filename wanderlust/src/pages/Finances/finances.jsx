import React from 'react'
import { Container, Grid, Box } from '@mui/material'
// import Expenses from './expenses'
// import MonetaryAnalysis from "./monetaryAnalysis"
// import ProfitMarginAnalysis from './ProfitMarginAnalysis'
// import SeasonalTrends from './SeasonalTrends'
import { Income } from './sections/income';
import { ExpensesOverview } from './sections/expenses';
import { NetProfit } from './sections/NetProfit'
import { VendorPayments } from './sections/VendorPayments';
import { TopPerformingServices } from './sections/topPerformingServices';
import FinanceLineGraph from './sections/FinanceLineGraph';
import ExpenseDonutChart from './sections/expensesDonutChart';
import RecentTransactions from './sections/RecentTransactions';
function Finances() {
    const gridItemProps = { xs: 12, sm: 12, lg: 3 };
    const topServices = [
        { id: 1, name: "Tour Packages ", revenue: 25000 },
        { id: 2, name: "Campings", revenue: 18000 },
        { id: 3, name: "Corporates", revenue: 15000 },
        { id: 4, name: "Road Trips", revenue: 12000 },
        { id: 5, name: "Others", revenue: 9000 },
    ];

    // Usage of the TopPerformingServices component


    return (

        <>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 2,
                    bgcolor: "#ECF8F9"
                }}
            >
                <Container maxWidth="xl">

                    <Grid container spacing={3} sx={{ marginY: 2 }}>
                        <Grid item
                            {...gridItemProps}
                        >
                            <Income
                                difference={12}
                                positive
                                // sx={{ height: '100%' }}
                                value={2434476}
                            />
                        </Grid>
                        <Grid
                            item
                            {...gridItemProps}

                        >
                            <ExpensesOverview
                                difference={12}
                                positive
                                value={56338}
                            />
                        </Grid>
                        <Grid
                            item
                            {...gridItemProps}
                        >
                            <NetProfit
                                difference={7569}
                                positive
                                // sx={{ height: '100%' }}
                                // value="Ksh 65400"
                                value={65400}
                            />
                        </Grid>
                        <Grid
                            item
                            {...gridItemProps}
                        >
                            <VendorPayments
                                difference={12906}
                                negative
                                // sx={{ height: '100%' }}
                                totalPayments={34678}
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        spacing={3}
                        sx={{ marginBottom: 2 }}
                    >
                        <Grid
                            item
                            xs={12} sm={12} lg={7}
                        >
                            <FinanceLineGraph
                            />

                        </Grid>
                        <Grid
                            item
                            xs={12} sm={12} lg={5}
                        >
                            <TopPerformingServices
                                topServices={topServices}
                            />

                        </Grid>

                    </Grid>
                    <Grid container spacing={3} >
                        <Grid item xs={12} sm={12} lg={6}>
                            <RecentTransactions />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6}>
                            <ExpenseDonutChart />
                        </Grid>
                    </Grid>

                </Container>

            </Box>
        </>
    )
}

export default Finances
// Top Selling Packages: Display a list of the top-selling tour packages, along with their revenue contribution. This can help you identify which packages are the most popular and profitable.

// Customer Spending Analysis: Provide insights into the spending behavior of your customers. You can categorize customers based on their spending patterns, such as high spenders, frequent travelers, etc.

// Payment Methods Breakdown: Show the distribution of payments made through different payment methods like credit cards, online wallets, bank transfers, etc.

// Refunds and Cancellations: Display a summary of refunds and cancellations, including the reasons for cancellation. This can help you identify trends and take actions to reduce cancellations.

// Operational Costs: Break down operational costs like employee salaries, marketing expenses, office rent, and other overheads. This can help you manage and optimize your operational budget.

// Currency Exchange Rates: If your app deals with international travel, consider integrating real-time currency exchange rates. This can help you track currency fluctuations and their impact on revenue and expenses.

// Booking Conversion Rates: Analyze the conversion rates from website visits to actual bookings. This can help you identify areas for improvement in your booking process.

// Customer Reviews Impact: Monitor how customer reviews and ratings impact bookings and revenue. Positive reviews can lead to more business, while negative reviews might require attention.

// Promotions and Discounts Impact: Evaluate the impact of different promotions, discounts, and offers on revenue. This can help you refine your pricing and marketing strategies.

// Future Bookings Forecast: Provide a forecast of future bookings based on historical data and trends. This can assist in planning resources and managing capacity.

// Aging of Receivables: If you offer credit terms to customers, track the aging of receivables to ensure timely payment collection.

// Expense Approval Workflow: If your app involves employee expenses, implement an expense approval workflow where employees can submit expenses, and managers can approve or reject them.

// Taxation and Compliance: Include a section to track tax liabilities, compliance requirements, and financial reporting.

// Real-time Alerts: Implement alerts for critical financial events like large refunds, high-value transactions, or unusual expenses.