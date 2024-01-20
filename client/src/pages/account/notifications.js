import React from 'react';
import { Card, Grid, Divider, FormGroup, Typography, Switch, Stack, CardActions, CardContent, Button, FormControlLabel } from '@mui/material';

function Notifications() {
    return (
        <form
        // onSubmit={handleSubmit}
        >
            <Card>
                <CardContent>
                    <Grid container
                    // spacing={38}
                    >
                        <Grid item
                            sm={12}
                            md={4}
                            lg={4}
                        >
                            <Typography variant='h6' align="left" sx={{ marginTop: 3 }} >Email</Typography>
                        </Grid>
                        <Grid item
                            sm={12}
                            md={8}
                            lg={8}
                        >
                            <Stack direction="row"
                                spacing="auto"
                                sx={{ margin: 3 }}
                            >
                                <div>
                                    <Typography variant='subtitle1' align='left'>Product updates</Typography>
                                    <Typography variant=''>News, announcements, and product updates.</Typography>
                                </div>
                                <FormGroup sx={{ justifyContent: 'flex-end' }}>
                                    <FormControlLabel control={<Switch defaultChecked />} />
                                </FormGroup>

                            </Stack>
                            <Divider />
                            <Stack direction="row"
                                spacing="auto"
                                sx={{ margin: 3 }}
                            >
                                <div>
                                    <Typography variant='subtitle1' align='left'>Security updates</Typography>
                                    <Typography variant=''>Important notifications about your account security.</Typography>
                                </div>
                                <FormGroup sx={{ justifyContent: 'flex-end' }}>
                                    <FormControlLabel control={<Switch defaultChecked />} />
                                </FormGroup>

                            </Stack>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container  >
                        <Grid item
                            sm={12}
                            md={4}
                            lg={4}
                        >
                            <Typography variant='h6' align='left' sx={{ marginTop: 3 }}>Phone notifications</Typography>
                        </Grid>
                        <Grid item
                            sm={12}
                            md={8}
                            lg={8}
                        >
                            <Stack direction="row"
                                spacing="auto"
                                sx={{ margin: 3 }}
                            >
                                <div>
                                    <Typography variant='subtitle1' align='left'>Security updates</Typography>
                                    <Typography variant=''>Important notifications about your account security.</Typography>
                                </div>
                                <FormGroup sx={{ justifyContent: 'flex-end' }}>
                                    <FormControlLabel control={<Switch />} />
                                </FormGroup>

                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />

            </Card>
        </form>
    )
}

export default Notifications
