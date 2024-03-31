import React from 'react';
import { Card, CardContent, Stack, Typography, Avatar, SvgIcon } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { red } from '@mui/material/colors';
import PendingIcon from '@mui/icons-material/Pending';

const PendingBookings = ({ pendingApprovalCount, pendingPaymentCount }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        // Redirect the admin to the "Bookings" page when the card is clicked
        navigate('/overview/bookings');
    };
    return (
        <Card onClick={handleCardClick}
            sx={{
                cursor: 'pointer',
                height: '100%',
                transition: 'transform 0.3s ease',
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                },
            }}
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
                            sx={{ fontWeight: "bold" }}
                        >
                            Pending Bookings
                        </Typography>
                        <Typography variant="h4">
                            {pendingApprovalCount + pendingPaymentCount}
                        </Typography>
                    </Stack>
                    <Avatar
                        sx={{
                            backgroundColor: red[500],
                            height: 56,
                            width: 56,
                        }}
                    >
                        <SvgIcon>
                            <PendingIcon />
                        </SvgIcon>
                    </Avatar>
                </Stack>
                <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 2 }}>
                    <Stack alignItems="center" direction="row" spacing={0.5}>
                        <Typography color="#000000" variant="body2">
                            Pending Approval:  <strong>{pendingApprovalCount}</strong>
                        </Typography>
                    </Stack>
                    <Typography color="#000000" variant="body2">
                        Pending Payment Confirmation:  <strong>{pendingPaymentCount}</strong>
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default PendingBookings;
