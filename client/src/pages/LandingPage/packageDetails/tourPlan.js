import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`day-${index}`}
            aria-labelledby={`day-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function TourPlan({ tourPlan }) {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Tour Plan
            </Typography>
            {/* Tour Plan Tabs */}
            <Tabs
                value={selectedTab}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
            >
                {tourPlan.map((day, index) => (
                    <Tab key={index} label={`Day ${index + 1}`} />
                ))}
            </Tabs>
            {tourPlan.map((day, index) => (
                <TabPanel key={index} value={selectedTab} index={index}>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        {`${day.activity}`}
                    </Typography>
                    <p>{`Explore ${day.activity.toLowerCase()} and make the most of your day.`}</p>
                </TabPanel>
            ))}
        </Box>
    );
}

export default TourPlan;
