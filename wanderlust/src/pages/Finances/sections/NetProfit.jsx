import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export const NetProfit = (props) => {
    const { difference, positive = false, value } = props;
    const navigate = useNavigate();

    const handleCardClick = () => {
        // Redirect the admin to the "Bookings" page when the card is clicked
        navigate('/overview/finances/netprofit');
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
            onClick={handleCardClick}
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
                            Net Profit
                        </Typography>
                        <Typography variant="h4">
                            ${value}
                        </Typography>
                    </Stack>
                    <Avatar
                        sx={{
                            backgroundColor: positive ? '#8CC0DE' : '#FFB8B8',
                            color: positive ? 'white' : '#FF4C4C',
                            height: 56,
                            width: 56
                        }}
                    >
                        <SvgIcon>
                            {positive ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
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
                        <Typography
                            color={positive ? 'success.main' : 'error.main'}
                            variant="body2"
                        >
                            {positive ? '+' : '-'} Ksh{Math.abs(difference).toFixed(2)}
                        </Typography>
                        <Typography
                            color="text.secondary"
                            variant="caption"
                        >
                            Since last month
                        </Typography>
                    </Stack>
                )}
            </CardContent>
        </Card>
    );
};
