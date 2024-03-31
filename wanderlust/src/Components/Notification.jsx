import React from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import {  useTheme } from "@mui/material";


function Notification(props) {
    const { notify, setNotify } = props;
    const theme = useTheme()
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') { //this prevents the default closure of alert by clicking anywhere on page
            return;
        }
        setNotify({
            ...notify,
            isOpen: false
        })
    }
    return (
        <Snackbar
            sx={{top: theme.spacing(10)}}
            open={notify.isOpen}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleClose}>
            <Alert
                severity={notify.type}
                onClose={handleClose}>
                {notify.message}
            </Alert>
        </Snackbar>
    )
}

export default Notification