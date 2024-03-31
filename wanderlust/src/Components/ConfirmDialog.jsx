import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, IconButton, Button } from "@mui/material";
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import { useTheme } from "@mui/material";

function ConfirmDialog(props) {
    const { confirmDialog, setConfirmDialog } = props;
    const theme = useTheme();
    return (
        <Dialog open={confirmDialog.isOpen}
            sx={{
                "paper": {
                    padding: theme.spacing(1),
                    position: 'absolute',
                    top: theme.spacing(4)
                }
            }}>
            <DialogTitle sx={{ textAlign: 'center' }}>
                <IconButton
                    disableRipple
                    sx={{
                        backgroundColor: theme.palette.secondary.light,
                        color: theme.palette.secondary.main,
                        '&:hover': {
                            backgroundColor: theme.palette.secondary.light,
                            cursor: 'default'
                        },
                        '& .MuiSvgIcon-root': {
                            fontSize: '3rem',
                        }
                    }
                    }>
                    <NotListedLocationIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{ textAlign: 'center' }}>
                <Typography variant="subtitle1">
                    {confirmDialog.title}
                </Typography>
                <Typography variant="subtitle2">
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'space-around' }}>
                <Button
                    color='inherit'
                    size='small'
                    variant="outlined"
                    onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} >CANCEL</Button>
                <Button
                    variant="contained"
                    size='small'
                    color="error"
                    onClick={confirmDialog.onConfirm} >{`Yes! ${confirmDialog.action}`}</Button>
            </DialogActions>
        </Dialog>)
}

export default ConfirmDialog