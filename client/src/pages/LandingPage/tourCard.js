import React from 'react';
import {
    Typography, Button, Grid, Card, CardMedia, CardContent,
    CardActions, Container, Divider, Stack, Tooltip, Rating
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RowingIcon from '@mui/icons-material/Rowing';
import PlaceIcon from '@mui/icons-material/Place';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
function TourCard({ tourPackage, onDetailsClick }) {
    const navigate = useNavigate()
    const { title, image, id, days, activities, places, price, location } = tourPackage;

    const viewMoreDetails = () => {
        navigate(`/tour-details/${id}`);
        window.scrollTo(0, 0)

    };
    return (
        <Card elevation={2} sx={{ maxHeight: '100%' }}>

            <CardMedia
                component="div"
                sx={{
                    position: 'relative',
                    height: '200px',
                    overflow: 'clip',
                }}
            >
                <img
                    src={image}
                    alt={title}
                    style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                    }}
                />
                <Button sx={{ position: 'absolute', top: 8, left: 8 }} color="inherit">
                    <LocationOnIcon /> {title}
                </Button>
            </CardMedia>

            <CardContent style={{ flexGrow: 1 }}>
                <Rating name="size-small" defaultValue={4.5} size="small" readOnly />

                {/* <Link to={link} > */}
                <Typography variant="h6" sx={{ marginTop: '1rem', fontWeight: 600, mb: 1 }}>
                    {title}
                </Typography>
                {/* </Link> */}
                <Typography variant="body1" color="black" align="left">
                    <PlaceIcon fontSize='small' color='success' sx={{ verticalAlign: 'middle' }} /> {`${location} `}
                </Typography>
                <Typography variant="body1" color="black" align="left">
                    <AttachMoneyIcon fontSize='small' color='success' sx={{ verticalAlign: 'middle' }} /> {`Price : ${price} `}
                </Typography>
                <Divider sx={{ mb: 2, border: 0.1, mt: 2 }} />
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Typography variant="body2" color="black" align="center">
                        <AccessTimeIcon fontSize='small' color='success' sx={{ verticalAlign: 'middle' }} /> {`${days} Days`}
                    </Typography>
                    <Typography variant="body2" color="black" align="center">
                        <RowingIcon fontSize='small' color='success' sx={{ verticalAlign: 'middle' }} /> {`${activities} Activities`}
                    </Typography>
                    <Typography variant="body1" color="black" align="center">
                        <PlaceIcon fontSize='small' color='success' sx={{ verticalAlign: 'middle' }} /> {`${places} Places`}
                    </Typography>

                </Stack>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
                <Tooltip title="Learn More" arrow>
                        <Button
                            variant='contained'
                            color='inherit'
                            onClick={viewMoreDetails}
                            sx={{ borderTop: '1px solid #ccc' }}
                        >
                            Learn More <ArrowForwardIcon />
                        </Button>
                </Tooltip>
            </CardActions>
        </Card>
    )
}

export default TourCard