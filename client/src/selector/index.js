export const filtratedTasksBacklog = tasks => {
    return tasks.filter(task => {
      return task.status === "backlog";
    });
  };
  
  export const filtratedTasksProgress = tasks => {
    return tasks.filter(task => {
      return task.status === "progress";
    });
  };
  
  export const filtratedTasksReview = tasks => {
    return tasks.filter(task => {
      return task.status === "review";
    });
  };
  
  export const filtratedTasksComplete = tasks => {
    return tasks.filter(task => {
      return task.status === "complete";
    });
  };