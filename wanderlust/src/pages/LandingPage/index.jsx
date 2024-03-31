import React from 'react'
import { motion } from 'framer-motion';
import { Container, Typography, Button, AppBar, Toolbar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import HeroSection from './heroSection';
import FeaturedToursSection from './featuredToursSection';
import OurServices from './ourServices';
import PopularPackagesSection from './popularPackagesSection';
function Index() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <AppBar position="static">
                <Toolbar>
                    {/* Logo */}
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        {/* <img src="/path/to/your/logo.png" alt="Logo" style={{ maxWidth: '40px' }} /> */}
                        Logo
                    </IconButton>

                    {/* Title */}
                    <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Tours & Travel
                    </Typography>

                    {/* Navigation Links */}
                    <div style={{ marginLeft: 'auto' }}>
                        <Button component={Link} to="/" color="inherit">
                            Home
                        </Button>
                        <Button component={Link} to="#/about" color="inherit">
                            About
                        </Button>

                        <Button component={Link} to="#/destinations" color="inherit">
                            Destinations
                        </Button>
                        <Button component={Link} to="#/blog" color="inherit">
                            Blog
                        </Button>
                        <Button component={Link} to="#/gallery" color="inherit">
                            Gallery
                        </Button>
                        <Button variant="contained" component={Link} to="#/contact" color="secondary">
                            Contact
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            <HeroSection />
            <OurServices/>
            <PopularPackagesSection/>
            {/* <FeaturedToursSection /> */}
            {/* Footer */}
            <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} mt={5}>
                <Container>
                    <Typography variant="body2" align="center" color="textSecondary">
                        &copy; 2023 Tours & Travel
                    </Typography>
                </Container>
            </motion.footer>
        </motion.div>
    );
}

export default Index
