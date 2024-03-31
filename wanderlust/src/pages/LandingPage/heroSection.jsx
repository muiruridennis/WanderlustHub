import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';

import hero10 from "../../Images/hero10.jpg";
import hero7 from "../../Images/hero7.jpg";
import hero5 from "../../Images/hero5.jpg";
import hero3 from "../../Images/hero3.jpg";
import hero9 from "../../Images/hero9.jpg";
import bali from "../../Images/bali.jpg";


const carouselData = [
    {
        imageUrl: hero5,
        title: 'Adventure in New York',
        subtitle: 'Explore the vibrant culture and iconic landmarks of the Big Apple.',
    },
    {
        imageUrl: bali,
        title: 'Start Planning Your Christmas Holidays',
        subtitle: 'Embrace the festive season and create lasting memories.',
    },
    {
        imageUrl: hero7,
        title: 'Adventure in New York',
        subtitle: 'Experience the excitement and diversity of New York City.',
    },
    {
        imageUrl: hero10,
        title: 'Explore Paris',
        subtitle: 'Discover the romantic charm and rich history of the City of Light.',
    },
    {
        imageUrl: hero9,
        title: 'Discover Tokyo',
        subtitle: 'Immerse yourself in the futuristic technology and traditional beauty of Tokyo.',
    },
    {
        imageUrl: hero3,
        title: 'Adventure in New York',
        subtitle: 'Embark on another thrilling adventure in the heart of New York City.',
    },
];

const CarouselItem = ({ imageUrl, title, subtitle }) => (
    <div style={{ position: 'relative', textAlign: 'center' }}>
        <img
            src={imageUrl}
            alt={title}
            style={{ width: '100%', maxHeight: '800px', objectFit: 'cover' }}
        />
        <div
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                margin: 'auto',
            }}
        >
            <motion.div
                key={imageUrl}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 2, delay: 0.5 }}
            >
                <Typography variant="h3" sx={{ marginBottom: '1rem', fontWeight: 800, fontSize: "5rem", color: "#E9B824" }}>
                    {title}
                </Typography>
                <Typography variant="h5" sx={{ marginBottom: '1.5rem', fontFamily: "Lato", fontWeight: 500, color: "#F3F8FF" }}>
                    {subtitle}
                </Typography>
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3 }}>
                    <Button variant="contained" color="secondary" size="large"
                        sx={{
                            ':hover': {
                                bgcolor: 'primary.main',
                                color: 'white',
                            },
                        }}>
                        Book Your Adventure
                    </Button>
                </motion.div>
            </motion.div>
        </div>
    </div>
);

function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = index => {
        setCurrentSlide(index);
    };

    return (
        <section>
            <Carousel
                showArrows={true}
                infiniteLoop
                autoPlay
                interval={5000}
                transitionTime={500}
                showStatus={false}
                showThumbs={false}
                onChange={handleSlideChange}
            >
                {carouselData.map((item, index) => (
                    <CarouselItem key={index + currentSlide} imageUrl={item.imageUrl} title={item.title} subtitle={item.subtitle} />
                ))}
            </Carousel>
        </section>
    );
}

export default HeroSection;
