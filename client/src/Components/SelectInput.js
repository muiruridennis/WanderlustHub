import React from 'react';
import { FormControl, FormLabel, Select, Grid, FormHelperText } from '@mui/material';
import { useField, ErrorMessage } from 'formik';

const SelectInput = ({ label, half, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <FormControl fullWidth error={meta.touched && Boolean(meta.error)} variant="outlined">
                <FormLabel component="legend">{label}</FormLabel>
                <Select
                    {...field}
                    {...props}
                >
                    {props.children}
                </Select>
                <FormHelperText>
                    {meta.touched && meta.error ? (
                        <ErrorMessage name={props.name} />
                    ) : null}
                </FormHelperText>
            </FormControl>
        </Grid>
    );
};

export default SelectInput;
