import React, { useEffect, useState } from 'react';
import { Grid, } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux';
import Tour from './tour';
import { fetchTours } from '../../features/toursSlice';
import Circularprogress from "../../Components/CircularProgress"


function Tours() {
  const dispatch = useDispatch();
  const { tours, isLoading } = useSelector((state) => state.tours)

  useEffect(() => {
    dispatch(fetchTours())

  }, [dispatch])
  if (!tours.length && !isLoading) return "No Tours Found"

  return (
    isLoading ? <Circularprogress /> : (
      <Grid container alignItems="stretch" spacing={3}>
        {tours.map((tour) => (
          <Grid key={tour.id} item xs={12} sm={6} md={4} lg={3} >
            <Tour tour={tour} />
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default Tours
