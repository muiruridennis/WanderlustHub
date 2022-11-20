import React, { useState, useEffect } from 'react';
import useStyles from "./styles";
import { Container, Grid, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../Actions/users";
import User from "./user/User";

function Directors() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(fetchUsers());
    
  }, [dispatch]);
  const { users } = useSelector((state) => state.users);
  return (
    !users.length ? <CircularProgress className={classes.CircularProgress} /> : (

      <Grid container  spacing={2} className={classes.container}>
        {users.map(user =>( 
          <Grid item key={user.id} xs={12} sm={4} md={4}>
            <User user={user} />
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default Directors