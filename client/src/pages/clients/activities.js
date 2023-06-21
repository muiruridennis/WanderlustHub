import React from 'react';
import { Typography, Box, Paper, List, ListItem, ListItemText, Grid, Divider, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useTheme } from '@mui/material/styles';


const ClientActivities = () => {
  const theme = useTheme();
  // Placeholder data for client activities (replace with actual data from API or state)
  const clientActivities = [
    {
      id: 1,
      date: '2023-06-01',
      description: 'Booked a City Tour',
      activityType: 'Booking'
    },
    {
      id: 2,
      date: '2023-06-15',
      description: 'Attended a Special Event',
      activityType: 'Event'
    },
    // Add more client activities as needed
  ];

  return (
    <Box>
      <Paper elevation={3} sx={{ padding: 3,bgcolor: '#ECF2FF' }}>
        <Typography variant="h6" align="left">Client Activities</Typography>
        <Box my={2}>
          {clientActivities.length > 0 ? (
            <List>
              {clientActivities.map((activity, index) => (
                <React.Fragment key={activity.id}>
                  <ListItem>


                    <Stack direction="row" spacing={5} sx={{ alignItems: "center" }}>
                      <Stack direction="row" sx={{ alignItems: "center" }}>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={activity.date}
                          secondary={activity.description}
                        />
                      </Stack>
                      <Typography variant="body2">
                        Activity Type: {activity.activityType}
                      </Typography>
                    </Stack>

                  </ListItem>
                  {index < clientActivities.length - 1 && <Divider sx={{ bgcolor: theme.palette.secondary.light }} />}
                </React.Fragment>
              ))}
            </List>
          ) : (
            <Typography variant="body2">No client activities</Typography>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default ClientActivities;
