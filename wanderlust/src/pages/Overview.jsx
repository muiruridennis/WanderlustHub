import React from 'react';
import { Box, Container, Grid, } from '@mui/material';
import { subDays, subHours } from 'date-fns';
import { OverviewBudget } from '../sections/overview/overviewBudget';
import { OverviewTotalProfit } from '../sections/overview/overviewProfit';
import { OverviewTasksProgress } from '../sections/overview/OverviewTasksProgress';
import { OverviewTotalUsers } from '../sections/overview/overviewUsers';
import { OverviewBookingStats } from '../sections/overview/overviewBookingStats';
import { OverviewBookings } from '../sections/overview/overviewBookings';
import RevenueProfitAnalysis from '../sections/overview/clienytsByGender';
import PendingBookings from '../sections/overview/PendingBookings';
import PopularTourPackages from '../sections/overview/PopularTourPackages';
import { OverviewExpenses } from '../sections/overview/OverviewExpenses';
import UpcomingEvents from '../sections/overview/OverviewPlannedEvents';
import Notifications from '../sections/overview/notifications';
import RecentActivities from '../sections/overview/recentActivities';
import BookingTrendsChart from '../sections/overview/bookingTrends';
import ExpenseStatisticsChart from '../sections/overview/expencesStatistics'

function Overview() {
  const now = new Date();
  const gridItemProps = { xs: 12, sm: 12, lg: 3 };
  const pendingApprovalCount = 10;
  const pendingPaymentCount = 5;

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          bgcolor: "#ECF8F9"
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={3}
            sx={{ mb: 6 }}
          >
            <Grid item
              {...gridItemProps}
            >
              <OverviewBookingStats
                difference={12}
                positive
                sx={{ height: '100%' }}
              />
            </Grid>
            <Grid item
              {...gridItemProps}

            >
              <PendingBookings
                pendingApprovalCount={pendingApprovalCount}
                pendingPaymentCount={pendingPaymentCount}
              />
            </Grid>
            <Grid item
              {...gridItemProps}
            >
              <OverviewBudget
                difference={12}
                positive
                sx={{ height: '100%' }}
                value="$24k"
              />
            </Grid>
            <Grid item
              {...gridItemProps}
            >
              <OverviewTotalUsers
                difference={16}
                positive={true}
                value="1.6k"
              />
            </Grid>
            <Grid item
              {...gridItemProps}
            >
              <OverviewTasksProgress
                sx={{ height: '100%' }}
                value={75.5}
              />
            </Grid>
            <Grid
              item
              {...gridItemProps}
            >
              <OverviewTotalProfit
                sx={{ height: '100%' }}
                value="$15k"
              />
            </Grid>
          </Grid>
          {/* <Divider /> */}
          <Grid
            container
            spacing={3}
            sx={{ mb: 6 }}
          >
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
            >
              <RecentActivities />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              lg={6}
            >
              < Notifications
                sx={{ height: '100%' }}
                value="$15k"
              />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            sx={{ mb: 6 }}

          >
            <Grid item
              xs={12}
              md={6}
              lg={6}
            >
              <BookingTrendsChart />
            </Grid>
            <Grid item
              xs={12}
              md={6}
              lg={6}
            >
              <ExpenseStatisticsChart />
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ mb: 6 }}
          >
            <Grid item
              xs={12}
              md={12}
              lg={12}
            >
              <PopularTourPackages
                sx={{ height: '500px' }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ mb: 6 }}
          >
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              sm={12}
            >
              <UpcomingEvents
                sx={{ height: '500px' }}

              />
            </Grid>
          </Grid>
          <Grid item
            xs={12}
            md={6}
            lg={4}
          >
            <RevenueProfitAnalysis
              sx={{ height: '500px' }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            sm={12}
          >

          </Grid>

        </Container>
      </Box>
    </>
  )
}

export default Overview
