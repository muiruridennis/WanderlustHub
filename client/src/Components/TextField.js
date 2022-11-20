import React from "react";
import { styled } from "@mui/material/styles";
import { useTheme, TextField } from "@mui/material";

function TextFieldInput() {
    const theme = useTheme()
    const CssTextField = styled(TextField)({
            margin: theme.spacing(1),
        
      });
  return (
    <CssTextField/>
  )
}

export default TextFieldInput