import React from 'react';
import Widget from "../important/widgets/widget"
import Chart from "../important/Chart/Chart"
import { userData } from "../Constants/DummyData"
import { Grid, Container } from '@mui/material';
import Directors from "./Users/Users"
function Home() {
  return (
    <Container>
      <Widget />
      {/* <Grid container sx={{marginTop :2}}>
        <Grid item><Directors/></Grid>
      </Grid> */}
      <Chart data={userData} title="Clients Analytics" grid dataKey="Active User" />
    
    </Container>
  )
}

export default Home