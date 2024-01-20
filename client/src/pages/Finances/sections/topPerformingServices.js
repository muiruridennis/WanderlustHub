import React from 'react';
import { Card, CardContent, Stack, Typography, Avatar } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

export const TopPerformingServices = ({ topServices }) => {
  return (
    <Card>
      <CardContent>
        <Typography color="#0A2647" variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Top Performing Services
        </Typography>
        <Stack spacing={2}>
          {topServices.map((service) => (
            <Stack
              key={service.id}
              alignItems="center"
              direction="row"
              justifyContent="space-between"
              sx={{ borderBottom: "1px solid #ECECEC", pb: 1 }}
            >
              <Avatar sx={{ backgroundColor: '#4CAF50', height: 40, width: 40 }}>
                <TrendingUpIcon />
              </Avatar>
              <Typography variant="body2">{service.name}</Typography>
              <Typography variant="body2">${service.revenue}</Typography>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};
