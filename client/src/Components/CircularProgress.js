import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material";

function Circularprogress() {
 

    return (
        <Box sx={{
            position: 'absolute',
            top: "47%",
            left: "48%",
        }}>
            <CircularProgress color="primary" size={40} />
        </Box>
    )
}

export default Circularprogress