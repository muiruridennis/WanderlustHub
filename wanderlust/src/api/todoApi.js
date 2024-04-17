import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from "./api"

export const todoApi = createApi({
    reducerPath: "todoApi",
    tagTypes: ['Todo'],
    baseQuery: axiosBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    endpoints: (builder) => ({
        addTodo: builder.mutation({
            query: (todo) => ({
                url: "/posts",
                method: "POST",
                body: JSON.stringify({
                    title: todo.title,
                    body: todo.body,
                    id: todo.id,
                }),

            }),
            invalidatesTags: ["Todo"]
        }),
        getAllTodos: builder.query({
            query: () => ({
                url: "/posts",
                method: "GET",
            }),
            providesTags: ["Todo"]

        }),
        updateTodo: builder.mutation({
            query: ({ id, ...todo }) => ({
                url: `/posts/${id}`,
                method: "PUT",
                body: JSON.stringify({
                    title: todo.title,
                    body: todo.body,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }),
            invalidatesTags: ["Todo"]

        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `/posts/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Todo"]

        }),
    })
})
export const {
    useAddTodoMutation,
    useDeleteTodoMutation,
    useGetAllTodosQuery,
    useUpdateTodoMutation,
} = todoApi;