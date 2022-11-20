import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, Grid, Button} from "@mui/material";
import useStyles from "../../../../components/popup/styles";

function Popup(props) {
    const classes = useStyles();
    const { openPopup, setOpenPopup, children } = props;
    const handleClose = () => {
        setOpenPopup(false);
        
    }
    return (
        <Dialog open={openPopup} className={classes.openPopup}>
            <DialogTitle>
                <Grid container spacing={35} className={classes.titleContainer}>
                    <Grid item>
                        <Typography className={classes.title} variant='h6' > Create a Client</Typography>
                    </Grid>
                    <Grid item>
                        <Button onClick={handleClose } 
                        className={classes.CancelIcon} size="small" variant="contained" color="error">
                            Cancel                            
                        </Button>
                    </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>

        </Dialog>
    )
}

export default Popup