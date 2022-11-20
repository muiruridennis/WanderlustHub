import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Avatar } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';

import useStyles from './styles';
import { fetchUserAvatar } from "../../../Actions/avatar"

function User({ user }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(async () => {
        dispatch(fetchUserAvatar(user.avatarId))
    }, [dispatch]);

    const { avatars } = useSelector((state) => state.avatar)
    console.log("User avaters", user.avatarId);

    return (
        <Card className={classes.card}>
              {/* <CardMedia
                component="img"
                image={user.avatarId}
               
                className={classes.media}
            ></CardMedia> */}
            <CardMedia><Avatar/></CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className={classes.title}>
                    {`${user.firstName} ${user.lastName}`
                        || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles,
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small">Share</Button>
            </CardActions>
        </Card>
    )
}

export default User