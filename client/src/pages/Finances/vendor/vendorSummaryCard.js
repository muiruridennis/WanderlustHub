import React from 'react';
import { Card, CardContent, Grid, Typography, SvgIcon, Avatar, Stack } from '@mui/material';
import PaymentsIcon from '@mui/icons-material/Payments';
import PeopleIcon from '@mui/icons-material/People';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
const VendorSummaryCards = () => {
  return (
    <Grid container spacing={2} >
      <Grid item xs={12} md={6} lg={6}>
        <Card sx={{
          bgcolor: "#33BBC5",
          height: "auto",
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
                  sx={{ fontWeight: "bold" }}
                >
                   Vendors Count
                </Typography>
                <Typography variant="h4">46</Typography>
              </Stack>
              <Avatar
                sx={{
                  backgroundColor: "#0A2647",
                  height: 56,
                  width: 56
                }}
              >
                <SvgIcon>
                  <PeopleIcon />
                </SvgIcon>
              </Avatar>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Card sx={{
          bgcolor: "#33BBC5",
          height: "auto",
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
                  sx={{ fontWeight: "bold" }}
                >
                  Invoice Count
                </Typography>
                <Typography variant="h4">212</Typography>
              </Stack>
              <Avatar
                sx={{
                  backgroundColor: "#0A2647",
                  height: 56,
                  width: 56
                }}
              >
                <SvgIcon>
                  <ReceiptIcon />
                </SvgIcon>
              </Avatar>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Card sx={{
          bgcolor: "#33BBC5",
          height: "auto",
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
                  sx={{ fontWeight: "bold" }}
                >
                  Total Payments
                </Typography>
                <Typography variant="h4">903030</Typography>
              </Stack>
              <Avatar
                sx={{
                  backgroundColor: "#0A2647",
                  height: 56,
                  width: 56
                }}
              >
                <SvgIcon>
                  <PaymentsIcon />
                </SvgIcon>
              </Avatar>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Card sx={{
          bgcolor: "#33BBC5",
          height: "auto",
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
                  sx={{ fontWeight: "bold" }}
                >
                  Overdue Payments
                </Typography>
                <Typography variant="h4">7</Typography>
              </Stack>
              <Avatar
                sx={{
                  backgroundColor: "#0A2647",
                  height: 56,
                  width: 56
                }}
              >
                <SvgIcon>
                  <CreditScoreIcon />
                </SvgIcon>
              </Avatar>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default VendorSummaryCards;
