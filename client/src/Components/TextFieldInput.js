import React from 'react';
import {
  Grid,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function Input({
  half,
  name,
  autoFocus,
  type,
  handleChange,
  handleShowPassword,
  label,
  required,
  value,
  error,
  helperText,
  onBlur,
  readOnly,
  multiline,
}) {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        value={value}
        onBlur={onBlur}
        name={name}
        onChange={handleChange}
        variant="outlined"
        required={required}
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        error={error}
        helperText={helperText}
        InputProps={
          name === 'password'
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === 'password' ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
        readOnly={readOnly}
        multiline={multiline}
      />
    </Grid>
  );
}

export default Input;
