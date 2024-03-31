import React, { useState } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Task from "./Task";
import Add from "./Add";
import { useDispatch, useSelector } from "react-redux";
import { dragAndDrop, targetTheDropZone, leaveDropZone, drag, dragged } from "../../store/slices/kanbanSlice";

function Tasks({ data, status, name }) {
  const [openCards, setOpenCards] = useState(true);
  const dispatch = useDispatch();
  const { itemSelected, targetDropZone, isDragged } = useSelector((state) => state.Kanban);
  const handleToggle = () => {
    setOpenCards(prevState => !prevState);
  };

  const handleDragOver = event => {
    event.preventDefault();
    dispatch(targetTheDropZone(status));
  };

  const handleDragEnter = event => {
    event.preventDefault();
    dispatch(targetTheDropZone(status));
  };

  const handleDragLeave = () => {
    dispatch(leaveDropZone());
  };

  const handleDrop = event => {
    event.preventDefault();
    dispatch(targetTheDropZone(status));
    dispatch(dragAndDrop(itemSelected?.task?.id, { "status": targetDropZone }));
    dispatch(drag())
  };


  return (
    <Box
    sx={{
      marginBottom: 7,
    }}
    
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", margin: 1 }}>
        <Typography variant="h6">{name}</Typography>
        <Avatar>{data.length}</Avatar>
        <Box onClick={handleToggle} sx="backlog-dots">
          {openCards ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}
        </Box>
      </Box>
      {openCards && (
        <Box>
          {data.map(task => (
            <Task key={task.id} task={task} />
          ))}
          <Add typeCards={status} />
        </Box>
      )}
    </Box>
  );
}

export default Tasks;
