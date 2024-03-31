
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Typography } from '@mui/material';

const bookingData = [
  { date: '2023-06-30', bookings: 0 },
  { date: '2023-07-01', bookings: 10 },
  { date: '2023-07-02', bookings: 15 },
  { date: '2023-07-03', bookings: 8 },
  { date: '2023-07-03', bookings: 8 },
  { date: '2023-07-10', bookings: 43 },
  { date: '2023-07-13', bookings: 24 },
  { date: '2023-07-23', bookings: 8 },
  // Add more data for other days
];

const BookingTrendsChart = () => {
  return (
    <div style={{ background: '#f5f5f5', padding: '16px', borderRadius: '4px' }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Booking Trends
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={bookingData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }} />
          <Area type="monotone" dataKey="bookings" fill="#22A699" stroke="#22A699" strokeWidth={2} dot={{ r: 5 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BookingTrendsChart;

