import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Typography, Divider, Box, Button, Paper } from '@mui/material';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { io } from 'socket.io-client';
import { formatDistanceToNow, parseISO, isValid } from 'date-fns';


function Notifications() {
  const [connectionStatus, setConnectionStatus] = useState('Connecting...');
  const [receivedNotifications, setReceivedNotifications] = useState([]);
  

  useEffect(() => {
    // Establish a WebSocket connection to your NestJS server
    const socket = io('http://localhost:3000'); // Replace with your server URL
    
    socket.on('connect', () => {
      setConnectionStatus('Connected...');
       // Emit the 'request_all_notifications' event to request notifications from the server
       socket.emit('request_all_notifications');
    });

    socket.on('disconnect', () => {
      setConnectionStatus('Disconnected...');
    });
        // Listen for 'send_all_notifications' messages from the server
    socket.on('send_all_notifications', (notifications) => {
      setReceivedNotifications((prevNotifications) => [
        ...prevNotifications,
        ...notifications,
      ]);
    });

    // Listen for 'receiveNotifications' messages from the server
    socket.on('receive_nofification', (notification) => {
      setReceivedNotifications((prevNotifications) => [
        ...prevNotifications,
        ...notification,
      ]);
    });
    socket.on('newBookingNotification', (notification) => {
      setReceivedNotifications((prevNotifications) => [
        ...prevNotifications,
        ...notification,
      ]);
    });
    
    // Clean up the WebSocket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);
  const getTimeDifference = (eventDate) => {
    const parsedEventDate = parseISO(eventDate);
  
    if (!isValid(parsedEventDate)) {
      return <Typography color="error.dark">Invalid date</Typography>;
    }
  
    return formatDistanceToNow(parsedEventDate, { addSuffix: true });
  };

  return (
 
    <Box >
      <Paper sx={{ paddingLeft: 1, paddingTop:3 }} elevation={3}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Notifications
        </Typography>
        <List>
          {receivedNotifications.map((notification) => (
            <React.Fragment key={notification.id}>
              <ListItem disablePadding>
                <ListItemIcon><CircleNotificationsIcon color='error'/></ListItemIcon>
                <ListItemText
                  primary={notification.message}
                  secondary={getTimeDifference(notification.timestamp)}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
        <Button>
          See all Notifications <ArrowRightAltIcon />
        </Button>
      </Paper>
    </Box>
  );
}

export default Notifications;


