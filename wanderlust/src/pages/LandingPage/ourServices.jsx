import React from 'react';
import { Typography, Button, Grid, Container, Card, CardContent, CardActions , CardMedia} from '@mui/material';
import { motion } from 'framer-motion';

import accommodation from "../../Images/icons/accomodation.png";
import booking from "../../Images/icons/booking.png";
import packages from "../../Images/icons/suitcase.png";
import destination from "../../Images/icons/destination.png";

const servicesData = [
    {
        title: 'Guided Tours',
        description: 'Explore the world with our experienced and knowledgeable guides.',
        features: [
            'Customized itineraries',
            'Expert local guides',
            'Cultural insights',
            'Memorable experiences',
        ],
        iconUrl: destination,
    },
    {
        title: 'Tour Packages',
        description: 'Discover the world with our carefully crafted tour packages covering diverse destinations.',
        features: [
            'Customized itineraries',
            'Local expert guides',
            'Comfortable accommodations',
            'Cultural immersion',
        ],
        iconUrl: packages,
    },
    {
        title: 'Hotel Bookings',
        description: 'Book your stay at top-rated hotels with our hassle-free booking services.',
        features: [
            'Wide range of hotel options',
            'Best price guarantee',
            'Flexible booking options',
            '24/7 customer support',
        ],
        iconUrl: booking,
    },
    {
        title: 'Safari Packages',
        description: 'Embark on an unforgettable safari adventure amidst breathtaking wildlife and landscapes.',
        features: [
            'Guided safari tours',
            'Wildlife photography',
            'Luxurious accommodations',
            'Cultural experiences',
        ],
        iconUrl: accommodation,
    },
];




const ServiceItem = ({ title, description, features, iconUrl }) => (
    <Grid item xs={12} sm={6} md={3}>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
        >
            <Card elevation={2} >
                <CardMedia
                    component="img"
                    height="74"
                    width="80"
                    src={iconUrl}
                    alt={title}
                    sx={{ 
                        marginTop: 2,   
                    objectFit: 'contain',
                }}
                />
                <CardContent sx={{ textAlign: 'justify' }}>
                    <Typography variant="h5" sx={{ marginTop: '1.5rem', fontWeight: 600 }}>
                        {title}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '1.5rem', color: '#666' }}>
                        {description}
                    </Typography>
                    <Typography variant="h6" sx={{ marginBottom: '0.5rem', fontWeight: 600, color: '#3f51b5' }}>
                        Key Features:
                    </Typography>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {features.map((feature, index) => (
                            <li key={index} style={{ marginBottom: '0.5rem' }}>
                                <Typography variant="body2">{feature}</Typography>
                            </li>
                        ))}
                    </ul>
                </CardContent>
                
            </Card>
        </motion.div>
    </Grid>
);

const OurServices = () => (
    <section 
    style={{ 
        padding: '4rem 0',
     backgroundColor: '#f4f4f4' 
     }}>
        <Container maxWidth="lg">
            <Typography variant="h3" align="center" sx={{ marginBottom: '3rem', fontWeight: 800 }}>
                Our Services
            </Typography>
            <Grid container spacing={3}>
                {servicesData.map((service, index) => (
                    <ServiceItem key={index} {...service} />
                ))}
            </Grid>
        </Container>
    </section>
);

export default OurServices;
