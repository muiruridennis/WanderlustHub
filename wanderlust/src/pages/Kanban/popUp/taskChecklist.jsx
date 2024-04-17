import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Box,
  Stack,
  TextField,
  Checkbox,
  LinearProgress,
  Paper,
  Button
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from '@mui/icons-material/Remove';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { createTaskChecklist, deleteTaskChecklist, fetchTask } from "../../../features/kanbanSlice";
import Circularprogress from "../../../Components/CircularProgress";

function TaskChecklist({ task }) {
  const [list, setList] = useState([]);
  const [checked, setIsChecked] = useState(task.checklists.isChecked);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, error, message } = useSelector(state => state.Kanban);

  useEffect(() => {
    if (message) {
      notifySuccess();
    }
  }, [message]);
  useEffect(() => {
    if (error) {
      notifyError();
    }
  }, [error]);

  useEffect(() => {
    if (task?.checklists) {
      setList(task?.checklists);
    }
  }, [task]);

  // const handleToggle = (item) => {
  //   const updatedList = list.map((listItem) =>
  //     listItem.id === item.id
  //       ? { ...listItem, isChecked: !listItem.isChecked }
  //       : listItem
  //   );
  //   setList(updatedList);
  //   console.log(list);
  //   // dispatch(updateTaskChecklist(item.id,updatedList));
  // };
  // ...

  const handleToggle = (item) => {
    setList(prevList => {
      const updatedList = prevList.map((listItem) =>
        listItem.id === item.id
          ? { ...listItem, isChecked: !listItem.isChecked }
          : listItem
      );
      return updatedList;
    });
    // dispatch(updateTaskChecklist(item.id, updatedList));
  };

  // ...


  useEffect(() => {
    dispatch(fetchTask(task.id));
  }, [task.id, dispatch]);

  const notifyError = () => {
    if (error) {
      toast.error(`${error}`);
    }
  };

  const notifySuccess = () => {
    if (message) {
      toast.info(`${message}`);
    }
  };

  if (isLoading || error) {
    return isLoading ? (
      <Circularprogress />
    ) : (
      <>
        {notifyError()} {/* Display the error message */}
      </>
    );
  }

  const handleToggleForm = () => {
    setIsFormOpen(prevState => !prevState)
  };


  const handleAddChecklist = async (values, { resetForm }) => {
    try {
      await dispatch(createTaskChecklist({ ...values, taskId: task.id }));
      const updatedTask = await dispatch(fetchTask(task.id)); // Fetch the updated task after creating the checklist
      setList(updatedTask.checklists); // Update the checklists state with the actual checklists
      notifySuccess();
      resetForm();
    } catch (error) {
      notifyError();
    } finally {
      setIsFormOpen(false); // Set the isFormOpen state to false regardless of success or error
    }
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
  });

  const checkedCount = list.filter(item => item.isChecked).length;
  const progress = list.length > 0 ? (checkedCount / list.length) * 100 : 0;


  return (
    <>
      <Paper elevation={2} >
        <Stack sx={{ mt: 2 }}>
          <LinearProgress
            variant="buffer"
            value={progress}
            color="primary"
            valueBuffer={100}
            sx={{ height: "8px", borderRadius: "8px" }}
          />
          <Typography variant="body2" align="right" sx={{ color: "#000000", fontWeight: 500 }} >{`${Math.round(progress)}%`}</Typography>
        </Stack>
        <Divider />
        <List>
          {list.map((item) => (
            <>
              <ListItem key={item.id} >
                <ListItemIcon>
                  <Checkbox
                    checked={item.isChecked}
                    onChange={() => handleToggle(item)}
                    color="primary"
                  />
                </ListItemIcon>
                <ListItemText primary={item.title} sx={{ textDecoration: item.isChecked === true ? "line-through" : "initial" }} />
                <Button onClick={() => {
                  dispatch(deleteTaskChecklist(item?.id))
                }}><DeleteIcon /></Button>
              </ListItem>
              <Divider sx={{ color: "#000000" }} />
            </>

          ))}
        </List>
      </Paper>

      <Box sx={{ marginTop: 3, marginBottom: 4 }}>
        <Button
          variant='contained'
          fullWidth
          onClick={handleToggleForm}
        > {isFormOpen ? <RemoveIcon sx={{ ml: 1 }} /> : <AddIcon sx={{ ml: 1 }} />} Checklist
        </Button>
        {
          isFormOpen ?
            <Formik
              initialValues={{
                title: "",
                isChecked: false,
              }}
              validationSchema={validationSchema}
              onSubmit={handleAddChecklist}
            >
              {({ errors, touched }) =>
              (
                <Form>
                  <Box sx={{ p: 2 }}>
                    <Field
                      as={TextField}
                      fullWidth
                      id="title"
                      name="title"
                      label="Title"
                      variant="outlined"
                      error={touched.title && Boolean(errors.title)}
                      helperText={touched.title ? errors.title : ""}

                    />
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      sx={{ mt: 2 }}
                    >
                      Add
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
            : null
        }
      </Box>
      <ToastContainer
        autoClose={3000}
        theme="colored"
      />

    </>
  )
}

export default TaskChecklist
