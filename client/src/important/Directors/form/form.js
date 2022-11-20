import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Paper, Grid, Button, Typography, TextField, Container, TextArea} from "@mui/material";
import FileBase from 'react-file-base64';
import Input from "../../../components/input/input";
import dirctorsSchema from "./validation";

import useStyles from "./styles";

function DirectorsForm() {
    const classes = useStyles();
    const initialValues = {
        fullName: '',
        idNumber: "",
        address: '',
        phoneNumber: '',
        statements: "",

    }
    return (
        <Container componenent="main" maxWidth="sm" className={classes.container} >
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h6" className={classes.title}> Create a Director </Typography>
                <Formik
                    initialValues={initialValues}
                    validationSchema={dirctorsSchema}
                    onSubmit={async (values, actions) => {
                        setTimeout(() => {
                            console.log("values :", values);
                            actions.setSubmitting(false);
                            actions.resetForm({
                                values: initialValues
                            })

                        }, 3000);

                    }}

                >
                    {formik => {
                        const { setFieldValue, isSubmitting, handleReset, dirty } = formik;
                        return (

                            <Form onSubmit={formik.handleSubmit} className={`${classes.root} ${classes.form}`}>
                                <TextField name="fullName" label="Full Name" onChange={formik.handleChange} />
                                <ErrorMessage className={classes.validationErrors} component="span" name="fullName" />

                                <TextField type="number" name="idNumber" label="Director's ID" onChange={formik.handleChange} />
                                <ErrorMessage className={classes.validationErrors} component="span" name="idNumber" />

                                <TextField name="phoneNumber" label="Phone Number" onChange={formik.handleChange} />
                                <ErrorMessage className={classes.validationErrors} component="span" name="phoneNumber" />

                                <TextField name="address" label=" Address" onChange={formik.handleChange} />
                                <ErrorMessage className={classes.validationErrors} component="span" name="address" />

                                <TextField name="statements" multiline type="text" label=" Profile Statement" onChange={formik.handleChange} />
                                {/* <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={(file) => setFieldValue("profileImage", file)} /></div>
                                <ErrorMessage className={classes.validationErrors} component="span" name="profileImage" /> */}

                                <Grid container >
                                    <Grid item sm={3}>
                                        <Button type="submit" className={isSubmitting ? classes.disabledButton : classes.buttons} variant="contained" disabled={isSubmitting}>Save</Button>
                                    </Grid>
                                    <Grid item sm={3}>
                                    <Button  className={isSubmitting || !dirty ? classes.disabledButton : classes.buttons}
                                     onClick={handleReset} disabled={!dirty || isSubmitting} variant="contained"
                                     color="inherit"
                                     >
                                         Clear
                                     </Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        )

                    }}

                </Formik>

            </Paper>

        </Container>
    )
}

export default DirectorsForm