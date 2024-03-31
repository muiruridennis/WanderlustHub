import React from 'react'
import { Paper, Typography, Box, useMediaQuery, useTheme} from "@mui/material";
import MoodBadIcon from '@mui/icons-material/MoodBad';

function Referrals() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div style={{minHeight: "250px", minWidth: isSmallScreen ? "auto" : "960px"}}>
      <Typography align="center"
        sx={{
          marginBottom: "0.5rem",
          fontFamily: "Roboto",
          fontWeight: 700,
          lineHeight: 1.1,
          color: "#364a63",
          p: "1.5em"
        }} > Referral Activities </Typography>
      <Typography align="center" variant="body1">The referral members tree view of this user.</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 4}}>
      <Paper elevation={6}
        sx={{p:3}}
      >
        <MoodBadIcon/>
        <p>No one is yet to join!</p>
      </Paper>
      </Box>
    </div>)
}

export default Referrals