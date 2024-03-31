import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ExpensesOverview = (props) => {
    const { difference, positive = false, value } = props;
    const navigate = useNavigate();

    const handleCardClick = () => {
        // Redirect the admin to the "Bookings" page when the card is clicked
        navigate('/overview/finances/expenses');
    };
    return (
        <Card
            sx={{
                cursor: 'pointer',
                height: '100%',
                transition: 'transform 0.3s ease',
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                },
            }}
onClick = { handleCardClick }
    >
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
                    variant="subtitle1"
                    sx={{ fontWeight: "bold" }}                        >
                    Total Expenses
                </Typography>
                <Typography variant="h4">
                    ${value}
                </Typography>
            </Stack>
            <Avatar
                sx={{
                    backgroundColor: '#FFB8B8',
                    height: 56,
                    width: 56
                }}
            >
                <SvgIcon>
                    <MoneyOffIcon />
                </SvgIcon>
            </Avatar>
        </Stack>
        {difference && (
            <Stack
                alignItems="center"
                direction="row"
                spacing={2}
                sx={{ mt: 2 }}
            >
                <Stack
                    alignItems="center"
                    direction="row"
                    spacing={0.5}
                >
                    <SvgIcon
                        color={positive ? 'error' : 'success'}
                        fontSize="small"
                    >
                        {positive ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                    </SvgIcon>
                    <Typography
                        color={positive ? 'error.main' : 'success.main'}
                        variant="body2"
                    >
                        {difference}%
                    </Typography>
                </Stack>
                <Typography
                    color="text.secondary"
                    variant="caption"
                >
                    Since last month
                </Typography>
            </Stack>
        )}
    </CardContent>
        </Card >
    );
};
