import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../api/api';

const initialState = {
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

export const fetchAllTasks = createAsyncThunk(
    'kanban/fetchAllTasks',
    async () => {
        try {
            const { data } = await api.fetchAllTasks();
            return data
        } catch (error) {
            console.log(error);
        }
    }
);

export const createTask = createAsyncThunk(
    'kanban/createTask',
    async (taskData) => {
        try {
            const { data } = await api.createTask(taskData);
            return data
        } catch (error) {
            console.log(error);
        }
    }
);

export const deleteTask = createAsyncThunk(
    'kanban/deleteTask',
    async (id) => {
        try {
            const { data } = await api.deleteTask(id);
            return data
        } catch (error) {
            console.log(error);
        }
    }
);
export const fetchTask = createAsyncThunk(
    'kanban/fetchTask',
    async (id) => {
        try {
            const { data } = await api.fetchTask(id);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const updateTask = createAsyncThunk(
    'kanban/updateTask',
    async ({ id, task }) => {
        try {
            const { data } = await api.updateTask(id, task);
            return data
        } catch (error) {
            console.log(error);
        }
    }
);

export const createTaskComment = createAsyncThunk(
    'kanban/createTaskComment',
    async (comment) => {
        try {
            const { data } = await api.createTaskComment(comment);
            return data
        } catch (error) {
            console.log(error);
        }
    }
);

export const deleteTaskComment = createAsyncThunk(
    'kanban/deleteTaskComment',
    async (id) => {
        try {
            const { data } = await api.deleteTaskComment(id);
            return data
        } catch (error) {
            console.log(error);
        }
    }
);

export const createTaskChecklist = createAsyncThunk(
    'kanban/createTaskChecklist',
    async (checklist) => {
        try {
            const { data } = await api.createTaskChecklist(checklist);
            return data
        } catch (error) {
            console.log(error)
        }
    }
);

export const deleteTaskChecklist = createAsyncThunk(
    'kanban/deleteTaskChecklist',
    async (id) => {
        try {
            const { data } = await api.deleteTaskChecklist(id);
            return data
        } catch (error) {
            console.log(error)
        }
    }
);

export const updateTaskChecklist = createAsyncThunk(
    'kanban/updateTaskChecklist',
    async ({ id, checklist }) => {
        try {
            const { data } = await api.updateTaskChecklist(id, checklist);
            return data
        } catch (error) {
            console.log(error);
        }
    }
);
export const fetchAllTaskChecklists = createAsyncThunk(
    'kanban/fetchAllTaskChecklists',
    async () => {
        try {
            const { data } = await api.fetchAllTaskChecklists();
            return data;
        } catch (error) {
            throw Error(error.message);
        }
    }
);

const kanbanSlice = createSlice({
    name: 'kanban',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        endLoading: (state) => {
            state.isLoading = false;
        },
        boardOpen: (state) => {
            state.isBoardOpen = true;
        },
        select: (state, action) => {
            state.itemSelected = action.payload;
        },
        targetTheDropZone: (state, action) => {
            state.targetDropZone = action.payload.status;
        },
        leaveDropZone: (state) => {
            state.targetDropZone = null;
        },
        drag: (state) => {
            state.isDragged = true;
        },
        checkOrUncheckCheckList: (state) => {
            state.isChecked = true;
        },
        dragged: (state) => {
            state.isDragged = false;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        checkWhoIsOpen: (state, action) => {
            state.isBoardOpen = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllTasks.fulfilled, (state, action) => {
                state.tasks = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchAllTasks.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAllTasks.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            // Add similar cases for other async actions
            .addCase(createTask.fulfilled, (state, action) => {
                state.tasks.push(action.payload);
            })
            .addCase(createTask.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.tasks = state.tasks.filter((task) => task.id !== action.payload);
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.error = action.error.message;
            })
            // Add cases for other async actions here
            .addCase(updateTask.fulfilled, (state, action) => {
                state.tasks = state.tasks.map((task) =>
                    task.id === action.payload.id ? action.payload : task
                );
            })
            .addCase(updateTask.rejected, (state, action) => {
                state.error = action.error.message;
            })
            // Add cases for other async actions here
            .addCase(createTaskComment.fulfilled, (state, action) => {
                const { id, comments } = action.payload;
                state.tasks = state.tasks.map((task) =>
                    task.id === id ? { ...task, comments } : task
                );
                state.error = null;
            })
            .addCase(createTaskComment.rejected, (state, action) => {
                state.error = action.error.message;
            })
            // Add cases for other async actions here
            .addCase(createTaskChecklist.fulfilled, (state, action) => {
                const { id, checklists } = action.payload;
                state.tasks = state.tasks.map((task) =>
                    task.id === id ? { ...task, checklists } : task
                );
                state.error = null;
            })
            .addCase(createTaskChecklist.rejected, (state, action) => {
                state.error = action.error.message;
            })
            // Add cases for other async actions here
            .addCase(updateTaskChecklist.fulfilled, (state, action) => {
                state.tasks = state.tasks.map((task) =>
                    task.id === action.payload.id ? action.payload : task
                );
            })
            .addCase(updateTaskChecklist.rejected, (state, action) => {
                state.error = action.error.message;
            })
            // Add cases for other async actions here
            .addCase(deleteTaskChecklist.fulfilled, (state, action) => {
                state.tasks = state.tasks.map((task) => ({
                    ...task,
                    checklists: task.checklists.filter(
                        (checklist) => checklist.id !== action.payload
                    ),
                }));
            })
            .addCase(deleteTaskChecklist.rejected, (state, action) => {
                state.error = action.error.message;
            })
            // Add cases for other async actions here
            .addCase(deleteTaskComment.fulfilled, (state, action) => {
                state.tasks = state.tasks.map((task) => ({
                    ...task,
                    comments: task.comments.filter((comment) => comment.id !== action.payload)
                }));
            })
            .addCase(deleteTaskComment.rejected, (state, action) => {
                state.error = action.error.message;
            })
            // Add cases for other async actions here
            .addCase(fetchAllTaskChecklists.fulfilled, (state, action) => {
                // Handle fetching all task checklists success
            })
            .addCase(fetchAllTaskChecklists.rejected, (state, action) => {
                state.error = action.error.message;
            })

    },
});

export const {
    select, checkWhoIsOpen, drag, dragged, dragAndDrop, leaveDropZone, targetTheDropZone

} = kanbanSlice.actions;

export default kanbanSlice.reducer;

