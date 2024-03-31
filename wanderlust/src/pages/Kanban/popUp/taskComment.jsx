import React, { useState, useRef, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import {
    TextField,
    Button,
    Typography,
    Box,
    Stack,
    Avatar,
    Paper,
} from "@mui/material";
import { deepOrange } from '@mui/material/colors';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { createTaskComment, fetchTask } from "../../../store/slices/kanbanSlice"
import Circularprogress from "../../../Components/CircularProgress";

function TaskComment({ task }) {
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(state => state.Kanban);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        dispatch(fetchTask(task.id));
    }, [task.id, dispatch]);

    useEffect(() => {
        if (task?.comments) {
            const sortedComments = task.comments
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .slice(0, 2);
            const recentComments = sortedComments.reverse();
            setComments(recentComments);
        }
    }, [task]);
    const notifyError = () => {
        if (error) {
            toast.error(`${error}`);
        }
    };
    const notifySuccess = () => toast.info("Commented...");

    if (isLoading || error) {
        return isLoading ? (
            <Circularprogress />
        ) : (
            <>
                {notifyError()} {/* Display the error message */}
            </>
        );
    }

    // if (task?.comments.length === 0) {
    //     return (
    //         <Typography>Task has no comments. Create one.</Typography>
    //     )
    // }

    const validationSchema = Yup.object().shape({
        comment: Yup.string().required("Comment required")
    });

    const handleSubmit = async (values, { resetForm }) => {
        try {
            await dispatch(createTaskComment({ ...values, taskId: task.id }));
            const updatedTask = await dispatch(fetchTask(task.id)); // Fetch the updated task after creating the comment
            console.log("Updated Task:", updatedTask); // Log the updated task
            setComments(updatedTask.comments); // Update the comments state with the actual comments
            notifySuccess();
            resetForm();
        } catch (error) {
            notifyError();
        }
    };

    return (
        <div>
            <Box>
                {comments.map(comment => (
                    <Stack key={comment?.id} direction="row" spacing={4} sx={{ padding: 1, marginBottom: 1 }}>
                        <Avatar
                            sx={{ width: 24, height: 24, bgcolor: deepOrange[500] }}
                            alt="User"
                        >
                            {comment?.author?.name.charAt(0)}
                        </Avatar>
                        <Stack>
                            <Typography
                                variant="subtitle2"
                                sx={{ marginTop: 2, marginBottom: 1, fontWeight: 500 }}
                            >
                                {comment?.author?.name}
                            </Typography>
                            <Paper sx={{ bgcolor: "#FFEAEA", padding: 2, color: "#000000" }} elevation={2}>
                                <Typography variant="caption">{comment?.comment}</Typography>
                            </Paper>
                            <Typography variant="caption">{format(parseISO(comment?.createdAt), "MMM d, yyyy 'at' hh:mm a")}</Typography>
                        </Stack>
                    </Stack>
                ))}
            </Box>
            <Formik
                // innerRef={formRef}
                initialValues={{
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
                            name="comment"
                            label="Write a Comment"
                            variant="outlined"
                            fullWidth
                            multiline
                            margin="normal"
                            error={touched.comment && Boolean(errors.comment)}
                            helperText={touched.comment ? errors.comment : ""}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"

                        >
                            Comment
                        </Button>
                    </Form>
                )}
            </Formik>
            <ToastContainer
                autoClose={3000}
                theme="colored"
            />
        </div>
    )
}

export default TaskComment
