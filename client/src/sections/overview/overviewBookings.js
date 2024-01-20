
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Card, Typography } from '@mui/material';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        month: 'Jan',
        2023: 400,
        2022: 240,
    },
    {
        month: 'Feb',
        2023: 300,
        2022: 138,
    },
    {
        month: 'March',
        2023: 207,
        2022: 988,
    },
    {
        month: 'April',
        2023: 274,
        2022: 393,
    },
    {
        month: 'May',
        2023: 189,
        2022: 484,
    },
    {
        month: 'June',
        2023: 238,
        2022: 385,
    }, {
        month: 'July',
        2023: 200,
        2022: 940,
    },
    {
        month: 'August',
        2023: 708,
        2022: 638,
    },
    {
        month: 'September',
        2023: 570,
        2022: 668,
    },
    {
        month: 'October',
        2023: 574,
        2022: 493,
    },
    {
        month: 'November',
        2023: 189,
        2022: 384,
        
    },
    {
        month: 'December',
        2023: 738,
        2022: 685,
    },

];

export const OverviewBookings = (props) => {
    const { sx } = props;

    return (
        <Card sx={sx} >
            <Typography
                color="#2B3467"
                variant="subtitle1"
                sx={{ fontWeight: "bold" }}
            >Bookings</Typography>
            <ResponsiveContainer
                width="100%"
                height="100%"
            >
                <BarChart
                    width={200}
                    height={150}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={10}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="2023" fill="#8F43EE" />
                    <Bar dataKey="2022" fill="#19A7CE" />
                </BarChart>
            </ResponsiveContainer>
        </Card>
    );
};