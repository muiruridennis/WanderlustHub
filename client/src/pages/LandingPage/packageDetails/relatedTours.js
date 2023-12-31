import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { Box, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import TourCard from '../tourCard';

const RelatedTours = ({ relatedTours }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ mb: 4 }} align='center'>
                Related Tours
            </Typography>
            <Slider {...settings} >
                {relatedTours.map((tourPackage) => (
                    <TourCard tourPackage={tourPackage} onDetailsClick={scrollToTop} key={tourPackage.id} />
                ))}
            </Slider>
        </Box>
    );
};

export default RelatedTours;
