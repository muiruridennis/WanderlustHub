import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { AccountProfile } from '../../sections/usersAccount/account-profile';
import { AccountProfileDetails } from '../../sections/usersAccount/account-profile-details';
import { DeleteAccount } from '../../sections/settings/delete-account';
import profile from '../../Images/client.jpg';
const initialUser = {
    avatar: profile,
    city: 'Nairobi',
    country: 'Kenya',
    jobTitle: 'Senior Developer',
    firstName: 'Aquaman ',
    lastName: 'ashington',
    timezone: 'GTT-3',
    email: 'admin@gmail.com',
    phoneNumber: '123-456-900'
};
const Account = () => {
    const { userId } = useParams();
    const [editing, setEditing] = useState(false);
    const handleEditToggle = () => {
        setEditing((prevEditing) => !prevEditing);
    }
    return (
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
                                <AccountProfile editing={editing} handleEditToggle={handleEditToggle} initialUser={initialUser} />
                            </Grid>
                            <Grid
                                xs={12}
                                md={6}
                                lg={8}
                            >
                                <AccountProfileDetails  initialUser={initialUser} />
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
}
export default Account;

