import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Button, useTheme } from '@mui/material';

function Popup(props) {
  const { openPopup, setOpenPopup, children, title } = props;
  const theme = useTheme();
  const handleClose = () => {
    setOpenPopup(false);
  };
  return (
    <Dialog open={openPopup} maxWidth="lg" >
      <DialogTitle>
        <div style={{ display: 'flex', justifyContent: "space-between", marginBottom: '10px' }}>
          <Typography variant="h6" sx={{ marginLeft: "5px", fontWeight:500 }}>{title}</Typography>
          <Button onClick={handleClose} variant="outlined"  
          sx={{
            position: "absolute",
            right: theme.spacing(1),
            top: theme.spacing(2),
            zIndex: 1,
            color: "#526484",
            '&:hover': {
              backgroundColor: '#FF1E00',
              color: '#ffff'}
          }} ><CloseIcon /></Button>
        </div>
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>

    </Dialog >
  )
}

export default Popup