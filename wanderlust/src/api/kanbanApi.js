import { createApi } from '@reduxjs/toolkit/query/react';
import customBaseQuery from './customBaseQuery';

export const kanbanApi = createApi({
  reducerPath: 'kanbanApi',
  baseQuery: customBaseQuery,
  tagTypes: ['Kanban'],
  endpoints: (builder) => ({
    fetchAllTasks: builder.query({
      query: () => '/kanban/tasks',
    }),
    createTask: builder.mutation({
      query: (taskData) => ({
        url: '/kanban/tasks',
        method: 'POST',
        body: taskData,
      }),
      invalidatesTags: ['Kanban'],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/kanban/tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Kanban'],
    }),
    fetchTask: builder.query({
      query: (id) => `/kanban/tasks/${id}`,
    }),
    updateTask: builder.mutation({
      query: ({ id, task }) => ({
        url: `/kanban/tasks/${id}`,
        method: 'PUT',
        body: task,
      }),
      invalidatesTags: ['Kanban'],
    }),
    createTaskComment: builder.mutation({
      query: (comment) => ({
        url: '/kanban/comments',
        method: 'POST',
        body: comment,
      }),
      invalidatesTags: ['Kanban'],
    }),
    deleteTaskComment: builder.mutation({
      query: (id) => ({
        url: `/kanban/comments/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Kanban'],
    }),
    createTaskChecklist: builder.mutation({
      query: (checklist) => ({
        url: '/kanban/checklists',
        method: 'POST',
        body: checklist,
      }),
      invalidatesTags: ['Kanban'],
    }),
    deleteTaskChecklist: builder.mutation({
      query: (id) => ({
        url: `/kanban/checklists/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Kanban'],
    }),
    updateTaskChecklist: builder.mutation({
      query: ({ id, checklist }) => ({
        url: `/kanban/checklists/${id}`,
        method: 'PUT',
        body: checklist,
      }),
      invalidatesTags: ['Kanban'],
    }),
    fetchAllTaskChecklists: builder.query({
      query: () => '/kanban/checklists',
    }),
  }),
});

export const {
  useFetchAllTasksQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useFetchTaskQuery,
  useUpdateTaskMutation,
  useCreateTaskCommentMutation,
  useDeleteTaskCommentMutation,
  useCreateTaskChecklistMutation,
  useDeleteTaskChecklistMutation,
  useUpdateTaskChecklistMutation,
  useFetchAllTaskChecklistsQuery,
} = kanbanApi;
