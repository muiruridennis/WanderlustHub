import React from 'react';
import { Typography, Button, Box } from '@mui/material';

const ErrorComponent = ({ error, onRetry }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h5" color="error">
        Something went wrong
      </Typography>
      <Typography variant="body1" color="error">
        {error || 'An error occurred.'}
      </Typography>
      {onRetry && (
        <Button variant="contained" color="primary" onClick={onRetry}>
          Retry
        </Button>
      )}
    </Box>
  );
};

export default ErrorComponent;
