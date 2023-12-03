import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Button, useTheme } from '@mui/material';

function Popup(props) {
  const { openPopup, children, title, close } = props;
  const theme = useTheme();

  return (
    <Dialog open={openPopup} maxWidth="sm" >
      <DialogTitle>
        <Typography variant="body1" align='center' sx={{fontSize:"1.2rem", fontWeight:400}}>{title}</Typography>
        <Button onClick={close} variant="text" size="small"
          sx={{
            position: "absolute",
            right: theme.spacing(1),
            top: theme.spacing(2),
            zIndex: 1,
            color: "#526484",
            '&:hover': {
              backgroundColor: '#FF1E00',
              color: '#ffff'
            }
          }} ><CloseIcon /></Button>
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>

    </Dialog >
  )
}

export default Popup