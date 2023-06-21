import {
    START_LOADING,
    CREATE_TASK,
    GET_ALL_TASKS,
    BOARD_OPEN,
    DELETE_TASK,
    WHO_OPEN,
    DRAG_AND_DROP,
    SELECT,
    TARGET_DROP_ZONE,
    TARGET_LEFT,
    END_LOADING,
    ERROR,
    UPDATE_TASK_CHECKLIST,
    GET_ALL_TASKS_CHECKLISTS,
    FETCH_TASK,
    UPDATE_TASK,
    CREATE_TASK_COMMENT,
    DELETE_TASK_COMMENT,
    GET_ALL_TASKS_COMMENTS,
    CREATE_TASK_CHECKLIST,
    DELETE_TASK_CHECKLIST,
    DRAGGED,
    DRAG,
    CHECK,
    MESSAGE
} from "../Constants/actionTypes";
import * as api from '../Api/index.js';

export const createTask = (taskData) => async (dispatch) => {
    try {
        const { data } = await api.createTask(taskData);
        dispatch({ type: CREATE_TASK, payload: data });
    } catch (error) {
        console.log(error);
    }
}
export const fetchAllTasks = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchAllTasks();
        dispatch({ type: GET_ALL_TASKS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        dispatch({ type: START_LOADING })
        dispatch({ type: ERROR, payload: error.response.data.message })
        dispatch({ type: END_LOADING })
    }
};

export const fetchTask = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchTask(id);
        dispatch({ type: FETCH_TASK, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        dispatch({ type: START_LOADING })
        dispatch({ type: ERROR, payload: error.response.data.message })
        dispatch({ type: END_LOADING })
    }
};


export const deleteTask = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.deleteTask(id);

        dispatch({ type: DELETE_TASK, payload: id });
        dispatch({ type: MESSAGE, payload: data.message });
        setTimeout(() => {
            dispatch({ type: MESSAGE, payload: null }); // Set the message to null after a delay
        }, 3000); // Delay in milliseconds (adjust as needed)
        dispatch({ type: END_LOADING });
    } catch (error) {
        const errorMessage = error.response && error.response.data ? error.response.data.message : 'Unknown error occurred';
        dispatch({ type: START_LOADING });
        dispatch({ type: ERROR, payload: errorMessage });
        setTimeout(() => {
            dispatch({ type: ERROR, payload: null }); 
        }, 3000); 
        dispatch({ type: END_LOADING });
    }
};
export const updateTask = (id, task) => async (dispatch) => {
    try {
        const { data } = await api.updateTask(id, task);
        dispatch({ type: UPDATE_TASK, payload: data })
    } catch (error) {
        console.log(error);
    }

};
export const dragAndDrop = (id, dropZone) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.updateTask(id, dropZone);
        dispatch({ type: DRAG_AND_DROP, payload: data })
        dispatch({ type: END_LOADING });
    } catch (error) {
        dispatch({ type: START_LOADING })
        dispatch({ type: ERROR, payload: error.response.data.message })
        dispatch({ type: END_LOADING })
    }

};
// export function dragAndDrop(taskId, dropZone) {
//     return {
//         type: DRAG_AND_DROP,
//         payload: {
//             taskId,
//             dropZone
//         }
//     };
// }

export const createTaskComment = (comment) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        // Create the comment and fetch the updated task separately
        await api.createTaskComment(comment);
        const updatedTask = await api.fetchTask(comment.taskId);

        dispatch({ type: CREATE_TASK_COMMENT, payload: updatedTask });
        dispatch({ type: END_LOADING });
    } catch (error) {
        dispatch({ type: START_LOADING });
        dispatch({ type: ERROR, payload: error.response.data.message });
        dispatch({ type: END_LOADING });
    }
};



export const deleteTaskComment = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        await api.deleteTaskComment(id);
        dispatch({ type: DELETE_TASK_COMMENT, payload: id });
        dispatch({ type: END_LOADING });
    } catch (error) {
        dispatch({ type: START_LOADING })
        dispatch({ type: ERROR, payload: error.response.data.message })
        dispatch({ type: END_LOADING })
    }
};

export const fetchAllTasksComments = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchAllTaskComments();
        dispatch({ type: GET_ALL_TASKS_COMMENTS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        dispatch({ type: START_LOADING })
        dispatch({ type: ERROR, payload: error.response.data.message })
        dispatch({ type: END_LOADING })
    }
};
export const createTaskChecklist = (checklist) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        // Create the checklist and fetch the updated task separately
        await api.createTaskChecklist(checklist);
        const updatedTask = await api.fetchTask(checklist.taskId);

        dispatch({ type: CREATE_TASK_CHECKLIST, payload: updatedTask });
        dispatch({ type: END_LOADING });
    } catch (error) {
        dispatch({ type: START_LOADING });
        dispatch({ type: ERROR, payload: error.response.data.message });
        dispatch({ type: END_LOADING });
    }
};
export const deleteTaskChecklist = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.deleteTaskChecklist(id);
        dispatch({ type: DELETE_TASK_CHECKLIST, payload: id });
        dispatch({ type: MESSAGE, payload: data.message });
        setTimeout(() => {
            dispatch({ type: MESSAGE, payload: null }); // Set the message to null after a delay
        }, 3000); // Delay in milliseconds (adjust as needed)
        dispatch({ type: END_LOADING });
    } catch (error) {
        const errorMessage = error.response && error.response.data ? error.response.data.message : 'Unknown error occurred';
        dispatch({ type: START_LOADING });
        dispatch({ type: ERROR, payload: errorMessage });
        dispatch({ type: END_LOADING });
    }
};

export const fetchAllTaskChecklists = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchAllTaskChecklists();
        dispatch({ type: GET_ALL_TASKS_CHECKLISTS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        dispatch({ type: START_LOADING })
        dispatch({ type: ERROR, payload: error.response.data.message })
        dispatch({ type: END_LOADING })
    }
};

export const updateTaskChecklist = (id, checklist) => async (dispatch) => {
    try {
        const { data } = await api.updateTaskChecklist(id, checklist);

        dispatch({ type: UPDATE_TASK_CHECKLIST, payload: data })
        dispatch({ type: MESSAGE, payload: data.message });
        setTimeout(() => {
            dispatch({ type: MESSAGE, payload: null }); // Set the message to null after a delay
        }, 3000); // Delay in milliseconds (adjust as needed)
    } catch (error) {
        dispatch({ type: START_LOADING })
        dispatch({ type: ERROR, payload: error.response.data.message })
        dispatch({ type: END_LOADING })
    }

};
export function checkWhoIsOpen(type) {
    return {
        type: WHO_OPEN,
        payload: type
    };
}
export function leaveDropZone() {
    return {
        type: TARGET_LEFT,
    };
}
export function targetTheDropZone(status) {
    return {
        type: TARGET_DROP_ZONE,
        payload: { status }
    };
}




export function select(task) {
    return {
        type: SELECT,
        payload: { task }
    };
}
export function boardOpen() {
    return {
        type: BOARD_OPEN
    };
}
export function checkOrUncheckCheckList() {
    return {
        type: CHECK
    };
}
export function drag() {
    return {
        type: DRAG
    };
}
export function dragged() {
    return {
        type: DRAGGED
    };
}