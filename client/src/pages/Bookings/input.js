import React from 'react';
import { TextField, Grid } from '@mui/material';
import { useField } from 'formik';

function Input({ half, name, autoFocus, type, label, required, handleChange, readOnly, disabled }) {
  const [field, meta] = useField(name);

  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        {...field}
        variant="outlined"
        required={required}
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        readOnly={readOnly}
        disabled={disabled}
        error={meta.touched && meta.error}
        helperText={meta.touched && meta.error}
        onChange={handleChange} // Connect the onChange event to the provided handleChange function
      />
    </Grid>
  );
}

export default Input;

