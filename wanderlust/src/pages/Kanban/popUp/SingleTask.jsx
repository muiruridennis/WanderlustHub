import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import {
    TextField,
    Button,
} from "@mui/material";


const validationSchema = Yup.object().shape({
    description: Yup.string().required("Task description is required"),
    dueDate: Yup.date().required("Due date is required"),
    comment: Yup.string()
});

const SingleTask = ({ task }) => {
    const handleSubmit = (values) => {
        alert(JSON.stringify(values, null, 2));
    }
    return (
        <>
            <Formik
                initialValues={{
                    description: task?.description,
                    dueDate: task?.dueDate,
                    // priority: "",
                    assignedTo: task?.assignedTo,
                    comment: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) =>
                (
                    <Form>
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
                                    InputLabelProps={{
                                        style: {color:"#000000",   fontWeight: "bold"}
                                      }}
                                />
                                <label style={{ fontSize: "14px", fontWeight:"bold" }}>Due Date</label>
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
                                <Field
                                    as={TextField}
                                    name="assignedTo"
                                    variant="outlined"
                                    label="Assigned To"
                                    fullWidth
                                    margin="normal"
                                    error={touched.dueDate && Boolean(errors.dueDate)}
                                    helperText={touched.dueDate ? errors.dueDate : ""}
                                    InputLabelProps={{
                                        style: {color:"#000000",   fontWeight: "bold"}
                                      }}
                                />
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
