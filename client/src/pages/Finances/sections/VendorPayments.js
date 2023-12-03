import React from 'react';
import { Card, CardContent, Stack, SvgIcon, Typography, Avatar } from '@mui/material';
import MoneyIcon from '@mui/icons-material/Money';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useNavigate } from 'react-router-dom';
export const VendorPayments = ({ totalPayments, difference, positive, sx }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
      navigate('/overview/finances/vendor');
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
        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
          <Stack spacing={1}>
            <Typography color="#0A2647" variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Vendor Payments
            </Typography>
            <Typography variant="h4">${totalPayments}</Typography>
          </Stack>
          <Avatar sx={{ backgroundColor: '#FFC107', height: 56, width: 56 }}>
            <SvgIcon>
              <MoneyIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
        {difference && (
          <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 2 }}>
            <Stack alignItems="center" direction="row" spacing={0.5}>
              <SvgIcon color={positive ? 'success' : 'error'} fontSize="small">
                {positive ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
              </SvgIcon>
              <Typography color={positive ? 'success.main' : 'error.main'} variant="body2">
                {difference}
              </Typography>
            </Stack>
            <Typography color="text.secondary" variant="caption">
              Since last month
            </Typography>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};
