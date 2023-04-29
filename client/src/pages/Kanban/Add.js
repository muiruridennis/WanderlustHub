import React, { useState } from 'react'
import Form from "./Form";
import { useSelector, useDispatch } from 'react-redux';
import { checkWhoIsOpen } from "../../Actions/kanban";
import RemoveCircle from '@mui/icons-material/RemoveCircleOutline';
import { Stack, Typography, Button, Box } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from '@mui/icons-material/Remove';


function Add({ typeCards }) {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const dispatch = useDispatch();
    const { categoryOpen } = useSelector((state => state.Kanban))

    const handleToggle = () => {
        dispatch(checkWhoIsOpen(typeCards));
        setIsFormOpen(prevState => !prevState)
    };

    return (
        <>
            <Button variant='contained'
                onClick={handleToggle}
            > {isFormOpen ? <RemoveIcon sx={{ ml: 1 }} /> : <AddIcon sx={{ ml: 1 }} />} Task
            </Button>
            {
                typeCards === categoryOpen ? <Form status={typeCards} isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen}  /> : null
            }
        </>
    )
}
export default Add
