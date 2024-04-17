import React, { useEffect } from "react";
import { Container, Grid, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CSSTransition from "react-addons-css-transition-group";
import { fetchAllTasks, dragged } from "../../features/kanbanSlice";
import {
  filtratedTasksBacklog,
  filtratedTasksProgress,
  filtratedTasksReview,
  filtratedTasksComplete,
} from "../../selector/index";
import Cards from "./Tasks";
import CircularProgress from "../../Components/CircularProgress";


const Kanban = () => {
  const dispatch = useDispatch();

  const { isBoardOpen, tasks, isLoading, isDragged } = useSelector(
    (state) => state.Kanban
  );

  useEffect(() => {
    if (isBoardOpen) {
      dispatch(fetchAllTasks());
    }
  }, [dispatch, isBoardOpen]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(dragged());
        dispatch(fetchAllTasks());
      } catch (error) {
        console.error(error);
      }
    };

    if (isDragged) {
      fetchData();
    }
  }, [dispatch, isDragged]);

  const progress = filtratedTasksProgress(tasks);
  const backlog = filtratedTasksBacklog(tasks);
  const review = filtratedTasksReview(tasks);
  const complete = filtratedTasksComplete(tasks);

  const gridItemProps = { sm: 12, md: 3, lg: 3, xs: 12 };

  const cardColors = [
    "#19A7CE", // amber
    "#00FFCA", // blue
    "#B71375", // pink
    "#009FBD", // green
  ];

  return (
    <>
      {isBoardOpen && (
        <Container maxWidth="xl" sx={{ backgroundColor: "#E6FFFD", marginTop: 5 }}>
          <CSSTransition
            transitionName="article"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            <Grid container spacing={2}>
              <Grid item {...gridItemProps}>
                <Box sx={{ backgroundColor: cardColors[0], borderRadius: "8px", padding: "16px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                  <Cards
                    name="Backlog"
                    status="backlog"
                    data={backlog}
                  />
                </Box>
              </Grid>
              <Grid item {...gridItemProps}>
                <Box sx={{ backgroundColor: cardColors[1], borderRadius: "8px", padding: "16px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                  <Cards
                    name="In Progress"
                    status="progress"
                    data={progress}
                  />
                </Box>
              </Grid>
              <Grid item {...gridItemProps}>
                <Box sx={{ backgroundColor: cardColors[2], borderRadius: "8px", padding: "16px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                  <Cards
                    name="Review"
                    status="review"
                    data={review}
                  />
                </Box>
              </Grid>
              <Grid item {...gridItemProps}>
                <Box sx={{ backgroundColor: cardColors[3], borderRadius: "8px", padding: "16px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                  <Cards
                    name="Complete"
                    status="complete"
                    data={complete}
                  />
                </Box>
              </Grid>
            </Grid>
          </CSSTransition>
        </Container>
      )}
      {isLoading && <CircularProgress />}
    </>
  );
};

export default Kanban;
