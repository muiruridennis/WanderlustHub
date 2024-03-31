import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box, IconButton, Collapse, Stack, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { formatDistanceToNow, parseISO, isValid } from 'date-fns';
import Meeting from "../../Images/meeting.jpg";
import abedares from "../../Images/abedares.jpg";
import mara from "../../Images/mara.jpg";

const upcomingEvents = [
  {
    id: 1,
    name: 'Maasai Mara Adventure Tour',
    date: '2023-08-15',
    location: 'Mountain Valley',
    description: 'Embark on an unforgettable adventure in the majestic mountain valley.',
    imageURL: mara,
  },
  {
    id: 2,
    name: 'Island Paradise Getaway',
    date: '2023-09-10',
    location: 'Tropical Island',
    description: 'Escape to a tropical paradise and enjoy the sun, sand, and clear blue waters.',
    imageURL: abedares,
  },
  {
    id: 2,
    name: 'Physical Meeting',
    date: '2023-07-7',
    location: 'Undisclosed',
    description: 'Every director should attend',
    imageURL: Meeting,
  },
];


const UpcomingEvents = () => {
  const [expandedCards, setExpandedCards] = React.useState({});

  const handleExpandClick = (cardId) => {
    setExpandedCards((prevExpandedCards) => ({
      ...prevExpandedCards,
      [cardId]: !prevExpandedCards[cardId],
    }));
  };

  const getTimeRemaining = (eventDate) => {
    const parsedEventDate = parseISO(eventDate);
  
    if (!isValid(parsedEventDate)) {
      return <Typography color="error.dark">Invalid date</Typography>;
    }
  
    return formatDistanceToNow(parsedEventDate, { addSuffix: true });
  };
  return (
    <Paper elevation={3} sx={{padding:3}}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Upcoming Events
      </Typography>
      <Grid container spacing={3}>
        {upcomingEvents.map(({ id, imageURL, name, date, location, description }) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                width="100"
                image={imageURL}
                alt={name}
                sx={{
                  objectFit: 'cover', // Ensure the image covers the entire CardMedia
                }}
              />
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  {name}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="subtitle2">{date}</Typography>
                  <Typography variant="subtitle2">{location}</Typography>
                </Box>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}>
                <Stack direction="row" spacing={2} >
                <Typography variant="body2">Time Remaining:  </Typography>
                <Typography variant="body2">{getTimeRemaining(date)}</Typography>
                </Stack>
                <IconButton
                  onClick={() => handleExpandClick(id)}
                  aria-expanded={expandedCards[id]}
                  aria-label="show more"
                >
                  {/* <ExpandMoreIcon /> */}
                  {expandedCards[id] ? null : <Typography variant='button' sx={{color:"#22A699", textTransform:"none"}}>Learn More</Typography>}
                                    <ExpandMoreIcon />
                </IconButton>
              </Box>
              <Collapse in={expandedCards[id]} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>{description}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default UpcomingEvents;