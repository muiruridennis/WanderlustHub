import React, { useEffect, useState } from 'react';
import { Box, Container, Stack, Typography, Grid } from '@mui/material';
import { useDispatch, useSelector } from "react-redux"
import { AccountProfile } from '../../sections/usersAccount/account-profile';
import { AccountProfileDetails } from '../../sections/usersAccount/account-profile-details';
import { DeleteAccount } from '../../sections/settings/delete-account';
import { getCurrentUserData } from "../../features/authSlice"
import profile from '../../Images/client.jpg';
import Circularprogress from '../../Components/CircularProgress';
import ErrorComponent from '../../Components/errorComponent';
const Account = () => {
    const [editing, setEditing] = useState(false);
    const dispatch = useDispatch()

    const { error, isLoading, user } = useSelector((state) => state.auth);
    console.log({user, error, isLoading})

    const handleRetry = () => {
        dispatch(getCurrentUserData());
    };
    useEffect(() => {
        dispatch(getCurrentUserData());
    }, [])

    useEffect(() => {
        handleRetry()
    }, [])

    const handleEditToggle = () => {
        setEditing((prevEditing) => !prevEditing);
    }
    if (isLoading) {
        return <Circularprogress />;
    }

    if (error) {
        return <ErrorComponent
            error={error}
            onRetry={handleRetry}
        />;
    }
    if (!user) {
        return <div>User data not available. Please log in.</div>;
    }

    return (
        <>
            <Box component="main"   >
                <Stack spacing={3}>
                    <div>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                item
                                xs={12}
                                md={6}
                                lg={4}
                            >
                                <AccountProfile editing={editing} handleEditToggle={handleEditToggle} currentUser={user} />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={6}
                                lg={8}
                            >
                                {/* <AccountProfileDetails currentUser={user} /> */}
                            </Grid>
                            <Grid
                                item
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


