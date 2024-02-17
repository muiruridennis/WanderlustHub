import React, { useEffect } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography, Box } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { fetchBookings } from "../../store/actions/bookings"
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';


export const OverviewBookingStats = (props) => {
    const { difference, positive = false } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCardClick = () => {
        // Redirect the admin to the "Bookings" page when the card is clicked
        navigate('/overview/bookings');
    };
    useEffect(() => {
        dispatch(fetchBookings());
    }, [dispatch]);
    const { isLoading, bookingsData } = useSelector((state) => state.Bookings);
    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                <CircularProgress />
            </Box>
        );

    }
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
                            variant="subtitle1"
                            sx={{ fontWeight: "bold" }}                        >
                            Bookings
                        </Typography>
                        <Typography variant="h4">
                            {`${bookingsData.length}`}
                        </Typography>
                    </Stack>
                    <Avatar
                        sx={{
                            backgroundColor: '#1D5D9B',
                            height: 56,
                            width: 56
                        }}
                    >
                        <SvgIcon>
                            <BookOnlineIcon />
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
                                color={positive ? 'success' : 'error'}
                                fontSize="small"
                            >
                                {positive ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                            </SvgIcon>
                            <Typography
                                color={positive ? 'success.main' : 'error.main'}
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
        </Card>
    );
};