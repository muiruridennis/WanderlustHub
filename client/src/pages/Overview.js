import React from 'react';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { subDays, subHours } from 'date-fns';
import { OverviewBudget } from '../sections/overview/overviewBudget';
import { OverviewTotalProfit } from '../sections/overview/overviewProfit';
import { OverviewTasksProgress } from '../sections/overview/OverviewTasksProgress';
import { OverviewTotalClients } from '../sections/overview/overviewClients';
import { OverviewBookings } from '../sections/overview/overviewBookings';
import ClienytsByGender from '../sections/overview/clienytsByGender';
import { OverviewLatestBookings } from '../sections/overview/OverviewLatestBookings';
import { OverviewExpenses } from '../sections/overview/OverviewExpenses';
import { OverviewPlannedEvents} from '../sections/overview/OverviewPlannedEvents';

function Overview() {
  const now = new Date();
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={3}
          >
            <Grid item
              xs={12}
              sm={6}
              lg={3}
            >
              <OverviewBudget
                difference={12}
                positive
                sx={{ height: '100%' }}
                value="$24k"
              />
            </Grid>
            <Grid item
              xs={12}
              sm={6}
              lg={3}
            >
              <OverviewTotalClients
                difference={16}
                positive={false}
                sx={{ height: '100%' }}
                value="1.6k"
              />
            </Grid>
            <Grid item
              xs={12}
              sm={6}
              lg={3}
            >
              <OverviewTasksProgress
                sx={{ height: '100%' }}
                value={75.5}
              />
            </Grid>
            <Grid item
              xs={12}
              sm={6}
              lg={3}
            >
              <OverviewTotalProfit
                sx={{ height: '100%' }}
                value="$15k"
              />
            </Grid>

            <Grid item
              xs={12}
              lg={7}
            >
              <OverviewBookings
                sx={{ height: '500px' }}
              />
            </Grid>
            <Grid item
              xs={12}
              md={6}
              lg={5}
            >
              <OverviewPlannedEvents
                sx={{ height: '500px' }}
                const events={[
                  {
                    id:1,
                    name: "Thursday Meeting",
                    date:1689125653500,
                    location:"Online"
                  },
                  {
                    id:2,
                    name: "Physical Meeting",
                    date:1689125653500,
                    location:"Not specified"
                  },
                  {
                    id:3,
                    name: "Coast Tour",
                    date:1689129853500,
                    location:"Mombasa"
                  },
                  {
                    id:4,
                    name: "Amboseli  ",
                    date:1555016400000,
                    location:"Amboseli"
                  },
                  {
                    id:5,
                    name: "Coast Tour",
                    date:1689121053500,
                    location:"Mombasa"
                  },
                  {
                    id:6,
                    name: "Coast Tour",
                    date:1689125653500,
                    location:"Mombasa"
                  },
                ]}
              />
            </Grid>
            {/* <Grid item
              xs={12}
              md={6}
              lg={4}
            >
              <ClienytsByGender
                sx={{ height: '500px' }}
              />
            </Grid> */}

            <Grid
              xs={12}
              md={6}
              lg={4}
            >
              <OverviewExpenses
                tours={[
                  {
                    id: '5ece2c077e39da27658aa8a9',
                    name: 'Camera Purchase',
                    amount: 125500,
                    updatedAt: subHours(now, 300).getTime()
                  },
                  {
                    id: '5ece2c0d16f70bff2cf86cd8',
                    amount: 15500,
                    name: 'Hotel Booking',
                    updatedAt: subDays(subHours(now, 8), 2).getTime()
                  },
                  {
                    id: 'b393ce1b09c1254c3a92c827',
                    amount: 67700,
                    name: 'Salaries',
                    updatedAt: subDays(subHours(now, 1), 1).getTime()
                  },
                  {
                    id: 'a6ede15670da63f49f752c89',
                    amount: 56800,
                    name: 'Overland Booking',
                    updatedAt: subDays(subHours(now, 3), 3).getTime()
                  },
                  {
                    id: 'bcad5524fe3a2f8f8620ceda',
                    amount: 4500,
                    name: 'Chef',
                    updatedAt: subDays(subHours(now, 5), 6).getTime()
                  },
                  {
                    id: 'bcad5524fe3a2f8f8620ceda',
                    amount: 14500,
                    name: 'Nairobi National Park',
                    updatedAt: subDays(subHours(now, 5), 6).getTime()
                  }
                ]}
                sx={{ height: '100%' }}
              />
            </Grid>
            <Grid
              xs={12}
              md={12}
              lg={8}
            >
              <OverviewLatestBookings
                bookings={[
                  {
                    id: 'f69f88012978187a6c12897f',
                    ref: 'DEV1049',
                    trip: {
                      name: 'Maasai Mara'
                    },
                    amount: 30.5,
                    client: {
                      name: 'Ekaterina Tankova'
                    },
                    createdAt: 1555016400000,
                    status: 'Pending'
                  },
                  {
                    id: '9eaa1c7dd4433f413c308ce2',
                    ref: 'DEV1048',
                    amount: 25.1,
                    trip: {
                      name: 'The Northern Light'
                    },
                    client: {
                      name: 'Cao Yu'
                    },
                    createdAt: 1555016400000,
                    status: 'Approved'
                  },
                  {
                    id: '01a5230c811bd04996ce7c13',
                    ref: 'DEV1047',
                    amount: 10.99,
                    trip: {
                      name: 'Mombasa Tour'
                    },
                    client: {
                      name: 'Alexa Richardson'
                    },
                    createdAt: 1554930000000,
                    status: 'Rejected'
                  },
                  {
                    id: '1f4e1bd0a87cea23cdb83d18',
                    ref: 'DEV1046',
                    amount: 96.43,
                    trip: {
                      name: 'Mount Kenya'
                    },
                    client: {
                      name: 'Anje Keizer'
                    },
                    createdAt: 1554757200000,
                    status: 'Pending'
                  },
                  {
                    id: '9f974f239d29ede969367103',
                    ref: 'DEV1045',
                    amount: 32.54,
                    trip: {
                      name: 'Maasai Mara'
                    },
                    client: {
                      name: 'Clarke Gillebert'
                    },
                    createdAt: 1554670800000,
                    status: 'Approved'
                  },
                  {
                    id: 'ffc83c1560ec2f66a1c05596',
                    ref: 'DEV1044',
                    amount: 16.76,
                    trip: {
                      name: 'Maasai Mara'
                    },
                    client: {
                      name: 'Adam Denisov'
                    },
                    createdAt: 1554670800000,
                    status: 'Approved'
                  }
                ]}
                sx={{ height: '100%' }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Overview
