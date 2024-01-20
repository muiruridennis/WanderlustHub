import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box, Paper, CardActions, Divider, Collapse } from '@mui/material';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import packageA from '../../Images/packageA.jpg'
import packageD from '../../Images/palm.jpg'
import packageB from '../../Images/packageB.jpg'
import packageC from '../../Images/packageC.jpg'

const popularPackages = [
    { id: 1, name: 'Tour Package A', bookings: 50, rating: 4.8, imageURL: packageA },
    { id: 2, name: 'Tour Package B', bookings: 35, rating: 4.0, imageURL: packageB },
    { id: 3, name: 'Tour Package C', bookings: 35, rating: 4.5, imageURL: packageC },
    { id: 4, name: 'Tour Package D', bookings: 70, rating: 4.5, imageURL: packageD },
    // Add more tour packages as needed
];

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const PopularTourPackages = () => {
    const [expandedCards, setExpandedCards] = React.useState({});

    const handleExpandClick = (cardId) => {
        setExpandedCards((prevExpandedCards) => ({
            ...prevExpandedCards,
            [cardId]: !prevExpandedCards[cardId],
        }));
    };

    return (
        <Paper  sx={{ padding:3}}  elevation={3}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Popular Tour Packages
            </Typography>
            <Grid container spacing={3}>
                {popularPackages.map(({ id, imageURL, name, bookings, rating }) => (
                    <Grid item xs={12} sm={6} md={3} key={id}>
                        <Card>
                            {/* Replace 'imageURL' with the actual URL of the package image */}
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
                                    <Typography variant="body2">Bookings: {bookings}</Typography>
                                    <Typography variant="body2">Rating: {rating}</Typography>
                                </Box>
                            </CardContent>
                            <Divider />

                            <CardActions>
                                <ExpandMore
                                    expand={expandedCards[id]}
                                    onClick={() => handleExpandClick(id)}
                                    aria-expanded={expandedCards[id]}
                                    aria-label="show more"
                                >
                                    {expandedCards[id] ? null : <Typography variant='button' sx={{color:"#22A699", textTransform:"none"}}>Learn More</Typography>}
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expandedCards[id]} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                        stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default PopularTourPackages;

