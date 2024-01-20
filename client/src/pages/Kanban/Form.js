import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../Actions/kanban";
import avatar from "../../Images/avatar.jpg";
import AddIcon from "@mui/icons-material/Add";
import AttachFileIcon from '@mui/icons-material/AttachFile';

import {
  Avatar,
  FormControl,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  TextField,
  Button,
  Stack,
  Paper
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { createTask } from "../../Actions/kanban";


function Form({ setIsFormOpen, isFormOpen, status }) {
  const dispatch = useDispatch()
  const validationSchema = Yup.object().shape({
    priority: Yup.string().required("Priority is required"),
    title: Yup.string().required("Task title is required"),
    description: Yup.string().required("Task description is required"),
    assignedTo: Yup.string().required("Task assigned To is required"),
  });

  const formik = useFormik({
    initialValues: {
      priority: "",
      description: "",
      title: "",
      assignedTo: "",
      dueDate: "",
      status
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(createTask(values));
      setIsFormOpen(prevState => !prevState)

    },
  });

  return (
    isFormOpen ? (
      <Paper sx={{ padding: 2 }}>
        <form onSubmit={formik.handleSubmit} >
          <FormControl>
            <FormLabel id="priority" sx={{ marginTop: 1, color: "#000000" }}>Priority</FormLabel>
            <RadioGroup
              row
              aria-labelledby="priority"
              name="priority"
              alt=" Priority"
              value={formik.values.priority}
              onChange={formik.handleChange}
            >
              <FormControlLabel value="low priority" control={<Radio sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: 16,
                },
              }} />} label="Low " />
              <FormControlLabel value="medium Priority" control={<Radio sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: 16,
                },
              }} />} label="Med " />
              <FormControlLabel value="high priority" control={<Radio sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: 16,
                },
              }} />} label="High " />
            </RadioGroup>
          </FormControl>

          <TextField
            fullWidth
            variant="outlined"
            type="text"
            // placeholder="My new task title..."
            label="Task Title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            multiline
            sx={{ marginBottom: 2, backgroundColor: "#84D2C5", marginTop: 2 }}

          />

          <TextField
            fullWidth
            variant="outlined"
            type="text"
            // placeholder="My new task description..."
            label="Task Description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
            multiline
            sx={{ marginBottom: 2, backgroundColor: "#84D2C5", marginTop: 2 }}

          />
          <TextField
            fullWidth
            variant="outlined"
            type="text"
            label="Task Assigned To"
            // placeholder="task Asigned To ..."
            name="assignedTo"
            value={formik.values.assignedTo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.assignedTo && Boolean(formik.errors.assignedTo)}
            helperText={formik.touched.assignedTo && formik.errors.assignedTo}
            multiline
            sx={{ marginBottom: 2, backgroundColor: "#84D2C5", marginTop: 2 }}

          />
          <label style={{ fontSize: "12px" }}>Due Date</label>
          <TextField
            name="dueDate"
            type="date"
            variant="outlined"
            // label="Due Date"
            fullWidth
            margin="normal"
            value={formik.values.dueDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.dueDate && Boolean(formik.errors.dueDate)}
            helperText={formik.touched.dueDate && formik.errors.dueDate}

          />
          <Stack spacing={3} direction="row" sx={{ marginTop: 1, }}>
            <Button variant='contained'
              sx={{ padding: 0.2 }}
              disabled={!formik.isValid}
              type="submit"
            >
              <AddIcon />
              Add
            </Button>
            <Button
              variant='text'
              onClick={() => {
                setIsFormOpen(prevState => !prevState)
                formik.resetForm()
              }}
              sx={{ padding: 0.2 }}
              size="small"
              color="inherit"
            >
              Cancel
            </Button>
          </Stack>
        </form>
      </Paper>
    ) : null
  );
}

export default Form;
