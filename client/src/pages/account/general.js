import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { AccountProfile } from '../../sections/account/account-profile';
import { AccountProfileDetails } from '../../sections/account/account-profile-details';
import { DeleteAccount } from '../../sections/settings/delete-account';

const Account = () => (
    <>
        <Box
            component="main"  
        >
            
                <Stack spacing={3}>
                    <div>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                xs={12}
                                md={6}
                                lg={4}
                            >
                                <AccountProfile />
                            </Grid>
                            <Grid
                                xs={12}
                                md={6}
                                lg={8}
                            >
                                <AccountProfileDetails />
                            </Grid>
                            <Grid
                                xs={12}
                                md={12}
                                lg={12}
                            >
                                <DeleteAccount />
                            </Grid>
                        </Grid>
                    </div>
                </Stack>
        </Box>
    </>
);
export default Account;
