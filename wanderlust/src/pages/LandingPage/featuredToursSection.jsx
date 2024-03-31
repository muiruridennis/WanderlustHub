import React from 'react'
import { motion } from 'framer-motion';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import {
    Grid,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Container,
    IconButton,
} from '@mui/material';
import diani from "../../Images/diani3.jpg";
import lamu from "../../Images/lamu.jpg";
import riftvalley from "../../Images/riftvalley.jpg";
import masaimara from "../../Images/masaimara.jpg";
import amboseli from "../../Images/amboseli.jpg";
import mtkenya from "../../Images/mtkenya.jpg";


const featuredTours = [
    {
        title: 'Maasai Mara Safari',
        description: 'Experience the wildlife in the Maasai Mara National Reserve.',
        imageUrl: masaimara,
    },
    {
        title: 'Mount Kenya Trek',
        description: 'Embark on a thrilling trek to the summit of Mount Kenya.',
        imageUrl: mtkenya,
    },
    {
        title: 'Diani Beach Retreat',
        description: 'Relax and unwind on the beautiful shores of Diani Beach.',
        imageUrl: diani,
    },
    {
        title: 'Amboseli National Park Tour',
        description: 'Discover the majestic elephants and breathtaking views in Amboseli.',
        imageUrl: amboseli,
    },
    {
        title: 'Lamu Island Escape',
        description: 'Experience the rich culture and history of Lamu Island.',
        imageUrl: lamu,
    },
    {
        title: 'Great Rift Valley Excursion',
        description: 'Explore the stunning landscapes of the Great Rift Valley.',
        imageUrl: riftvalley,
    },
];


function FeaturedToursSection() {
    return (
        <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <Container>

                <Typography variant="h4" align="center" mt={5} mb={3}>
                    Featured Tours
                </Typography>

                <Grid container spacing={3}>
                    {featuredTours.map((tour, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Card sx={{cursor:"pointer"}}>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <CardMedia
                                            component="img"
                                            sx={{ height: 240 , objectFit:"fill"}}
                                            image={tour.imageUrl}
                                            alt={tour.title}
                                        />
                                    </motion.div>

                                    <CardContent>
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Typography variant="h5" component="div">
                                                {tour.title}
                                            </Typography>
                                        </motion.div>

                                        <Typography variant="body2" color="text.secondary">
                                            {tour.description}
                                        </Typography>
                                    </CardContent>

                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <CardActions>
                                            <IconButton aria-label="add to favorites">
                                                <FavoriteIcon />
                                            </IconButton>
                                            <IconButton aria-label="share">
                                                <ShareIcon />
                                            </IconButton>
                                            <Button size="small" color="primary">
                                                Learn More
                                            </Button>
                                        </CardActions>
                                    </motion.div>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </motion.section>
    )
}

export default FeaturedToursSection