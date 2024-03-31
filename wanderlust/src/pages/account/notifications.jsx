
import React, { useState, useEffect } from 'react';
import { Card, Grid, Divider, FormGroup, Typography, Switch, Stack, CardActions, Button, FormControlLabel, CardContent } from '@mui/material';

function Notifications() {
    const [initialState, setInitialState] = useState({
        emailProductUpdatesEnabled: true,
        emailSecurityUpdatesEnabled: true,
        smsEnabled: true,
        inAppEnabled: true,
    });

    const [formData, setFormData] = useState({ ...initialState });
    const [hasChanges, setHasChanges] = useState(false);

    const handleSwitchChange = (event) => {
        const { name, checked } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: checked }));
    };
    useEffect(() => {
        // Check if there are changes
        const changes =
            formData.emailProductUpdatesEnabled !== initialState.emailProductUpdatesEnabled ||
            formData.emailSecurityUpdatesEnabled !== initialState.emailSecurityUpdatesEnabled ||
            formData.inAppEnabled !== initialState.inAppEnabled ||
            formData.smsEnabled !== initialState.smsEnabled;

        // Enable or disable the "Save" button based on changes
        setHasChanges(changes);
    }, [formData, initialState]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Save the preferences to the backend here
        console.log('Preferences saved to the backend.', formData);
        // Update the initial state with the new data after saving
        setInitialState({ ...formData });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardContent>
                    <Grid container>
                        <Grid item sm={12} md={4} lg={4}>
                            <Typography variant='h6' align="left" sx={{ marginTop: 3 }}>Email</Typography>
                        </Grid>
                        <Grid item sm={12} md={8} lg={8}>
                            <Stack direction="row" spacing="auto" sx={{ margin: 3 }}>
                                <div>
                                    <Typography variant='subtitle1' align='left'>Product updates</Typography>
                                    <Typography variant=''>News, announcements, bookings, and product updates.</Typography>
                                </div>
                                <FormGroup sx={{ justifyContent: 'flex-end' }}>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                name='emailProductUpdatesEnabled'
                                                checked={formData.emailProductUpdatesEnabled}
                                                onChange={handleSwitchChange}
                                            />
                                        }
                                    />
                                </FormGroup>
                            </Stack>
                            <Divider />
                            <Stack direction="row" spacing="auto" sx={{ margin: 3 }}>
                                <div>
                                    <Typography variant='subtitle1' align='left'>Security updates</Typography>
                                    <Typography variant=''>Important notifications about your account security.</Typography>
                                </div>
                                <FormGroup sx={{ justifyContent: 'flex-end' }}>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                name='emailSecurityUpdatesEnabled'
                                                checked={formData.emailSecurityUpdatesEnabled}
                                                onChange={handleSwitchChange}
                                            />
                                        }
                                    />
                                </FormGroup>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container>
                        <Grid item sm={12} md={4} lg={4}>
                            <Typography variant='h6' align='left' sx={{ marginTop: 3 }}>Sms notifications</Typography>
                        </Grid>
                        <Grid item sm={12} md={8} lg={8}>
                            <Stack direction="row" spacing="auto" sx={{ margin: 3 }}>
                                <div>
                                    <Typography variant='subtitle1' align='left'>Updates</Typography>
                                    <Typography variant=''>News, announcements, bookings, and product updates</Typography>
                                </div>
                                <FormGroup sx={{ justifyContent: 'flex-end' }}>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                name='smsEnabled'
                                                checked={formData.smsEnabled}
                                                onChange={handleSwitchChange}
                                            />
                                        }
                                    />
                                </FormGroup>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container>
                        <Grid item sm={12} md={4} lg={4}>
                            <Typography variant='h6' align='left' sx={{ marginTop: 3 }}>
                                In-App Notifications
                            </Typography>
                        </Grid>
                        <Grid item sm={12} md={8} lg={8}>
                            <Stack direction='row' spacing='auto' sx={{ margin: 3 }}>
                                <div>
                                    <Typography variant='subtitle1' align='left'>
                                        Notifications for account securities
                                    </Typography>
                                    <Typography variant=''>
                                        Receive in-app notifications for all activities.
                                    </Typography>
                                </div>
                                <FormGroup sx={{ justifyContent: 'flex-end' }}>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                name='inAppEnabled'
                                                checked={formData.inAppEnabled}
                                                onChange={handleSwitchChange}
                                            />
                                        }
                                    />
                                </FormGroup>
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button variant="contained" type="submit" disabled={!hasChanges}>
                        Save
                    </Button>
                </CardActions>
            </Card>
        </form>
    );
}

export default Notifications;

