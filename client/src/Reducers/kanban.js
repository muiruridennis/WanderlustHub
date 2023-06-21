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
    FETCH_TASK,
    UPDATE_TASK,
    CREATE_TASK_COMMENT,
    DELETE_TASK_COMMENT,
    CREATE_TASK_CHECKLIST,
    DELETE_TASK_CHECKLIST,
    DRAGGED,
    DRAG,
    CHECK,
    MESSAGE
} from "../Constants/actionTypes";

const initialState = {
    // to fix about checkList from here!!!! Happy coding 
    tasks: [],
    message: null,
    itemSelected: null,
    isBoardOpen: true,
    categoryOpen: null,
    targetDropZone: null,
    isLoading: false,
    error: null,
    isDragged: false,
    isChecked: false,
};
const kanbanReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case BOARD_OPEN:
            return { ...state, isBoardOpen: true };
        case SELECT:
            return { ...state, itemSelected: action.payload };
        case TARGET_DROP_ZONE:
            return { ...state, targetDropZone: action.payload.status };
        case TARGET_LEFT:
            return { ...state, targetDropZone: null };
        case DRAG:
            return { ...state, isDragged: true };
        case CHECK:
            return { ...state, isChecked: true };
        case DRAGGED:
            return { ...state, isDragged: false };
        case DELETE_TASK:
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
        case CREATE_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case GET_ALL_TASKS:
            return { ...state, tasks: action.payload };
        case FETCH_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id ? action.payload : task
                ),
            };

        case UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.payload.id ? action.payload : task)
                //if task is updated it should return a new updated array of tasks otherwise it should return task as was 
            };
        case CREATE_TASK_COMMENT:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload.id) {
                        return {
                            ...action.payload,
                            comments: [
                                ...(task.comments || []), // Spread the previous comments
                                action.payload.comments[action.payload.comments.length - 1] // Add the new comment at the end
                            ]
                        };
                    } else {
                        return task;
                    }
                }),
                error: null, // Clear the error state
            };

        case CREATE_TASK_CHECKLIST:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload.id) {
                        return {
                            ...action.payload,
                            checklists: [
                                ...(task.checklists || []), // Spread the previous comments
                                action.payload.checklists[action.payload.checklists.length - 1] // Add the new comment at the end
                            ]
                        };
                    } else {
                        return task;
                    }
                }),
                error: null, // Clear the error state
            };

        case CREATE_TASK_CHECKLIST:
            const taskId = action.payload.taskId;
            const newChecklist = action.payload.checklist;
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === taskId) {
                        return {
                            ...task,
                            checklists: [...task.checklists, newChecklist],
                        };
                    }
                    return task;
                }),
            };
        case UPDATE_TASK_CHECKLIST:
            return {
                ...state,
                checklists: state.checklists.map((checklist) => checklist.id === action.payload.id ? action.payload : checklist)
            };
        case DELETE_TASK_CHECKLIST:
            return {
                ...state,
                tasks: state.tasks.map(task => ({
                    ...task,
                    checklists: task.checklists.filter(checklist => checklist.id !== action.payload)
                }))
            };

        case DRAG_AND_DROP:
            const { id } = action.payload;
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === id ? action.payload : task)
            };
        case WHO_OPEN:
            return { ...state, categoryOpen: action.payload };
        case ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case MESSAGE:
            return {
                ...state,
                message: action.payload,
            };
        default:
            return state;
    }
}

export default kanbanReducer;
