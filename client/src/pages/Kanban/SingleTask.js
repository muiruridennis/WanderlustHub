import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import {
    TextField,
    Button,
    Grid,
    Typography,
    Box,
    Divider,
    Stack,
    Avatar,
    FormControl,
    Radio,
    FormControlLabel,
    RadioGroup,
    FormLabel,
} from "@mui/material";
import { deepOrange } from '@mui/material/colors';


const validationSchema = Yup.object().shape({
    description: Yup.string().required("Task description is required"),
    dueDate: Yup.date().required("Due date is required"),
    // priority: Yup.date().required("Priority is required"),
    comment: Yup.string()
});

const SingleTask = ({ task }) => {
    const lastTwo = task.comments.slice(-2);
    const handleSubmit = (values) => {
        alert(JSON.stringify(values, null, 2));
    }

    return (
        <>
            <Formik
                initialValues={{
                    description: '',
                    dueDate: '',
                    // priority: "",
                    comment: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) =>
                 (
                    <Form>
                        {/* <FormControl>
                            <FormLabel id="priority" sx={{ marginTop: 1, color: "#000000" }}>Update priority as</FormLabel>
                            <Field name="priority">
                                {({ field }) => (
                                    <RadioGroup
                                    // {...field}
                                        row
                                        aria-labelledby="Update priority as"
                                        name=" priority "
                                        alt=" Priority"
                                        // value={formik.values.priority}
                                    // onChange={formik.handleChange}
                                    >
                                        <FormControlLabel value="Low Priority" control={<Radio sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 16,
                                            },
                                        }} />} label="Low " />
                                        <FormControlLabel value="Med Priority" control={<Radio sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 16,
                                            },
                                        }} />} label="Med " />
                                        <FormControlLabel value="High Priority" control={<Radio sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 16,
                                            },
                                        }} />} label="High " />
                                    </RadioGroup>
                                )}
                            </Field>
                        </FormControl> */}
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Field
                                    as={TextField}
                                    name="description"
                                    label="Task Description"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    margin="normal"
                                    error={touched.description && Boolean(errors.description)}
                                    helperText={touched.description ? errors.description : ""}
                                />
                                <label style={{ fontSize: "12px" }}>Due Date</label>
                                <Field
                                    as={TextField}
                                    name="dueDate"
                                    type="date"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    error={touched.dueDate && Boolean(errors.dueDate)}
                                    helperText={touched.dueDate ? errors.dueDate : ""}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <Box sx="">
                                    {
                                        lastTwo.map(comment => (

                                            <Stack key={comment.id} direction="row" spacing={2} sx={{ bgcolor: "#57C5B6", padding: 1, marginBottom: 1 }}>
                                                <Avatar
                                                    sx={{ width: 24, height: 24, bgcolor: deepOrange[500] }}
                                                    alt="User"
                                                >{comment.author.charAt(0)}</Avatar>
                                                <Typography variant="caption">{comment.comment}</Typography>
                                            </Stack>
                                        ))}
                                </Box>
                                <Field
                                    as={TextField}
                                    name="comment"
                                    label="Write a Comment"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    margin="normal"
                                    error={touched.comment && Boolean(errors.comment)}
                                    helperText={touched.comment ? errors.comment : ""}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            size="large"
                        >
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </>
    )
};

export default SingleTask;
