import React, { useState } from "react";
import { deleteTask, select } from "../../Actions/kanban";
import SingleTask from "./SingleTask"
import { Card, CardContent, Typography, Button, Stack, Avatar, Paper } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import CommentIcon from '@mui/icons-material/Comment';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KanbanPopup from "./KanbanPopup"
import avatar from "../../Images/avatar.jpg";
import { useDispatch } from "react-redux"
const Task = ({ task }) => {
    const dispatch = useDispatch();
    const [openPopup, setOpenPopup] = useState(false);
    const isLoading = false;

    const handleDragStart = (event) => {
        dispatch(select(task));
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', null);
    };

    const handleDelete = () => {
        deleteTask(task.id);
    };
  

    return (
        <>
            <Card
                draggable="true"
                onDragStart={handleDragStart}
                sx={{
                    marginBottom: 1,
                    maxHeight: 200
                }}
            >
                <Paper elevation={4} sx={{ backgroundColor: "#ECF9FF" }}>
                    <CardContent>
                        <Stack spacing={"auto"} direction="row" sx={{ marginBottom: 0.5 }}>
                            <Typography variant="subtitle1">{task.priority}</Typography>
                            <Button
                                onClick={handleDelete}
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
                        <Stack direction="row" spacing={"auto"} onClick={() => setOpenPopup(true)}>
                            <Stack direction="row" spacing={1} sx={{ marginTop: 1.2 }}>
                                <div sx="comments-num"><CommentIcon fontSize="small" />{task.comments.length}</div>
                                {/* <div sx="attach-num"><AttachFileIcon fontSize="small" />{task.attach}</div> */}
                            </Stack>
                            <Stack direction="row" spacing={1}>
                                {/* <Button size="small"><AddIcon />Add</Button> */}
                                <Avatar src={avatar} alt="avatar" />
                            </Stack>
                        </Stack>
                    </CardContent>
                </Paper>
            </Card>
            <KanbanPopup openPopup={openPopup} setOpenPopup={setOpenPopup} title="Task" >
                {isLoading ? <h1>loading...</h1> :
                    <SingleTask task={task} />
                }
            </KanbanPopup>
        </>
    );
};

export default Task;
