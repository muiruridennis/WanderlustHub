import React from 'react';
import { Card, CardContent, Grid, Typography, SvgIcon, Avatar, Stack } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ProfitSummaryCards = ({ grossProfit, netProfit, netProfitMargin, operatingProfit }) => {
    const isNegative = (value) => value < 0;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={3}>
                <Card sx={{
                    bgcolor: "#33BBC5",
                    height: { xs: 'auto', md: 170 },
                }}>
                    <CardContent>
                        <Stack
                            alignItems="flex-start"
                            direction="row"
                            justifyContent="space-between"
                            spacing={3}
                        >
                            <Stack spacing={1}>
                                <Typography
                                    color="#0A2647"
                                    variant="h6"
                                    sx={{ fontWeight: "bold" }}                        >
                                    Gross Profit
                                </Typography>
                                <Typography variant="h4">${grossProfit.toFixed(2)}</Typography>
                            </Stack>
                            <Avatar
                                sx={{
                                    backgroundColor: isNegative(grossProfit) ? "#D71313" : "#39B54A",
                                    height: 56,
                                    width: 56
                                }}
                            >
                                {isNegative(grossProfit) ? (
                                    <SvgIcon >
                                        <ArrowDownwardIcon />
                                    </SvgIcon>
                                ) : <SvgIcon >
                                    <ArrowUpwardIcon />
                                </SvgIcon>}
                            </Avatar>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <Card sx={{
                    bgcolor: "#33BBC5",
                    height: { xs: 'auto', md: 170 },
                }}>
                    <CardContent>
                        <Stack
                            alignItems="flex-start"
                            direction="row"
                            justifyContent="space-between"
                            spacing={3}
                        >
                            <Stack spacing={1}>
                                <Typography
                                    color="#0A2647"
                                    variant="h6"
                                    sx={{ fontWeight: "bold" }}                        >
                                    Net Profit
                                </Typography>
                                <Typography variant="h4">${netProfit.toFixed(2)}</Typography>
                            </Stack>
                            <Avatar
                                sx={{
                                    backgroundColor: isNegative(netProfit) ? "#D71313" : "#39B54A",
                                    height: 56,
                                    width: 56
                                }}
                            >
                                {isNegative(netProfit) ? (
                                    <SvgIcon >
                                        <ArrowDownwardIcon />
                                    </SvgIcon>
                                ) : <SvgIcon >
                                    <ArrowUpwardIcon />
                                </SvgIcon>}
                            </Avatar>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <Card sx={{
                    bgcolor: "#33BBC5",
                    height: { xs: 'auto', md: 170 },
                }}>
                    <CardContent>
                        <Stack
                            alignItems="flex-start"
                            direction="row"
                            justifyContent="space-between"
                            spacing={3}
                        >
                            <Stack spacing={1}>
                                <Typography
                                    color="#0A2647"
                                    variant="h6"
                                    sx={{ fontWeight: "bold" }}                        >
                                    Net Profit Margin
                                </Typography>
                                <Typography variant="h4">${netProfitMargin.toFixed(2)}</Typography>
                            </Stack>
                            <Avatar
                                sx={{
                                    backgroundColor: isNegative(netProfitMargin) ? "#D71313" : "#39B54A",
                                    height: 56,
                                    width: 56
                                }}
                            >
                                {isNegative(netProfitMargin) ? (
                                    <SvgIcon >
                                        <ArrowDownwardIcon />
                                    </SvgIcon>
                                ) : <SvgIcon >
                                    <ArrowUpwardIcon />
                                </SvgIcon>}
                            </Avatar>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <Card sx={{
                    bgcolor: "#33BBC5",
                    height: { xs: 'auto', md: 170 },
                }}>
                    <CardContent>

                        <Stack
                            alignItems="flex-start"
                            direction="row"
                            justifyContent="space-between"
                            spacing={3}
                        >
                            <Stack spacing={1}>
                                <Typography
                                    color="#0A2647"
                                    variant="h6"
                                    sx={{ fontWeight: "bold" }}                        >
                                    Operating Profit
                                </Typography>
                                <Typography variant="h4">${operatingProfit.toFixed(2)}</Typography>
                            </Stack>
                            <Avatar
                                sx={{
                                    backgroundColor: isNegative(operatingProfit) ? "#D71313" : "#39B54A",
                                    height: 56,
                                    width: 56
                                }}
                            >
                                {isNegative(operatingProfit) ? (
                                    <SvgIcon >
                                        <ArrowDownwardIcon />
                                    </SvgIcon>
                                ) : <SvgIcon >
                                    <ArrowUpwardIcon />
                                </SvgIcon>}
                            </Avatar>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default ProfitSummaryCards;

