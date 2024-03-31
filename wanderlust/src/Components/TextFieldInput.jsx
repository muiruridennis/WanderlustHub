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
  oneThird,
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
    <Grid item xs={12} sm={half ? 6 : (oneThird ? 4 : 12)}>
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
        inputProps={type === 'number' ? { min: 0 } : {}} // Ensure that the input value is greater than or equal to 0 for number type

        readOnly={readOnly}
        multiline={multiline}
      />
    </Grid>
  );
}

export default Input;
