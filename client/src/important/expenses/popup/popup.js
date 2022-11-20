import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, Grid, Button} from "@mui/material";

function Popup(props) {
    const { openPopup, setOpenPopup, children, currentId } = props;
  return (
    <Dialog open={openPopup} className={classes.openPopup}>
            <DialogTitle>
                <Grid container className={classes.titleContainer}>
                    <Grid item>
                        <Typography className={classes.title} variant='h6' >{currentId ? "Edit client" : " Create a Client"}</Typography>
                    </Grid>
                    <Grid>
                        <Button onClick={() => { setOpenPopup(false) }} 
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