import React, {useEffect} from "react";
import { Container, Grid } from "@mui/material"
import Cards from "./Tasks";
import { useSelector, useDispatch } from "react-redux";
import {fetchAllTasks} from "../../Actions/kanban";
import Circularprogress from "../../Components/CircularProgress"

 
import {
  filtratedTasksBacklog,
  filtratedTasksProgress,
  filtratedTasksReview,
  filtratedTasksComplete
} from "../../selector";

import CSSTransition from "react-addons-css-transition-group";

const Kanban = () => {
 const dispatch= useDispatch();

 const { isBoardOpen,  tasks, isLoading } = useSelector((state) => state.Kanban);

 useEffect(() => {
  dispatch(fetchAllTasks())
 console.log(tasks)
}, [dispatch])
  const progress = filtratedTasksProgress(tasks);
  const backlog = filtratedTasksBacklog(tasks);
  const review = filtratedTasksReview(tasks);
  const complete = filtratedTasksComplete(tasks);
  if (isLoading) {
    return <Circularprogress />;
  }
  return (
    <Container maxWidth="xl" sx={{backgroundColor:"#F2E5E5", flexGrow: 1}} >
      <CSSTransition
        transitionName="article"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {
          isBoardOpen && (
            <>
              <Grid container 
              spacing={2}
              >
                <Grid item
                  sm={6}
                  md={3}
                  lg={3}
                >
                  <Cards
                    name="Backlog"
                    status="backlog"
                    data={backlog}
                  />
                </Grid>
                <Grid item
                  sm={6}
                  md={3}
                  lg={3}
                >
                  <Cards
                    name="In Progress"
                    status="progress"
                    data={progress}
                  />
                </Grid>
                <Grid item
                  sm={6}
                  md={3}
                  lg={3}
                >
                  <Cards
                    name="Review"
                    status="review"
                    data={review}
                  />
                </Grid>
                <Grid item
                  sm={6}
                  md={3}
                  lg={3}
                >
                  <Cards
                    name="Complete"
                    status="complete"
                    data={complete}
                  />
                </Grid>
              </Grid>
            </>
          )
        }
      </CSSTransition>
    </Container>
  );
};



export default Kanban;

