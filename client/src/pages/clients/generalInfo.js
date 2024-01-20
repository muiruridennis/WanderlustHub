import React from 'react';
import { Typography, Box, Grid, Stack, Paper, Avatar, Divider } from '@mui/material';
import displayPhoto from "../../Images/display-photo.jpg";
import LoyaltyProgram from './loyaltyProgram';
import {DeleteClient} from './deleteClient';
const CustomerPage = () => {
  const detailSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  return (
    <Box sx={{ py: 2 }}>
      <Grid container spacing={4}>
        <Grid item sm={12} md={4} lg={4}>
          <Stack>
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Box>
                <Typography variant="h6">Contact Details</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                <Avatar src={displayPhoto} alt="Display Photo" sx={{ width: 56, height: 56 }} />
                <Typography variant="subtitle2" sx={{ marginLeft: 2 }}>
                  <span style={{ color: "#068DA9" }}>Name:  </span> Fazul M,cute
                </Typography>

              </Box>
              <Divider sx={{ marginY: 2 }} />

              <Box sx={detailSectionStyle}>
                <Typography variant="subtitle2" gutterBottom sx={{ color: "#068DA9" }} >
                  Email:
                </Typography>
                <Typography variant="body1">fazulmcute@gmail.com</Typography>
              </Box>
              <Divider sx={{ marginY: 2 }} />

              <Box sx={detailSectionStyle}>
                <Typography variant="subtitle2" gutterBottom sx={{ color: "#068DA9" }} >
                  Phone:
                </Typography>
                <Typography variant="body1">+254 7167 38240</Typography>
              </Box>
              <Divider sx={{ marginY: 2 }} />

              <Box sx={detailSectionStyle}>
                <Typography variant="subtitle2" gutterBottom sx={{ color: "#068DA9" }} >
                  Country:
                </Typography>
                <Typography variant="body1">Kenya</Typography>
              </Box>
              <Divider sx={{ marginY: 2 }} />

              <Box sx={detailSectionStyle}>
                <Typography variant="subtitle2" gutterBottom sx={{ color: "#068DA9" }} >
                  Street:
                </Typography>
                <Typography variant="body1">4 Scoville Street South B</Typography>
              </Box>

              <Divider sx={{ marginY: 2 }} />

            </Paper>
            <Paper>
              <DeleteClient />
            </Paper>
          </Stack>
        </Grid>
        <Grid item sm={12} md={5} lg={5}>
          <Stack>
            <LoyaltyProgram />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerPage;
