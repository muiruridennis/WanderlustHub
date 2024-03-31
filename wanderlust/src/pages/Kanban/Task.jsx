import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Button, Stack, Avatar, Paper } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import CommentIcon from '@mui/icons-material/Comment';

import { useDispatch, useSelector } from "react-redux"
// import { ToastContainerWrapper, notifyError, notifySuccess } from '../../Utils/notificationUtils';
import KanbanPopup from "./popUp/KanbanPopup"
import avatar from "../../Images/avatar.jpg";
import Dialogue from "./popUp/index";
import { deleteTask, select } from "../../store/slices/kanbanSlice";

const Task = ({ task }) => {
    const dispatch = useDispatch();
    const [openPopup, setOpenPopup] = useState(false);

    const handleDragStart = (event) => {
        dispatch(select(task));
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', null);
    };
    const handleDelete = async ({ id }) => {
        try {
            // Dispatch the deleteTask action
            await dispatch(deleteTask(id));
        } catch (error) {
            // Handle any error that occurred during deletion
            console.error("An error occurred while deleting the task:", error);
        }
    };

    const handleOpenPopup = () => {
        setOpenPopup(true)
    };

    return (
        <>
            <Card
                draggable="true"
                onDragStart={handleDragStart}
                sx={{
                    marginBottom: 1,
                    maxHeight: 200,
                    cursor: "grab"
                }}
            >
                <Paper elevation={4} sx={{ backgroundColor: "#ECF9FF" }}>
                    <CardContent>
                        <Stack spacing={"auto"} direction="row" sx={{ marginBottom: 0.5 }}>
                            <Typography variant="subtitle1">{task.priority}</Typography>
                            <Button
                                onClick={() => handleDelete(task)}
                                variant="text"
                                color="secondary"
                                sx={{
                                    '&:hover': {
                                        // backgroundColor: 'red',
                                        color: 'black',
                                    },
                                }}
                            >
                                <ClearIcon />
                            </Button>
                        </Stack>
                        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>{task.title}</Typography>
                        <Stack direction="row" spacing={"auto"} onClick={handleOpenPopup}
                        >
                            <Stack direction="row" spacing={1} sx={{ marginTop: 1.2 }}>
                                <div sx="comments-num"><CommentIcon fontSize="small" />{task.comments?.length}</div>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                                <Avatar src={avatar} alt="avatar" />
                            </Stack>
                        </Stack>
                    </CardContent>

                </Paper>
            </Card>
            <KanbanPopup openPopup={openPopup} setOpenPopup={setOpenPopup} title="Task"       >
                <Dialogue task={task} />

            </KanbanPopup>
        </>
    );
};

export default Task;
