import React, { useState, useEffect }from 'react';
import CircularProgress from '../../Components/CircularProgress';
 import {useSelector, useDispatch} from 'react-redux';
 import {Grid} from "@mui/material";
 import { fetchClients } from "../../Actions/clients";
import Director from './User'
function Users() {
  const dispatch = useDispatch();
  
  const { clients } = useSelector((state) => state.clients);
  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);
  return (
    !clients.length ? <CircularProgress /> : (
      <Grid  container alignItems="stretch" spacing={1}>
          {
          clients.map((director) => (
              <Grid key={director.id} item xs={12} sm={6} md={4}>
                  <Director director={director}  />
              </Grid>
          ))}
      </Grid>
  )
  );
}

export default Users